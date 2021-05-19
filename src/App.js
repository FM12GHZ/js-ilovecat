console.log("app is running!");
import SearchInput from "./component/SearchInput.js";
import SearchResult from "./component/SearchResult.js";
import Loading from "./component/Loading.js";
import ImageInfo from "./component/ImageInfo.js";
import api from "./api.js";

export default class App {
    $target = null;
    data = [];

    constructor($target) {
        this.$target = $target;

        this.searchInput = new SearchInput({
            $target,
            onSearch: async (keyword) => {
                this.setLoading(true);
                const {data} = await api.fetchCats(keyword)
                this.setLoading(false);
                this.setState(data);
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

        this.loading = new Loading({
            $target
        });
    }

    setState(nextData) {
        this.data = nextData;
        this.searchResult.setState(nextData);
    }

    setLoading(isLoading) {
        this.loading.setState(isLoading);
    }
}
