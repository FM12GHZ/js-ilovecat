<<<<<<< HEAD
import SearchInput from "../src/components/SearchInput.js";
import SearchResult from "../src/components/SearchResult.js";
import ImageInfo from "../src/components/ImageInfo.js";
import { api } from "../src/api/catApi.js";
import { setItem, getItem } from "./utils/sessionStorage.js";
=======
import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";

export default class App {
  $target = null;
  data = [];
>>>>>>> 31d49f0cd9df2d86235d15ff21a71d06c2df2a79

export default class App {
  constructor($target) {
    this.$target = $target;
    const keywords = getItem("keywords");
    const data = getItem("data");

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        const response = await api.fetchCats(keyword);
        if (!response.isError) {
          setItem("data", response.data);
          this.searchResult.setState(response.data);
        } else {
          error.setState(response.data);
        }
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
<<<<<<< HEAD

    this.render();
  }

  render() {
    const darkmodeBtn = document.createElement("span");
    darkmodeBtn.className = "darkmode-btn";
    darkmodeBtn.innerText = "🌕";

    this.$target.appendChild(darkmodeBtn);
=======
    const darkmodeBtn = document.createElement("span");
    darkmodeBtn.className = "darkmode-btn";
    darkmodeBtn.innerText = "🌕";
    $target.appendChild(darkmodeBtn);
>>>>>>> 31d49f0cd9df2d86235d15ff21a71d06c2df2a79
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
