export default class SearchHistory {
  $searchHistory = null;
  searchHistoryArray = [];

  constructor({ $target, onClickHistory }) {
    const $searchHistory = document.createElement("section");
    this.$searchHistory = $searchHistory;
    this.$searchHistory.className = "SearchHistory";

    $target.appendChild($searchHistory);

    this.$searchHistory.addEventListener("click", (e) => {
      onClickHistory(e.target.textContent);
    });
  }

  addHistory(keyword) {
    if (this.searchHistoryArray.length < 5) {
      this.searchHistoryArray.push(keyword);
    } else {
      this.searchHistoryArray.shift();
      this.searchHistoryArray.push(keyword);
    }
    this.render();
  }

  render() {
    this.$searchHistory.innerHTML =
      this.searchHistoryArray.length > 0
        ? this.searchHistoryArray
            .map(
              (value) => `
        <button>${value}</button>
    `
            )
            .join("")
        : ``;
  }
}
