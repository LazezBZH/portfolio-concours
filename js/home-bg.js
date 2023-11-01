// change, avec délai, les couleurs de la bg img au hover du text carrousel

const bg = document.querySelector(".bg");

cards.addEventListener("mouseenter", changeBg);
cards.addEventListener("mouseleave", resetBg);

function changeBg() {
  setTimeout(function () {
    bg.style.backgroundImage = "url(../assets/svg/catandmouse-blue.svg)";
  }, 200);
}

function resetBg() {
  setTimeout(function () {
    bg.style.backgroundImage = "url(../assets/svg/catandmouse.svg)";
  }, 500);
}
