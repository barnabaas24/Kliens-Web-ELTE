const button = document.querySelector("button");
button.disabled = true;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

function onObserve(entries) {
  console.log("called");
  for (const entry of entries) {
    if (entry.isIntersecting) {
      console.log("intersecting");
      button.disabled = false;
    }
  }
}

const observer = new IntersectionObserver(onObserve, options);

const container = document.querySelector("div#container");

// const container = document.querySelector('#container')
// const triggerDiv = document.createElement('div')
// triggerDiv.style.border = '1px dashed orange'
// triggerDiv.style.height = '2px'
// container.appendChild(triggerDiv)

const lastParagraph = container.querySelector("p:last-of-type");
observer.observe(lastParagraph);

//=================================================

// const button = document.querySelector("button");
// button.disabled = true;

// function onScroll(e) {
//   const offsetY = Math.round(e.target.scrollTop);
//   const divHeight = e.target.clientHeight;
//   console.log(offsetY);
//   console.log(divHeight);

//   if (offsetY + divHeight >= e.target.scrollHeight) {
//     button.disabled = false;
//   }
// }

// const container = document.querySelector("div#container");
// container.addEventListener("scroll", _.throttle(onScroll, 200));
