let audioBaixo = document.querySelectorAll(".volBaixo");

for (let i = 0; i < audioBaixo.length; i++) {
  if (i === 0) {
    audioBaixo[i].volume = 0.1;
  } else {
    audioBaixo[i].volume = 0.3;
  }
}

function initSom() {
  function tocaSom(idMobSom) {
    document.querySelector(idMobSom).play();
  }

  const listaTecla = document.querySelectorAll(".tecla");

  for (let i = 0; i < listaTecla.length; i++) {
    const tecla = listaTecla[i];
    const mobFace = tecla.classList[1];
    const mobSom = `#som_${mobFace}`;

    tecla.onclick = function () {
      tocaSom(mobSom);
    };
  }
}
initSom();
