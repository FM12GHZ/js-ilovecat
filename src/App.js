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

export default class App {
  $target = null;
  data = [];
  keyword = "";

  constructor($target, initialData) {
    this.$target = $target;
    this.data = initialData;

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        this.searchResult.render();
        this.keyword = keyword;
        const fetchCatsData = await fetchCats(keyword);
        this.setState(fetchCatsData.data);
      },
    });

    this.searchHistory = new SearchHistory({
      $target,
      onClickHistory: (reSearchTarget) => {
        this.searchInput.searchHistory(reSearchTarget);
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

  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState(nextData);
    localStorage.setItem("catSearchResult", JSON.stringify(this.data));
    this.searchHistory.addHistory(this.keyword);
  }
  //setState(data);
}
