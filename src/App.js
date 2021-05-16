import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
    const darkmodeBtn = document.createElement("span");
    darkmodeBtn.className = "darkmode-btn";
    darkmodeBtn.innerText = "🌕";
    $target.appendChild(darkmodeBtn);
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
