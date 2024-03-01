const newButton = document.querySelector("button#btn-new-content");
newButton.remove();
const body = document.querySelector("body");
const template = document.querySelector("template#newRow");
const templateContent = template.content.cloneNode(true).children[0];
console.log(templateContent);

// class NewRow extends HTMLElement {
//   /**
//    * @type {HTMLTemplateElement}
//    */
//   static #template = document.querySelector("template#newRow");

//   constructor() {
//     super();
//     this.append(NewRow.#template.content.cloneNode(true));
//   }
// }

// customElements.define("newrow-row", NewRow);

let lastRow = document.querySelector("div.row:last-of-type");

function onObserve(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      console.log("intersecting");
      body.appendChild(templateContent);
      console.log(templateContent);
      lastRow = templateContent; // Update the reference to the last row
      observer.observe(lastRow);
    } else {
    }
  }
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(onObserve, options);
observer.observe(lastRow);
