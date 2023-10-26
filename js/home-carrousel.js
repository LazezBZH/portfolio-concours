const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");

let homeTxt = [
  {
    text: "<span class=day ></span>",
  },
  {
    text: "N'hésitez pas à suvoler chaque section.",
  },
  {
    text: "Artiste félin de renommée internationale, mon style artistique, bien que pas toujours apprécié à sa juste valeur, est connu de tous.",
  },
  {
    text: "Artiste félin de renommée internationale, mon style artistique, bien que pas toujours apprécié à sa juste valeur, est connu de tous.",
  },
  {
    text: "Utilisez le menu burger (hum c'est bon les burgers, même si mon ami Garfield préfère les pizzas!) pour visiter mon site et découvrir mon art.",
  },
  {
    text: "Utilisez le menu burger (hum c'est bon les burgers, même si mon ami Garfield préfère les pizzas!) pour visiter mon site et découvrir mon art.",
  },
  {
    text: "J'espère que vous apprécierez la visite!",
  },
];
let index = 0;

cards.addEventListener("mouseenter", stopAuto);
cards.addEventListener("mouseleave", runAuto);

let currentDate = new Date();
let thisDay = currentDate.getDay();
let thisMonth = currentDate.getMonth();
let thisYear = currentDate.getFullYear();
let miAout = "";
if (thisMonth > 7 || (thisMonth = 7 && currentDate.getDate() > 15)) {
  miAout = new Date("15 August, " + (thisYear + 1));
} else {
  miAout = new Date("15 August, " + thisYear);
}
let intervalle = miAout.getTime() - currentDate.getTime();
intervalle = Math.floor(intervalle / (1000 * 60 * 60 * 24));

switch (thisDay) {
  case 1:
    thisDay = "Lundi";
    break;
  case 2:
    thisDay = "Mardi";
    break;
  case 3:
    thisDay = "Mercredi";
    break;
  case 4:
    thisDay = "Jeudi";
    break;
  case 5:
    thisDay = "Vendredi";
    break;
  case 6:
    thisDay = "Samedi";
    break;
  default:
    thisDay = "Dimanche";
}
switch (currentDate.getMonth()) {
  case 0:
    thisMonth = "Janvier";
    break;
  case 1:
    thisMonth = "Février";
    break;
  case 2:
    thisMonth = "Mars";
    break;
  case 3:
    thisMonth = "Avril";
    break;
  case 4:
    thisMonth = "Mai";
    break;
  case 5:
    thisMonth = "Juin";
    break;
  case 6:
    thisMonth = "Juillet";
    break;
  case 7:
    thisMonth = "Août";
    break;
  case 8:
    thisMonth = "Septembre";
    break;
  case 9:
    thisMonth = "Octobre";
    break;
  case 10:
    thisMonth = "Novembre";
    break;
  default:
    thisMonth = "Décembre";
}

function init() {
  cards.innerHTML = "";
  cards.innerHTML = `<p class="card">${homeTxt[index].text}</p>`;
  if (document.querySelector(".day")) {
    console.log(thisMonth, currentDate.getMonth());
    if (intervalle === -1) {
      document.querySelector(
        ".day"
      ).innerHTML = `Nous sommes le ${thisDay} ${currentDate.getDate()}  ${thisMonth} ${currentDate.getFullYear()}<br> aujourd'hui c'est la mi-août!`;
    } else {
      document.querySelector(
        ".day"
      ).innerHTML = `Nous sommes le ${thisDay} ${currentDate.getDate()}  ${thisMonth} ${currentDate.getFullYear()}<br> dans ${
        intervalle + 1
      } jours ça sera la mi-août!`;
    }
  }
}
init();

function showNext() {
  if (index == homeTxt.length - 1) index = -1;
  index++;
  init();
}

function runAuto() {
  autoInterval = setInterval(showNext, 1200);
}
runAuto();

function stopAuto() {
  clearInterval(autoInterval);
}