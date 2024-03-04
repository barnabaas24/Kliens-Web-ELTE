const ul = document.querySelector("ul");

const input = document.createElement("input");
input.type = "text";

const container = document.createElement("div");
container.classList.add("list-container");

ul.insertAdjacentElement("beforebegin", container);

container.appendChild(input);
container.appendChild(ul);

input.addEventListener("input", (e) => {
  const listItems = [...ul.children];
  listItems.forEach((item) => {
    if (!item.innerText.includes(e.target.value)) {
      item.hidden = true;
    } else {
      item.hidden = false;
    }
  });
  console.log(listItems);
});
