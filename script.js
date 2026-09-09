/* Link na Bio — interações leves */

/* Fallback dos espaços de imagem: se o arquivo em /img não existir,
   mostra o placeholder numerado no lugar. */
function imgFallback(img, label) {
  var box = img.parentNode;
  if (!box) return;
  img.remove();
  box.classList.add('img-ph');
  box.innerHTML = '<span>' + label + '</span>';
}

/* Arrastar carrossel com o mouse no desktop */
document.querySelectorAll('[data-carousel]').forEach((track) => {
  let down = false, startX = 0, startScroll = 0;

  track.addEventListener('mousedown', (e) => {
    down = true;
    startX = e.pageX;
    startScroll = track.scrollLeft;
    track.style.cursor = 'grabbing';
  });

  const end = () => { down = false; track.style.cursor = ''; };
  track.addEventListener('mouseleave', end);
  track.addEventListener('mouseup', end);

  track.addEventListener('mousemove', (e) => {
    if (!down) return;
    e.preventDefault();
    track.scrollLeft = startScroll - (e.pageX - startX);
  });
});
