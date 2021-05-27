export default class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("section");
    const $closeBtn = document.querySelector(".close");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    $imageInfo.addEventListener("click", () => {
      this.data.visible = false;
      this.render();
    });

    document.addEventListener("click", (e) => {
      if (e.target.className == "close") {
        this.data.visible = false;
        this.render();
      }
    });

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      console.log(this.data);
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
          <article class="content-wrapper">
            <section class="title">
              <span>${name}</span>
              <div class="close">✖️</div>
            </section>
            <img src="${url}" alt="${name}"/>        
            <section class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </section>
          </article>`;
      this.$imageInfo.style.display = "block";
      document.querySelector("main").style.opacity = "10%";
    } else {
      this.$imageInfo.style.display = "none";
      document.querySelector("main").style.opacity = "100%";
    }
  }
}
