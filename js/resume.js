const cvEmbed = document.querySelector(".cvEmbed ");
const cvBtn = document.querySelector(".cvBtn");
const closeEmbed = document.querySelector(".closeEmbed");

closeEmbed.addEventListener("click", hideCV);

function showCV() {
  cvEmbed.style.display = "block";
  window.scrollTo(0, 0);
}
function hideCV() {
  cvEmbed.style.display = "none";
}
function isMobileDevice() {
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    cvBtn.style.display = "none";
  } else {
    cvBtn.style.display = "block";
    cvBtn.addEventListener("click", showCV);
  }
}
isMobileDevice();
