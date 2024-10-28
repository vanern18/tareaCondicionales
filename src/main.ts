let score: number = 0;

const muestraPuntuacion = () => {
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.innerText = score.toString();
    if (score > 7.5) {
      window.alert("GAME OVER");
      dameCarta.disabled = true;
    }
  }
};

const dameCartaClick = () => {
  let generarAleatorio = Math.ceil(Math.random() * 10);
  if (generarAleatorio > 7) {
    generarAleatorio = generarAleatorio + 2;
  }
  console.log(generarAleatorio);
  mostrarCarta(generarAleatorio);
};

const dameCarta = document.getElementById("dameCartaButton");
if (dameCarta) {
  dameCarta.addEventListener("click", dameCartaClick);
}

const mostrarCarta = (carta: number): void => {
  const elegir = document.getElementById("carta");
  console.log(elegir.src);

  switch (carta) {
    case 1:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;

    case 2:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;

    case 3:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;

    case 4:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;

    case 5:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;

    case 6:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;

    case 7:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;

    case 10:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;

    case 11:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";

      break;

    case 12:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;

    default:
      elegir.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      break;
  }
  if (carta > 7) {
    score += 0.5;
  } else {
    score += carta;
  }
  muestraPuntuacion();
};
const mePlantoClick = () => {
  dameCarta.disabled = true;
  if (score < 4) {
    window.alert("Has sido muy conservador");
  }
  if (score == 5) {
    window.alert("Has sido muy conservador");
  }
  if (score == 6 || score == 7) {
    window.alert("Casi casi...");
  }
  if (score == 7.5) {
    window.alert("¡ Lo has clavado! ¡Enhorabuena!");
  }
};
const mePlanto = document.getElementById("mePlantoButton");
if (mePlanto) {
  mePlanto.addEventListener("click", mePlantoClick);
}

const nuevaPartidaClick = () => {
  score = 0;
  muestraPuntuacion();
  const elegir = document.getElementById("carta");
  elegir.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    dameCarta.disabled = false;
};

const nuevaPartida = document.getElementById("nuevaPartidaButton");
if (nuevaPartida) {
  nuevaPartida.addEventListener("click", nuevaPartidaClick);
}
