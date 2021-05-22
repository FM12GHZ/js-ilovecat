<<<<<<< HEAD
import { $ } from "../utils/querySelector.js";
import Card from "../components/Card.js";

export default class SearchResult {
  constructor({ $target, data, onClick }) {
    this.data = data;
    this.onClick = onClick;
    this.$searchResult = document.createElement("section");
    this.$searchResult.className = "result-section";
    $target.appendChild(this.$searchResult);

    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  findCatById(id) {
    const result = this.data.find((cat) => cat.id == id);
    return result;
  }

  render() {
    if (!this.data) return;

    this.$searchResult = "";

    if (this.data.length > 0) {
      const cardContainer = document.createElement("div");
      cardContainer.className = "card-container";
      this.data.map((cat) => {
        new Card({
          $target: cardContainer,
          data: cat,
        });
      });

      cardContainer.addEventListener("click", (e) => {
        const path = e.path;
        const card = path.fin((comp) => comp.className == "cat-card");

        if (card) {
          const id = card.dataset.id;
          const catInfo = this.findCatById(id);
          this.onClick(catInfo);
        }
        this.section.appendChild(cardContainer);
      });
    } else {
      const noticeSection = document.createElement("section");
      noticeSection.className = "notice-section";

      const notice = document.createElement("h2");
      notice.className = "notice";
      notice.innerText = "검색 결과가 없습니다.";

      const noticeImage = document.createElement("img");
      noticeImage.className = "notice-image";
      noticeImage.src = "src/img/emptybox.png";

      noticeSection.appendChild(notice);
      noticeSection.appendChild(noticeImage);
      this.section.appendChild(noticeSection);
    }
=======
export default class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        (cat) => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} />
            </div>
          `
      )
      .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
>>>>>>> 31d49f0cd9df2d86235d15ff21a71d06c2df2a79
  }
}
