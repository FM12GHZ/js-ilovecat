<<<<<<< HEAD
import { MESSAGE } from "../utils/Constant.js";
import { $ } from "../utils/querySelector.js";
import { setItem } from "../utils/sessionStorage.js";

const TEMPLATE = '<input type="text">';

export default class SearchInput {
  constructor({ $target, keywords, onSearch }) {
    this.recent = keywords;
    this.onSearch = onSearch;
    this.section = document.createElement("section");
    this.section.className = "searching-section";
    $target.appendChild(this.section);
    this.render();
    this.focusOnSearchBox();
  }

  focusOnSearchBox() {
    const $searchInput = $(".search-input");
    $searchInput.focus();
  }

  addRecentKeyword(keyword) {
    if (this.recent.includes(keyword)) return;
    if (this.recent.length === 5) {
      this.recent.shift();
    }
    this.recent.push(keyword);
    setItem("keywords", this.recent);
    this.render();
  }

  deleteKeyword() {
    const $searchInput = $(".search-input");
    $searchInput.value = "";
  }

  searchByKeyword(keyword) {
    if (keyword <= 0) {
      return MESSAGE.INVALID_DIGIT_LENGTH;
    }

    this.onSearch(keyword);
  }

  render() {
    this.section.innerHTML = "";

    const $wrapper = document.createElement("div");
    $wrapper.className = "search-box-wrapper";

    const $searchInput = document.createElement("input");
    $searchInput.className = "search-input";
    $searchInput.placeholder = "고양이를 입력하세요";

    const $recentKeywords = document.createElement("div");
    $recentKeywords.className = "recent-keywords";

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        let keyword = $searchInput.value;
        this.searchByKeyword(keyword);
        console.log(keyword);
        $searchInput.value = "";
      }
    });
    $wrapper.appendChild($searchInput);
    $wrapper.appendChild($recentKeywords);
    this.section.appendChild($wrapper);
  }
=======
const TEMPLATE = '<input type="text">';

export default class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
>>>>>>> 31d49f0cd9df2d86235d15ff21a71d06c2df2a79
}
