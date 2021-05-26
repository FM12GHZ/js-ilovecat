import {
  fetchCats,
  fetchCatDetail,
  fetchRandomCats,
  isLoading,
} from "./api.js";
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import ImageInfo from "./ImageInfo.js";
import SearchHistory from "./SearchHistory.js";
import SearchRandomCats from "./SearchRandomCats.js";

export default class App {
  $target = null;
  data = [];
  keyword = "";

  constructor($target, initialData) {
    this.$target = $target;
    this.data = initialData;
    this.randomData = [];

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        this.searchResult.render();
        this.keyword = keyword;
        const randomCats = await fetchRandomCats();
        const fetchCatsData = await fetchCats(keyword);
        this.setState(fetchCatsData.data, randomCats.data);
      },
    });

    this.searchHistory = new SearchHistory({
      $target,
      onClickHistory: (reSearchTarget) => {
        this.searchInput.searchHistory(reSearchTarget);
      },
    });

    this.searchRandomCats = new SearchRandomCats({
      $target,
      onClickArrowBtn: async () => {
        const randomCats = await fetchRandomCats();
        console.log(randomCats);
        this.searchRandomCats.setState(randomCats.data);
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async (image) => {
        const selectedCatDetail = await fetchCatDetail(image.id);
        this.imageInfo.setState({
          visible: true,
          image: selectedCatDetail.data,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
        selectedCatDetail: null,
      },
    });
  }

  setState(nextData, randomData) {
    this.data = nextData;
    this.searchResult.setState(nextData);
    this.searchRandomCats.setState(randomData);
    localStorage.setItem("catSearchResult", JSON.stringify(this.data));
    this.searchHistory.addHistory(this.keyword);
  }
}
