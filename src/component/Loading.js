const TEMPLATE = '<img src="../../img/loading.gif">';

export default class Loading {

    constructor({$target}) {
        this.$loading = document.createElement('div');
        this.$loading.className = "loading";
        this.$loading.innerHTML = TEMPLATE;

        $target.appendChild(this.$loading);
        this.isLoading = false;

        this.render();
    }

    render() {
        if (this.isLoading) {
            this.$loading.style.display = "block";
        } else {
            this.$loading.style.display = "none";
        }
    }

    setState(isLoading) {
        this.isLoading = isLoading;
        this.render();
    }
}
