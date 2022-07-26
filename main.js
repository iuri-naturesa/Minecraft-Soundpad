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
