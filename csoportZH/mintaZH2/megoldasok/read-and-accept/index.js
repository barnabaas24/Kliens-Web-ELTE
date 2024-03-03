const button = document.querySelector('button')
button.disabled = true

const container = document.querySelector('#container')
const triggerDiv = document.createElement('div')
triggerDiv.style.border = '1px dashed orange'
triggerDiv.style.height = '2px'
container.appendChild(triggerDiv)

const observer = new IntersectionObserver(onObserve, {
  root: container,
  threshold: 1,
})
function onObserve(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      button.disabled = false
    }
  })
}
observer.observe(triggerDiv)