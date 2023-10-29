const cvEmbed = document.querySelector(".cvEmbed ");
const cvBtn = document.querySelector(".cvBtn");
const closeEmbed = document.querySelector(".closeEmbed");

cvBtn.addEventListener("click", showCV);
closeEmbed.addEventListener("click", hideCV);

function showCV() {
  cvEmbed.style.display = "block";
  window.scrollTo(0, 0);
}
function hideCV() {
  cvEmbed.style.display = "none";
}
