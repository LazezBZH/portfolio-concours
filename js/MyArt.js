// constructeur d'une "cards oeuvre"

class MyArt {
  constructor(myArts) {
    this.title = myArts.title;
    this.artName = myArts.artName;
    this.artCat = myArts.artCat;
    this.text = myArts.text;
    this.effect = myArts.effect;
    this.tags = myArts.tags;
  }
  render() {
    let tagHtml = "";
    let thisTag = "";

    for (let i = 0; i < this.tags.length; i++) {
      let tag = this.tags[i];

      switch (tag) {
        case "benefits":
          thisTag = "Bienfaits";
          thisName = "category";
          break;
        case "destroy":
          thisTag = "destruction";
          thisName = "category";
          break;
        case "kill":
          thisTag = "meurtres";
          thisName = "category";
          break;
        case "health":
          thisTag = "santé";
          thisName = "category";
          break;
        case "rob":
          thisTag = "vols";
          thisName = "category";
          break;
        case "petting":
          thisTag = "calins";
          thisName = "technology";
          break;
        case "poo":
          thisTag = "crottes";
          thisName = "technology";
          break;
        case "teeth":
          thisTag = "dents";
          thisName = "technology";
          break;
        case "living":
          thisTag = "exister";
          thisName = "technology";
          break;
        case "claws":
          thisTag = "griffes";
          thisName = "technology";
          break;
        case "tongue":
          thisTag = "langue";
          thisName = "technology";
          break;
        case "paw":
          thisTag = "pattes";
          thisName = "technology";
          break;
        case "fur":
          thisTag = "poils";
          thisName = "technology";
          break;
        case "door":
          thisTag = "porte";
          thisName = "technology";
          break;
        case "presence":
          thisTag = "présence";
          thisName = "technology";
          break;
        case "tail":
          thisTag = "queue";
          thisName = "technology";
          break;
        case "wake":
          thisTag = "réveil";
          thisName = "technology";
          break;

        default:
          thisTag = "";
      }

      tagHtml += `<li  ><button class="tag-art" value=${tag} name=${thisName}>${thisTag}</button></li>`;
    }
    let src = "/assets/works/" + this.artCat + "/" + this.artName + ".webp";
    return `
   <div class="artCard">

        
        <div class="innerCard">
          
            <div class="frontSide">
              <ul class="tags">${tagHtml}</ul>
                <h2 class="artTitle" >${this.title}</h2>
                <img src=${src} alt="${this.title}" class="artImg">
                <button class="showBack">voir&#xA0;détails</button>
            </div>
            <div class="backSide">
                <div class="backSide-content">
                    <p class="artTitle_verso" >${this.title}</p>
                    <p class="artTxt" >Description: <br> <span class="artTxt_2">${this.text}</span></p>
                    <p class="artEffect" >Effets sur l'humain: <br><span class="artEffect_2">${this.effect}</span></p>
                </div>
                <button class="showFront">voir&#xA0;photo</button>
            </div>
        </div>
    </div>`;
  }
}
