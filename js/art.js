const buttons = document.querySelectorAll(".buttons");

buttons.forEach((btn) => btn.addEventListener("click", setTag));

function setTag(e) {
  let tag = e.target.value;
  let name = e.target.name;
  window.location.href = "/art/selection.html?tag=" + tag + "&name=" + name;
}
