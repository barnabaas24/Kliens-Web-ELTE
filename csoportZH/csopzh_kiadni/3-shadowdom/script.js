class CommercialItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const commercialItemStyles = `<style>
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px;
            padding: 20px;
            border: 1px solid #000;
            border-radius: 10px;
        }
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    </style>`;
    this.shadowRoot.innerHTML = commercialItemStyles;

    const itemPictureImg = document.createElement("img");
    itemPictureImg.src = this.getAttribute("picture");

    const itemNameDiv = document.createElement("div");
    itemNameDiv.innerText = this.getAttribute("name");

    const itemPriceDiv = document.createElement("div");
    itemPriceDiv.innerText = this.getAttribute("price") + " Ft";

    this.shadowRoot.appendChild(itemPictureImg);
    this.shadowRoot.appendChild(itemNameDiv);
    this.shadowRoot.appendChild(itemPriceDiv);
  }
}

customElements.define("commercial-item", CommercialItem);
