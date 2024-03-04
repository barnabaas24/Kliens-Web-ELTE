class ImageTextarea extends HTMLElement {
  #textArea;
  #ul;
  #regexp = /!\[(.*?)\]\((.*?)\)/g;
  constructor() {
    super();
    this.#textArea = this.querySelector("textarea[data-markdown]");
    this.#ul = document.createElement("ul");
    this.#textArea.insertAdjacentElement("afterend", this.#ul);
  }

  connectedCallback() {
    this.loadImages();
    this.#textArea.addEventListener("input", () => this.loadImages());
  }

  loadImages() {
    const text = this.#textArea.value;
    const matches = [...text.matchAll(this.#regexp)];
    const urls = matches.map((match) => match[2]);
    console.log(urls.length);

    this.#ul.innerHTML = "";
    urls.forEach((url) => {
      const li = document.createElement("li");
      const image = document.createElement("img");
      image.src = url;
      li.appendChild(image);
      this.#ul.appendChild(li);
    });
  }
}

customElements.define("image-textarea", ImageTextarea);
