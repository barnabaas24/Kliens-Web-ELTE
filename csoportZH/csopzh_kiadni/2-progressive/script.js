class TodoList extends HTMLUListElement {
  constructor() {
    super();
    const checkBoxes = this.querySelectorAll('input[type="checkbox"]');
    checkBoxes.forEach((checkbox) => {
      checkbox.remove();
    });
  }

  connectedCallback() {
    this.addEventListener("click", (e) => {
      if (e.target.matches("li")) {
        const item = e.target;

        if (item.hasAttribute("clicked")) {
          item.style.textDecoration = "none";
          item.removeAttribute("clicked");
        } else {
          item.style.textDecoration = "line-through";
          item.setAttribute("clicked", "");
        }
      }
    });

    this.addEventListener("mouseover", (e) => {
      if (e.target.matches("li")) {
        const item = e.target;
        item.style.cursor = "pointer";
      }
    });
  }
}

customElements.define("todo-list", TodoList, { extends: "ul" });
