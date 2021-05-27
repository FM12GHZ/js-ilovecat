export default class SearchRandomCats {
  randomCatsArray = [];

  constructor({ $target, onClickArrowBtn }) {
    const $searchRandom = document.createElement("section");
    const $searchRandomLeftBtn = document.createElement("button");
    const $searchRandomRightBtn = document.createElement("button");
    this.$searchRandom = $searchRandom;
    this.$searchRandomLeftBtn = $searchRandomLeftBtn;
    this.$searchRandomRightBtn = $searchRandomRightBtn;
    this.$searchRandom.className = "SearchRandom";
    this.$searchRandomLeftBtn.className = "ShowRandom";
    this.$searchRandomRightBtn.className = "ShowRandom";

    $target.appendChild($searchRandomLeftBtn);
    $target.appendChild($searchRandom);
    $target.appendChild($searchRandomRightBtn);

    this.$searchRandomLeftBtn.addEventListener("click", () =>
      onClickArrowBtn()
    );

    this.$searchRandomRightBtn.addEventListener("click", () =>
      onClickArrowBtn()
    );
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
    this.$searchRandomLeftBtn.innerHTML = `◀`;
    this.$searchRandomRightBtn.innerHTML = `▶`;
    let searchRandomCatString = "";
    console.log(this.randomCatsArray);
    searchRandomCatString = this.randomCatsArray
      .map(
        (catObj) => `
      <img src = ${catObj.url} />
    `
      )
      .join("");
    this.$searchRandom.innerHTML = searchRandomCatString;
  }
}
