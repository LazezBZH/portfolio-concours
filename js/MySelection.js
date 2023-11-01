// constructeur de la sélection

class MySelection {
  constructor() {
    this.all = [];
  }
  add(art) {
    this.all.push(art);
  }

  displayArts(arts) {
    let html = "";

    for (let i = 0; i < arts.length; i++) {
      let art = new MyArt(arts[i]);
      html += art.render();
    }
    main.innerHTML = html;
  }
}
