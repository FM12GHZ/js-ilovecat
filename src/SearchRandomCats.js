export default class SearchRandomCats {
  randomCatsArray = [];

  constructor({ $target }) {
    const $searchRandom = document.createElement("section");
    this.$searchRandom = $searchRandom;
    this.$searchRandom.className = "SearchRandom";

    $target.appendChild($searchRandom);
  }

  setState(randomData) {
    this.randomCatsArray = [];
    for (let i = 0; i < 5; i++) {
      let randomNum = Math.floor(Math.random() * 50);
      this.randomCatsArray.push(randomData[randomNum]);
    }
    this.render();
  }

  render() {
    console.log(this.randomCatsArray);
    this.$searchRandom.innerHTML = this.randomCatsArray
      .map(
        (catObj) => `
      <img src = ${catObj.url} />
    `
      )
      .join("");
  }
}
