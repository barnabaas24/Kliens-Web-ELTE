class ToastMessage extends HTMLElement {
  /**
   * @type {HTMLTemplateElement}
   */
  static #template = document.querySelector("template#toast-message-template");

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "closed" });
    shadow.append(ToastMessage.#template.content.cloneNode(true));

    const closeButton = shadow.querySelector("button.close");
    if (!this.attributes.closable) {
      closeButton.hidden = true;
    } else {
      closeButton.addEventListener("click", (e) => {
        this.remove();
      });
    }

    const progress = shadow.querySelector("progress");

    if (!this.attributes.timeout) {
      progress.remove();
    } else {
      const timeOutValue = this.attributes.timeout.value;
      progress.max = timeOutValue;
      progress.value = 0;

      const intervalSetter = setInterval(() => {
        progress.value += 1;
      }, 1000);

      setTimeout(() => {
        this.remove();
        clearInterval(intervalSetter);
      }, 1000 * timeOutValue);
    }
  }
}

customElements.define("toast-message", ToastMessage);
