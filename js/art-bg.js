const bg = document.querySelector(".bg");
const cards = document.querySelectorAll(".card-art");

cards.forEach((card) => card.addEventListener("mouseenter", changeBg));
cards.forEach((card) => card.addEventListener("mouseleave", resetBg));

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
