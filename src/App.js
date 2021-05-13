import { fetchCats, fetchCatDetail, fetchRandomCats } from "./api.js";
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import ImageInfo from "./ImageInfo.js";

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        const fetchCatsData = await fetchCats(keyword);
        this.setState(fetchCatsData.data);
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
  }
}
