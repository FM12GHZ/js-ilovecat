export default class SearchResult {
    $searchResult = null;
    data = null;
    onClick = null;

    constructor({$target, initialData, onClick}) {
        this.$searchResult = document.createElement("div");
        this.$searchResult.className = "SearchResult";
        $target.appendChild(this.$searchResult);

        this.data = initialData;
        this.onClick = onClick;

        this.render();
    }

    setState(nextData) {
        this.data = nextData;
        this.render();
    }

    renderResult() {
        this.$searchResult.style.display = 'grid';

        this.$searchResult.innerHTML = this.data.map(
            (cat) => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} />
            </div>
          `
        ).join('');

        this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
            $item.addEventListener("click", () => {
                this.onClick(this.data[index]);
            });
        });
    }

    renderEmpty() {
        this.$searchResult.style.display = 'block';
        this.$searchResult.innerHTML = `
            <div class="empty">
                <img src="../../img/emptybox.png"/>
                <span>검색 결과가 없습니다.</span>
            </div>
        `;
    }

    render() {

        if (this.data && this.data.length === 0) {
            this.renderEmpty();
            return;
        }

        this.renderResult();
    }
}
