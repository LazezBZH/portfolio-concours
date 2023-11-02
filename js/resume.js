const cvEmbed = document.querySelector(".cvEmbed ");
const cvBtn = document.querySelector(".cvBtn");
const closeEmbed = document.querySelector(".closeEmbed");
const resumeToSelection = document.querySelectorAll(".resumeToSelection");

// voir une sélection d'après les compétences du cv
resumeToSelection.forEach((select) =>
  select.addEventListener("click", setSelection)
);
closeEmbed.addEventListener("click", hideCV);

function setSelection(e) {
  let tag = e.target.value;
  let name = e.target.name;
  window.location.href = "/art/selection.html?tag=" + tag + "&name=" + name;
}

// visuliser cv pdf
function showCV() {
  cvEmbed.style.display = "block";
  window.scrollTo(0, 0);
}
function hideCV() {
  cvEmbed.style.display = "none";
}

// masquer en version mobile la visualisation du pdf (suite à constat enmbed ne fonctionne pas sur mobil)
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

// resume loader apparition fondue = empêcher qu'il ne soit joué à chaque fois

const resumeLoader = document.querySelectorAll(".resume-section");
const resumeMain = document.querySelector(".resume-main");

window.addEventListener("load", stopResumeLoader);

let resumeLoaded = sessionStorage.getItem("resume-loaded") || false;
function setIsLoad() {
  if (resumeLoaded) {
    resumeLoader.forEach((resumeLoad) => {
      resumeLoad.classList.remove("resume-section_load");
      resumeLoad.classList.add("resume-section_loaded");
    });
  } else if (!resumeLoaded) {
    resumeLoader.forEach((resumeLoad) => {
      resumeLoad.classList.add("resume-section_load");
      resumeLoad.classList.remove("resume-section_loaded");
    });
  }
}
setIsLoad();

sessionStorage.setItem("resume-loaded", resumeLoaded);

function stopResumeLoader() {
  setTimeout(() => {
    resumeLoaded = true;
    sessionStorage.setItem("resume-loaded", resumeLoaded);
    setIsLoad();
  }, 3000);
}
