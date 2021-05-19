import { isLoading } from "./api.js";
import { isSearchStart } from "./SearchInput.js";

export default class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick, isLoading }) {
    this.$searchResult = document.createElement("main");
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
    this.$searchResult.innerHTML =
      isSearchStart && isLoading
        ? `<img src = "../img/loading.gif"></img>`
        : this.data
            .map(
              (cat) => `
            <article class="item">
              <img src=${cat.url} alt=${cat.name} />
            </article>
          `
            )
            .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
    console.log(isSearchStart, isLoading);
  }
}
