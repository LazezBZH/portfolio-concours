const main = document.getElementById("root");
const artTitle = document.querySelector(".arts-title");

let tag = query("tag");
thisName = query("name");
console.log(thisName);
thisH1 = titleToDisplay(thisName);
tagToDisplay = tagToBeDisplay(tag);

// génère dynamiquement la sélection
let list = new MySelection();
for (let i = 0; i < myArts.length; i++) {
  let art = new MyArt(myArts[i]);
  list.add(art);
}
let listToDisplay = list.all.filter((art) => art.tags.includes(query("tag")));
list.displayArts(listToDisplay);

artTitle.innerHTML = `<h1>${thisH1} <span class="tag">"${tagToDisplay}"</span></h1>`;

const showBack = document.querySelectorAll(".showBack");
const showFront = document.querySelectorAll(".showFront");
const innerCards = document.querySelectorAll(".innerCard");

showBack.forEach((elt) => elt.addEventListener("click", showTheBack));
showFront.forEach((elt) => elt.addEventListener("click", showTheFront));

// retourner la carte
function showTheBack(e) {
  innerCards.forEach(
    (innerCard) => (innerCard.style.transform = "rotateY(0deg)")
  );
  e.target.parentNode.parentNode.style.transform = "rotateY(180deg)";
}
function showTheFront(e) {
  e.target.parentNode.parentNode.style.transform = "rotateY(0deg)";
}

// changer la sélection via les tags
const tagArts = document.querySelectorAll(".tag-art");
tagArts.forEach((tagArt) => tagArt.addEventListener("click", changeSelection));
function changeSelection(e) {
  window.location.href =
    "/art/selection.html?tag=" + e.target.value + "&name=" + e.target.name;
}
