const main = document.getElementById("root");
const artTitle = document.querySelector(".arts-title");

let myArts = [
  {
    title: "Joie de vivre",
    src: "/assets/works/benefits/happiness.webp",
    text: "Ce magnifique sourire sur ce radieux visage est mon oeuvre.",
    effect: "J'existe et l'humain est heureux.",
    tags: ["benefits", "petting", "living", "presence"],
  },
  {
    title: "Source de lien social",
    src: "/assets/works/benefits/social.webp",
    text: "Text 02",
    effect: "J'existe et l'humain est heureux.",
    tags: ["benefits", "living", "presence"],
  },
  {
    title: "Bien être",
    src: "/assets/works/benefits/wellness.webp",
    text: "Text 03",
    effect: "J'existe et l'humain est heureux.",
    tags: ["benefits", "petting", "presence"],
  },
  {
    title: "Carton en miettes",
    src: "/assets/works/destroy/cardboard.webp",
    text: "Text 04",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Cigarette inutilisable",
    src: "/assets/works/destroy/cigarette.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "claws"],
  },
  {
    title: "Décoration cassée",
    src: "/assets/works/destroy/decoration.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "living", "tail"],
  },
  {
    title: "Vaisselle foutue",
    src: "/assets/works/destroy/dishes.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "living", "tail"],
  },
  {
    title: "Révolution!",
    src: "/assets/works/destroy/flag.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "claws"],
  },
  {
    title: "Tu m'as bien vu?",
    src: "/assets/works/destroy/glasses.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "teeth"],
  },
  {
    title: "Document'Art",
    src: "/assets/works/destroy/paper.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Non mais Allo quoi!",
    src: "/assets/works/destroy/phone.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Adieu souvenirs",
    src: "/assets/works/destroy/picture.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Quand j'étais petit...",
    src: "/assets/works/destroy/toy.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Another break in the wall",
    src: "/assets/works/destroy/wall.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["destroy", "claws"],
  },
  {
    title: "Atchoummm!...",
    src: "/assets/works/health/allergy.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["health", "living", "fur"],
  },
  {
    title: "Aïe!",
    src: "/assets/works/health/fracture.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["health", "destroy", "living"],
  },
  {
    title: "à vous rendre fou!",
    src: "/assets/works/health/madness.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["health", "door", "wake"],
  },
  {
    title: "toxo panic!.",
    src: "/assets/works/health/pregant.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["health", "poo"],
  },
  {
    title: "je veux dormir",
    src: "/assets/works/health/tired.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["health", "wake"],
  },
  {
    title: "Bob le dob des voisins",
    src: "/assets/works/kill/dog.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["kill", "teeth"],
  },
  {
    title: "Pas encore né, déjà tué!",
    src: "/assets/works/kill/egg.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["kill", "teeth"],
  },
  {
    title: "Où sont les chips?",
    src: "/assets/works/kill/fishes.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["kill", "teeth", "claws"],
  },
  {
    title: "R.I.P. Mamy Josette",
    src: "/assets/works/kill/mamy.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["kill", "living"],
  },
  {
    title: "Une souris pas verte...",
    src: "/assets/works/kill/mouse.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["kill", "teeth"],
  },
  {
    title: "Variations sur un rongeur, la musaraigne.",
    src: "/assets/works/kill/musaraigne.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["kill", "teeth"],
  },
  {
    title: "J'accepte les cookies",
    src: "/assets/works/rob/cookie.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["rob", "teeth"],
  },
  {
    title: "carnivore avant tout",
    src: "/assets/works/rob/meat.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["rob", "teeth"],
  },
  {
    title: "délice blanc",
    src: "/assets/works/rob/milk.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["rob", "tongue"],
  },
  {
    title: "fan de barbecue",
    src: "/assets/works/rob/sausage.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["rob", "teeth"],
  },
  {
    title: "mais où s'en vont les chaussettes qu'on ne retrouve jamais?",
    src: "/assets/works/rob/socks.webp",
    text: "Text 05",
    effect: "J'existe et l'humain est heureux.",
    tags: ["rob", "paw"],
  },
];

let tag = query("tag");
let thisName = query("name");

switch (tag) {
  case "benefits":
    tag = "Bienfaits";
    break;
  case "destroy":
    tag = "destruction";
    break;
  case "kill":
    tag = "meurtres";
    break;
  case "health":
    tag = "santé";
    break;
  case "rob":
    tag = "vols";
    break;
  case "petting":
    tag = "calins";
    break;
  case "poo":
    tag = "crottes";
    break;
  case "teeth":
    tag = "dents";
    break;
  case "living":
    tag = "exister";
    break;
  case "claws":
    tag = "griffes";
    break;
  case "tongue":
    tag = "langue";
    break;
  case "paw":
    tag = "pattes";
    break;
  case "fur":
    tag = "poils";
    break;
  case "door":
    tag = "porte";
    break;
  case "presence":
    tag = "présence";
    break;
  case "tail":
    tag = "queue";
    break;
  case "wake":
    tag = "réveil";
    break;

  default:
    tag = "";
}

switch (thisName) {
  case "category":
    thisName = "catégorie";
    thisH1 = "Mes oeuvres dans la <span class='name'>" + thisName + "</span>";
    break;
  default:
    thisDay = "technologie";
    thisH1 =
      "Mes oeuvres réalisées avec la <span class='name'>" +
      thisName +
      "</span>";
}

let list = new MySelection();
for (let i = 0; i < myArts.length; i++) {
  let art = new MyArt(myArts[i]);
  list.add(art);
}
let listToDisplay = list.all.filter((art) => art.tags.includes(query("tag")));
list.displayArts(listToDisplay);

artTitle.innerHTML = `<h1>${thisH1} <span class="tag">"${tag}"</span></h1>`;

const artImg = document.querySelectorAll(".artImg");
const backSide = document.querySelectorAll(".backSide-content");

artImg.forEach((image) => image.addEventListener("mouseenter", showBack));
backSide.forEach((back) => back.addEventListener("mouseleave", showFront));
function showBack(e) {
  e.target.parentNode.parentNode.style.transform = "rotateY(180deg)";
}
function showFront(e) {
  e.target.parentNode.parentNode.style.transform = "rotateY(0deg)";
}

const tagArts = document.querySelectorAll(".tag-art");
tagArts.forEach((tagArt) => tagArt.addEventListener("click", changeSelection));
function changeSelection(e) {
  window.location.href =
    "/art/selection.html?tag=" + e.target.value + "&name=" + e.target.name;
}
