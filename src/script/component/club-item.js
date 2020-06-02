class ClubItem extends HTMLElement {
  set club(club) {
    this._club = club;
    this.render();
  }
  render() {
    // const { fanArt, name, description } = this._club;

    // disini ada manggil variable fanArt, name, sama description
    // tapi variablenya belom di deklarasiin
    // jadinya undefined fanArt,
    // undefined name, undefined description.
    // yang di atas cara gw itu extract key dari variable object.
    // atau bisa juga caranya begini
    this.innerHTML = `<img class="fan-art-club" src="${this._club.fanArt}" alt="Fan Art">
            <div class="club-info">
            <h2>${this._club.name}</h2>
            <p>${this._club.description}</p> </div>`;
  }
}

customElements.define("club-item", ClubItem);
