const TEMPLATE = '<input class="SearchInput" type="text" placeholder="고양이를 검색해보세요." autofocus="autofocus">';

export default class SearchInput {
    constructor({$target, onSearch}) {
        this.onSearch = onSearch;
        this.inputArea = document.createElement('div');
        this.inputArea.className = 'inputWrap';
        $target.appendChild(this.inputArea);

        this.render();
    }

    render() {
        this.inputArea.innerHTML = TEMPLATE;

        const $searchInput = document.querySelector(".SearchInput");

        $searchInput.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                this.onSearch(e.target.value);
            }
        });

        $searchInput.addEventListener("click", (e) => {
            if ($searchInput.value) {
                $searchInput.value = '';
            }
        });
    }
}
