const loader = document.querySelector(".loader");

window.addEventListener("load", stopLoader);
let loaded = sessionStorage.getItem("loaded") || false;
if (loaded) {
  loader.style.animation = "none";
}
sessionStorage.setItem("loaded", loaded);
function stopLoader() {
  setTimeout(() => {
    loaded = true;
    sessionStorage.setItem("loaded", loaded);
  }, 3000);
  console.log(loaded);
}
