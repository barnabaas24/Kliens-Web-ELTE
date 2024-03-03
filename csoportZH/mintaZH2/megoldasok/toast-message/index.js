class ToastMessage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.tick = this.tick.bind(this)
  }

  connectedCallback() {
    const template = document.querySelector("#toast-message-template");
    const content = template.content.cloneNode(true);
    this.shadowRoot.appendChild(content);

    const button = this.shadowRoot.querySelector("button.close");
    if (this.hasAttribute('closable')) {
      button.addEventListener("click", () => {
        this.remove()
      });
    } else {
      button.remove()
    }

    this.progress = this.shadowRoot.querySelector("progress");
    if (this.hasAttribute('timeout')) {
      this.progress.max = this.getAttribute('timeout')
      this.progress.value = 0
      setTimeout(this.tick, 1000)
    } else {
      this.progress.remove()
    }
  }

  tick() {
    this.progress.value++
    if (this.progress.max == this.progress.value) {
      setTimeout(() => this.remove(), 1000)
    } else {
      setTimeout(this.tick, 1000)
    }
  }
}
customElements.define('toast-message', ToastMessage);