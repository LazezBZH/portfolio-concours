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
    text: "Mes humains aiment publier à propos de moi sur les réseaux sociaux.",
    effect: "La popularité de l'humain augmente.",
    tags: ["benefits", "living", "presence"],
  },
  {
    title: "Bien être",
    src: "/assets/works/benefits/wellness.webp",
    text: "J'apporte un bien-être fou à mes humains.",
    effect: "Admirez la détente, la zénitude.",
    tags: ["benefits", "petting", "presence"],
  },
  {
    title: "Carton en miettes",
    src: "/assets/works/destroy/cardboard.webp",
    text: "J'adore les livraisons Amazon.",
    effect: "Mes humains râlent de devoir nettoyer!",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Cigarette inutilisable",
    src: "/assets/works/destroy/cigarette.webp",
    text: "Beurk ça n'était pas bon!",
    effect:
      "L'humain a crié! Je ne comprends pas, une de moins c'est bon pour sa santé!",
    tags: ["destroy", "claws"],
  },
  {
    title: "Décoration cassée",
    src: "/assets/works/destroy/decoration.webp",
    text: "Vase hérité de mamy Josette en miette.",
    effect: 'Cris, pleurs..."il valait 300.000€!"',
    tags: ["destroy", "living", "tail"],
  },
  {
    title: "Vaisselle foutue",
    src: "/assets/works/destroy/dishes.webp",
    text: "J'aime la destruction de masse.",
    effect: "Pas vraiment content, vous pouvez le deviner.",
    tags: ["destroy", "living", "tail"],
  },
  {
    title: "Révolution!",
    src: "/assets/works/destroy/flag.webp",
    text: "Parfois je m'attaque à une nation entière.",
    effect: "On a frolé un confit mondial ce jour-là.",
    tags: ["destroy", "claws"],
  },
  {
    title: "Tu m'as bien vu?",
    src: "/assets/works/destroy/glasses.webp",
    text: "Il est fou Aff le Loup!",
    effect: "Heu, ben, pas content.",
    tags: ["destroy", "health", "teeth"],
  },
  {
    title: "Document'Art",
    src: "/assets/works/destroy/paper.webp",
    text: "Je ne sais pas lire mais je sais détruire!",
    effect:
      "Ils étaient heureux en fait, c'était le testament de many Josette les déshéritant.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Non mais Allo quoi!",
    src: "/assets/works/destroy/phone.webp",
    text: "Savez-vous que mes dents sont plus fortes qu'un écran?",
    effect: "Sa vie était foutue.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Adieu souvenirs",
    src: "/assets/works/destroy/picture.webp",
    text: "Destruct'Art photographique.",
    effect: "L'humain a râlé comme toujours.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Quand j'étais petit...",
    src: "/assets/works/destroy/toy.webp",
    text: "Je croyais que ça se mangeait!",
    effect: "Le petit humain a beaucoup pleuré.",
    tags: ["destroy", "teeth", "claws"],
  },
  {
    title: "Another break in the wall",
    src: "/assets/works/destroy/wall.webp",
    text: "Cela m'a demandé beaucoup de travail.",
    effect: "Triste, il a ENCORE crié.",
    tags: ["destroy", "claws"],
  },
  {
    title: "Atchoummm!...",
    src: "/assets/works/health/allergy.webp",
    text: "Il parait que je suis source d'allergie.",
    effect: 'Il dit un mot bizarre "Atchoummm!" et ses yeux deviennent rouges.',
    tags: ["health", "living", "fur"],
  },
  {
    title: "Aïe!",
    src: "/assets/works/health/fracture.webp",
    text: "Parfois, je ne tue pas, je blesse juste.",
    effect: "Je ne l'ai jamais entendu crier autant.",
    tags: ["health", "destroy", "living"],
  },
  {
    title: "à vous rendre fou!",
    src: "/assets/works/health/madness.webp",
    text: "Il parait qu'on ne peut pas entrer et sortir en même temps. ",
    effect: "Il va voir un ami à lui qui s'appelle Psy.",
    tags: ["health", "door", "wake"],
  },
  {
    title: "toxo panic!.",
    src: "/assets/works/health/pregant.webp",
    text: "Je me demande pourquoi quand l'humaine est pleine elle ne s'occupe plus de moi.",
    effect: "Je lui fais peur.",
    tags: ["health", "poo"],
  },
  {
    title: "je veux dormir",
    src: "/assets/works/health/tired.webp",
    text: "J'aime réveiller toute la maison bien avant le lever du soleil.",
    effect: 'Il essaye de faire le lion enfin, il appelle ça "bailler".',
    tags: ["health", "wake"],
  },
  {
    title: "Bob le dob des voisins",
    src: "/assets/works/kill/dog.webp",
    text: "M'attaquer à plus gros que moi? No problem.",
    effect: "On a dû déménager.",
    tags: ["kill", "teeth"],
  },
  {
    title: "Pas encore né, déjà tué!",
    src: "/assets/works/kill/egg.webp",
    text: "Quelque soit son âge, un bon met est un bon met.",
    effect: "Vous croyez quoi? Il a râlé comme souvent.",
    tags: ["kill", "teeth"],
  },
  {
    title: "Où sont les chips?",
    src: "/assets/works/kill/fishes.webp",
    text: "On m'a dit que les anglais aimaient le fish and chips.",
    effect: "En colère, il voulait débuter un élevage.",
    tags: ["kill", "teeth", "claws"],
  },
  {
    title: "R.I.P. Mamy Josette",
    src: "/assets/works/kill/mamy.webp",
    text: "Elle était dans l'escalier...moi aussi!",
    effect: "Mamy n'a pas râlé, les héritiers, contents, ont hérité.",
    tags: ["kill", "living"],
  },
  {
    title: "Une souris pas verte...",
    src: "/assets/works/kill/mouse.webp",
    text: "Une proie de choix.",
    effect: "Tiens là ils sont contents.",
    tags: ["kill", "teeth"],
  },
  {
    title: "Variations sur un rongeur, la musaraigne.",
    src: "/assets/works/kill/musaraigne.webp",
    text: "Ne pas confondre avec une souris!",
    effect: "Ils sont également contents.",
    tags: ["kill", "teeth"],
  },
  {
    title: "J'accepte les cookies",
    src: "/assets/works/rob/cookie.webp",
    text: "Hum croquer dans un gâteau que l'humain a fait pour lui.",
    effect: "Pas content, comme d'hab.",
    tags: ["rob", "teeth"],
  },
  {
    title: "carnivore avant tout",
    src: "/assets/works/rob/meat.webp",
    text: "La viande, c'est la vie!",
    effect: "Il a crié, il parait que ça n'était pas pour moi.",
    tags: ["rob", "teeth"],
  },
  {
    title: "délice blanc",
    src: "/assets/works/rob/milk.webp",
    text: "Manger c'est bien, mais parfois il faut boire.",
    effect:
      "Le petit humain a bien voulu partage et terminé le verre que j'avais commencé.",
    tags: ["rob", "tongue"],
  },
  {
    title: "fan de charcuterie",
    src: "/assets/works/rob/sausage.webp",
    text: "Charcuterie, roti, même combat!",
    effect: "Toujours des cris.",
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
    thisName = "technique";
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

const showBack = document.querySelectorAll(".showBack");
const showFront = document.querySelectorAll(".showFront");
const innerCards = document.querySelectorAll(".innerCard");

showBack.forEach((elt) => elt.addEventListener("click", showTheBack));
showFront.forEach((elt) => elt.addEventListener("click", showTheFront));

function showTheBack(e) {
  innerCards.forEach(
    (innerCard) => (innerCard.style.transform = "rotateY(0deg)")
  );
  e.target.parentNode.parentNode.style.transform = "rotateY(180deg)";
}
function showTheFront(e) {
  e.target.parentNode.parentNode.style.transform = "rotateY(0deg)";
}

const tagArts = document.querySelectorAll(".tag-art");
tagArts.forEach((tagArt) => tagArt.addEventListener("click", changeSelection));
function changeSelection(e) {
  window.location.href =
    "/art/selection.html?tag=" + e.target.value + "&name=" + e.target.name;
}
