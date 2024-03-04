class LengthyInput extends HTMLInputElement {
  constructor() {
    super();
    if (this.dataset.color) {
      this.color = this.dataset.color;
    }
  }

  connectedCallback() {
    this.addEventListener("input", (e) => {
      console.log(
        "Jelenlegi hossz: " + this.value.length + " Maxhossz: " + this.maxLength
      );
      const percent = (this.value.length / this.maxLength) * 100;

      const actualColor = this.color ?? "orange";

      this.style.borderImageSource = `linear-gradient(to right, ${actualColor} ${percent}%, hsla(0, 0%, 90%, 1) ${percent}% 100%)`;
    });
  }

  set color(newColor) {
    this.dataset.color = newColor;
  }

  get color() {
    return this.dataset.color;
  }
}

customElements.define("lengthy-input", LengthyInput, {
  extends: "input",
});
