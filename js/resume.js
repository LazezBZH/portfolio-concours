const cvEmbed = document.querySelector(".cvEmbed ");
const cvBtn = document.querySelector(".cvBtn");
const closeEmbed = document.querySelector(".closeEmbed");
const resumeToSelection = document.querySelectorAll(".resumeToSelection");

resumeToSelection.forEach((select) =>
  select.addEventListener("click", setSelection)
);
closeEmbed.addEventListener("click", hideCV);

function setSelection(e) {
  let tag = e.target.value;
  let name = e.target.name;
  window.location.href = "/art/selection.html?tag=" + tag + "&name=" + name;
}

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

// resume loader

const resumeLoader = document.querySelectorAll(".resume-section");
const resumeMain = document.querySelector(".resume-main");

window.addEventListener("load", stopResumeLoader);

let resumeLoaded = sessionStorage.getItem("resume-loaded") || false;
console.log(resumeLoaded);
if (resumeLoaded) {
  resumeLoader.forEach((resumeLoad) =>
    resumeLoad.classList.remove("resume-section_load")
  );
}
sessionStorage.setItem("resume-loaded", resumeLoaded);

function stopResumeLoader() {
  setTimeout(() => {
    resumeLoaded = true;
    sessionStorage.setItem("resume-loaded", resumeLoaded);
  }, 3000);
  console.log(resumeLoaded);
}
