const main = document.getElementById("root");
const artTitle = document.querySelector(".arts-title");
const seeAll = document.querySelector(".see-all");

let tag = query("tag");
thisName = query("name");

thisH1 = titleToDisplay(thisName);
tagToDisplay = tagToBeDisplay(tag);

fetch("/data/myArt.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function (json) {
    let list = new MySelection();
    for (let i = 0; i < json.myArts.length; i++) {
      let art = new MyArt(json.myArts[i]);
      list.add(art);
    }

    // list.displayTags();
    let listToDisplay = "";
    if (tag) {
      // si une sélection a été faite
      listToDisplay = list.all.filter((art) => art.tags.includes(query("tag")));
      if (listToDisplay.length === 0 || thisH1 === "error") {
        // gestion des erreurs
        listToDisplay = [];
        artTitle.innerHTML = `<h1 class="error">Une petite erreur s'est produite. <br> <span class="tag">Nous en sommes désolés.</span><br>Vous pouvez effectuer une autre sélection ou visualiser l'ensemble des oeuvres grâce aux boutons ci-dessus.</h1>`;
      } else {
        artTitle.innerHTML = `<h1>${thisH1} <span class="tag">"${tagToDisplay}"</span></h1>`;
      }
    } else {
      // pas de sélection, tout est visible
      listToDisplay = list.all;
      artTitle.innerHTML = `<h1>Toutes mes oeuvres!</h1>`;
      seeAll.style.display = "none";
    }
    list.displayArts(listToDisplay);
    // changer la sélection via les tags
    const tagArts = document.querySelectorAll(".tag-art");
    tagArts.forEach((tagArt) =>
      tagArt.addEventListener("click", changeSelection)
    );
    function changeSelection(e) {
      window.location.href =
        "/art/selection.html?tag=" + e.target.value + "&name=" + e.target.name;
    }
  });

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
