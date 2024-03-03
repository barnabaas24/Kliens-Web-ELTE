const list = document.querySelector("ul");

const input = document.createElement('input')
input.type = 'text'

const container = document.createElement('div')
container.classList.add('list-container')

list.insertAdjacentElement('beforebegin', container)
container.appendChild(input)
container.appendChild(list)

input.addEventListener('input', e => {
  [...list.children].forEach(li => {
    const searchText = input.value
    const show = li.innerText.includes(searchText)
    li.hidden = !show
  })
})
