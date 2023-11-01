// change, avec délai, les couleurs de la bg img au hover de l'image

const contactImage = document.querySelector(".contact-img");
const bg = document.querySelector(".bg");

contactImage.addEventListener("mouseenter", changeImg);
contactImage.addEventListener("mouseleave", resetImg);

function changeImg() {
  contactImage.src = "../assets/svg/cat2-green.svg";
  setTimeout(function () {
    bg.style.backgroundImage = "url(../assets/svg/catandmouse-inverse.svg)";
  }, 500);
}

function resetImg() {
  setTimeout(function () {
    contactImage.src = "../assets/svg/cat2.svg";
  }, 500);
  setTimeout(function () {
    bg.style.backgroundImage = "url(../assets/svg/catandmouse.svg)";
  }, 1000);
}
