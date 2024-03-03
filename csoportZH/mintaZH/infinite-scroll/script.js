const newButton = document.querySelector("button#btn-new-content");
newButton.remove();

const body = document.querySelector("body");
const template = document.querySelector("template#newRow");
let lastRow = document.querySelector("div.row:last-of-type");

function onObserve(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      console.log("End of page");
      const templateContent = template.content.cloneNode(true).children[0];
      body.appendChild(templateContent);
      observer.unobserve(lastRow);
      lastRow = templateContent;
      observer.observe(lastRow);
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
