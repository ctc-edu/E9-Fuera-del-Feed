/* Visita guiada · Fuera del Feed
   Uso: <script src="visita.js"></script>  (solo botón)
        <script src="visita.js" data-auto="1"></script>  (arranca sola al abrir)
   No guarda datos. */
(function () {
  var me = document.currentScript, AUTO = me && me.getAttribute('data-auto') === '1';
  var F = '"NT Bau", system-ui, sans-serif', H = '"Roca One Light", Georgia, serif';
  var C = { ink: '#001F19', blue: '#2F6FE0', mint: '#6BE3D7', sky: '#EAF2FF', orange: '#F47B20' };

  function q(s, r) { return (r || document).querySelector(s); }
  function qa(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function btnText(t) { return qa('[data-menu] button').filter(function (b) { return (b.textContent || '').indexOf(t) >= 0; })[0]; }
  function tabs() {
    var b = qa('[data-menu] button').filter(function (x) { return /Transmisi/.test(x.textContent || ''); })[0];
    return b ? b.parentElement : q('[data-menu]');
  }
  function section() { return q('section[data-screen-label]'); }

  var STEPS = [
    { t: 'Así funciona tu episodio', d: 'Te muestro en 1 minuto dónde está cada cosa. Puedes saltar la visita cuando quieras.', e: '👋' },
    { el: tabs, t: 'Las 6 partes', d: 'Avanza en orden: Inicio, Transmisión, Valentina, Escenas, Comprueba y Cierre. Lo que terminas queda con ✓. Puedes volver a cualquier parte.' },
    { el: function () { return q('[aria-label="Zoom"]'); }, t: 'Tamaño de la letra', d: 'Usa − y + para agrandar o achicar el texto. La lupa vuelve al tamaño normal.' },
    { el: function () { return btnText('Sonido'); }, t: 'Sonido', d: 'Activa o apaga los sonidos de los juegos.' },
    { el: function () { return btnText('Pantalla completa') || btnText('Salir'); }, t: 'Pantalla completa', d: 'Para trabajar sin distracciones. Sales con el mismo botón o con la tecla Esc.' },
    { el: section, t: 'Tu pantalla de trabajo', d: 'Lee, juega y decide aquí. Al final de cada pantalla, un botón azul te lleva a la siguiente.' },
    { t: 'En Escenas', e: '🎬', d: 'Haz primero las marcadas <b>● Obligatoria</b>. Cada escena tiene 3 pasos: <b>Prueba · Descubre · Crea</b>. Abre el <b>📘 Paso a paso</b> si usas una herramienta.',
      chips: [['Nota', 'lo que todos logran'], ['Reportaje', 'reto extra'], ['Exclusiva', 'reto extra']] },
    { t: 'Tu bitácora', e: '📓', d: 'Cuando veas el aviso naranja <b>Es momento de abrir tu bitácora</b>, entra al Campus CTC y registra lo que se pide. Este material no guarda lo que escribes.', warm: 1 },
    { t: '¡Listo!', e: '🎙️', d: 'Si quieres ver esta visita otra vez, toca el botón <b>? Visita guiada</b>, abajo a la izquierda.', last: 1 }
  ];

  var root, hole, card, i = 0, on = false, raf;

  function css(el, o) { for (var k in o) el.style[k] = o[k]; return el; }
  function mk(tag, o, html) { var e = document.createElement(tag); if (o) css(e, o); if (html != null) e.innerHTML = html; return e; }

  function build() {
    var st = document.createElement('style');
    st.textContent = '.vg-next,.vg-prev{box-sizing:border-box !important;height:44px !important;border-radius:12px !important;font-family:"NT Bau",system-ui,sans-serif !important;font-weight:700 !important;cursor:pointer;display:inline-flex !important;align-items:center;justify-content:center;transition:background-color .15s ease-out,transform .12s ease-out;margin:0 !important}.vg-next{border:0 !important;background:#2F6FE0 !important;color:#FFFFFF !important;font-size:15px !important;padding:0 20px !important;box-shadow:0 6px 16px rgba(47,111,224,.28)}.vg-next:hover{background:#1F4FB0 !important}.vg-prev{width:44px !important;padding:0 !important;border:1px solid #C5D3EA !important;background:#FFFFFF !important;color:#001F19 !important;font-size:18px !important}.vg-prev:hover{background:#F2F6FC !important}.vg-next:active,.vg-prev:active{transform:scale(.97)}.vg-next:focus-visible,.vg-prev:focus-visible,[data-v]:focus-visible{outline:3px solid #6BE3D7;outline-offset:2px}';
    document.head.appendChild(st);
    root = mk('div', { position: 'fixed', inset: '0', zIndex: '2147483000', fontFamily: F, color: C.ink });
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-label', 'Visita guiada');
    var shade = mk('div', { position: 'absolute', inset: '0' });
    shade.addEventListener('click', function (e) { e.stopPropagation(); });
    hole = mk('div', { position: 'fixed', borderRadius: '14px', boxShadow: '0 0 0 9999px rgba(0,31,25,.66)', outline: '3px solid ' + C.mint, outlineOffset: '2px', transition: 'all .25s ease-out', pointerEvents: 'none' });
    card = mk('div', { position: 'fixed', width: 'min(360px, calc(100vw - 24px))', background: '#FFFFFF', borderRadius: '20px', padding: '18px 18px 14px', boxShadow: '0 18px 44px rgba(0,0,0,.28)', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'top .25s ease-out, left .25s ease-out, opacity .2s ease-out', boxSizing: 'border-box' });
    root.appendChild(shade); root.appendChild(hole); root.appendChild(card);
    document.body.appendChild(root);
  }

  function render() {
    var s = STEPS[i], el = s.el ? s.el() : null, r = el ? el.getBoundingClientRect() : null;
    if (r && (r.width < 2 || r.height < 2)) r = null;
    var dots = STEPS.map(function (x, k) { return '<span style="width:' + (k === i ? 18 : 7) + 'px;height:7px;border-radius:7px;background:' + (k <= i ? C.blue : '#DCE6F5') + ';transition:width .2s;"></span>'; }).join('');
    var chips = s.chips ? '<div style="display:flex;flex-wrap:wrap;gap:6px;">' + s.chips.map(function (c) { return '<span style="background:' + C.sky + ';border-radius:999px;padding:5px 10px;font-size:13px;"><b>' + c[0] + '</b> · ' + c[1] + '</span>'; }).join('') + '</div>' : '';
    card.innerHTML =
      '<div style="display:flex;align-items:center;gap:10px;">' + (s.e ? '<span style="font-size:28px;line-height:1;">' + s.e + '</span>' : '') +
      '<b style="font-family:' + H + ';font-weight:300;font-size:24px;line-height:1.1;flex:1;">' + s.t + '</b>' +
      '<span style="font-size:13px;font-weight:700;color:#5A6782;">' + (i + 1) + '/' + STEPS.length + '</span></div>' +
      '<div style="font-size:15px;line-height:1.55;' + (s.warm ? 'background:#FFF3EA;border:2px solid ' + C.orange + ';border-radius:14px;padding:10px 12px;' : '') + '">' + s.d + '</div>' + chips +
      '<div style="display:flex;gap:4px;margin-top:2px;">' + dots + '</div>' +
      '<div style="display:flex;align-items:center;gap:8px;">' +
      (s.last ? '' : '<button type="button" data-v="skip" style="border:0;background:none;color:#5A6782;font:700 14px ' + F + ';padding:8px 4px;cursor:pointer;text-decoration:underline;text-underline-offset:3px;">Saltar</button>') +
      '<span style="flex:1;"></span>' +
      (i > 0 ? '<button type="button" data-v="prev" class="vg-prev" aria-label="Paso anterior">←</button>' : '') +
      '<button type="button" data-v="next" class="vg-next">' + (s.last ? 'Empezar ✓' : i === 0 ? 'Ver visita →' : 'Siguiente →') + '</button></div>';
    qa('button', card).forEach(function (b) { b.addEventListener('click', function () { var v = b.getAttribute('data-v'); if (v === 'next') go(1); else if (v === 'prev') go(-1); else stop(); }); });
    var W = innerWidth, Hh = innerHeight, cw = card.offsetWidth, ch = card.offsetHeight, pad = 8;
    if (r) {
      var top = Math.max(6, r.top - pad), h = Math.min(r.height + pad * 2, Hh - top - 6);
      css(hole, { opacity: '1', left: (r.left - pad) + 'px', top: top + 'px', width: (r.width + pad * 2) + 'px', height: h + 'px' });
      var y = top + h + 12; if (y + ch > Hh - 10) y = Math.max(10, top - ch - 12); if (y + ch > Hh - 10) y = Hh - ch - 10;
      var x = Math.min(Math.max(12, r.left + r.width / 2 - cw / 2), W - cw - 12);
      css(card, { left: x + 'px', top: y + 'px' });
    } else {
      css(hole, { opacity: '1', left: (W / 2) + 'px', top: (Hh / 2) + 'px', width: '0px', height: '0px', outline: '0' });
      css(card, { left: (W / 2 - cw / 2) + 'px', top: Math.max(10, Hh / 2 - ch / 2) + 'px' });
    }
    if (r) hole.style.outline = '3px solid ' + C.mint;
    var nb = q('[data-v="next"]', card); if (nb) nb.focus({ preventScroll: true });
  }

  function go(d) { i += d; if (i >= STEPS.length) return stop(); if (i < 0) i = 0; render(); }
  function reflow() { if (!on) return; cancelAnimationFrame(raf); raf = requestAnimationFrame(render); }
  function key(e) { if (!on) return; if (e.key === 'Escape') { e.stopPropagation(); stop(); } else if (e.key === 'ArrowRight') go(1); else if (e.key === 'ArrowLeft') go(-1); }

  function start() {
    if (on) return; on = true; i = 0;
    try { window.scrollTo(0, 0); } catch (e) {}
    if (!root) build(); root.style.display = 'block';
    setTimeout(render, 60);
  }
  function stop() { on = false; if (root) root.style.display = 'none'; if (fab) fab.focus({ preventScroll: true }); }

  var fab;
  function addFab() {
    fab = mk('button', { position: 'fixed', left: '14px', bottom: '14px', zIndex: '2147482000', border: '0', background: C.ink, color: '#FFFFFF', font: '700 14px ' + F, padding: '10px 14px', borderRadius: '999px', cursor: 'pointer', boxShadow: '0 6px 18px rgba(0,31,25,.25)', display: 'flex', alignItems: 'center', gap: '8px' },
      '<span style="width:22px;height:22px;border-radius:50%;background:' + C.mint + ';color:' + C.ink + ';display:inline-flex;align-items:center;justify-content:center;font-size:13px;">?</span>Visita guiada');
    fab.type = 'button'; fab.setAttribute('aria-label', 'Ver la visita guiada');
    fab.addEventListener('click', start);
    document.body.appendChild(fab);
  }

  function ready(cb) {
    var n = 0, t = setInterval(function () { n++; if (q('[data-menu] button') && section() || n > 100) { clearInterval(t); setTimeout(cb, 500); } }, 100);
  }

  function init() {
    addFab();
    addEventListener('resize', reflow); addEventListener('scroll', reflow, true); document.addEventListener('keydown', key, true);
    if (AUTO) ready(start);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
