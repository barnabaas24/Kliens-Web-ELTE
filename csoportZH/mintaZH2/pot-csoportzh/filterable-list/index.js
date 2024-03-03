const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("list", "container");

const input = document.createElement("input");
input.type = "text";
container.appendChild(input);

const ul = document.querySelector("ul");
const ulCopy = ul.cloneNode(true);
ul.remove();

container.appendChild(ulCopy);
body.appendChild(container);

input.addEventListener("input", (e) => {
  const listItems = [...ulCopy.children];
  listItems.forEach((item) => {
    if (!item.innerText.includes(e.target.value)) {
      item.hidden = true;
    } else {
      item.hidden = false;
    }
  });
  console.log(listItems);
});
