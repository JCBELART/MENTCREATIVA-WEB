/* Lightbox para la galería estática del portfolio. */
(function () {
  'use strict';
  var box = document.getElementById('ment-lightbox');
  if (!box) {
    box = document.createElement('div');
    box.id = 'ment-lightbox';
    box.innerHTML = '<span class="ment-close" aria-label="Cerrar">&#215;</span><img alt="">';
    document.body.appendChild(box);
  }
  var img = box.querySelector('img');
  function close() { box.classList.remove('open'); img.removeAttribute('src'); }
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t && t.closest) {
      var a = t.closest('#ment-portfolio-gallery a.ment-cell');
      if (a) {
        e.preventDefault();
        img.src = a.getAttribute('href');
        img.alt = a.getAttribute('title') || '';
        box.classList.add('open');
        return;
      }
    }
    if (t === box || (t && t.classList && t.classList.contains('ment-close'))) close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
