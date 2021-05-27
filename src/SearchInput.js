const TEMPLATE = '<input type="text">';
export let isSearchStart = false;
export const setIsSearchStart = (val) => {
  isSearchStart = val;
};

export default class SearchInput {
  onCallbackSearch = null;
  constructor({ $target, onSearch, onSearchRandomCats }) {
    const $searchInput = document.createElement("input");
    const $searchRandomStart = document.createElement("button");
    this.$searchInput = $searchInput;
    this.$searchRandomStart = $searchRandomStart;
    this.$searchInput.placeholder = "고양이를 검색해보세요.";
    this.$searchRandomStart.innerHTML = "랜덤";

    $searchInput.className = "SearchInput";
    $searchRandomStart.className = "SearchRandomBtn";
    $target.appendChild($searchInput);
    $target.appendChild($searchRandomStart);
    this.onCallbackSearch = onSearch;

    $searchInput.addEventListener("click", (e) => {
      if (e.target.value !== "") {
        e.target.value = "";
      }
    });

    $searchRandomStart.addEventListener("click", onSearchRandomCats);

    $searchInput.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      } else if ((e.keyCode <= 90 && e.keyCode >= 68) || e.keyCode == 8) {
        isSearchStart = true;
        console.log(isSearchStart);
      }
    });
  }
  render() {}

  searchHistory(keyword) {
    this.onCallbackSearch(keyword);
  }
}
