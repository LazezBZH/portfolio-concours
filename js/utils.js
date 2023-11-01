//récupérer les keys de l'url
function query(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

let tagToDisplay = "";
let thisNameToDisplay = "";
let thisName = "";

// switch pour traduire les tags
function tagToBeDisplay() {
  switch (tag) {
    case "benefits":
      tagToDisplay = "Bienfaits";
      break;
    case "destroy":
      tagToDisplay = "destruction";
      break;
    case "kill":
      tagToDisplay = "meurtres";
      break;
    case "health":
      tagToDisplay = "santé";
      break;
    case "rob":
      tagToDisplay = "vols";
      break;
    case "petting":
      tagToDisplay = "calins";
      break;
    case "poo":
      tagToDisplay = "crottes";
      break;
    case "teeth":
      tagToDisplay = "dents";
      break;
    case "living":
      tagToDisplay = "exister";
      break;
    case "claws":
      tagToDisplay = "griffes";
      break;
    case "tongue":
      tagToDisplay = "langue";
      break;
    case "paw":
      tagToDisplay = "pattes";
      break;
    case "fur":
      tagToDisplay = "poils";
      break;
    case "door":
      tagToDisplay = "porte";
      break;
    case "presence":
      tagToDisplay = "présence";
      break;
    case "tail":
      tagToDisplay = "queue";
      break;
    case "wake":
      tagToDisplay = "réveil";
      break;

    default:
      tagToDisplay = "";
  }
  return tagToDisplay;
}

// switch pour générer les titres de la sélection
function titleToDisplay() {
  switch (thisName) {
    case "category":
      thisH1 = "Mes oeuvres dans la <span class='name'> catégorie</span>";
      break;
    case "categorie":
      thisH1 = "Mes oeuvres dans la <span class='name'> catégorie</span>";
      break;
    default:
      thisH1 =
        "Mes oeuvres réalisées avec la <span class='name'>technique </span>";
  }
  return thisH1;
}
