class TextareaWithLength extends HTMLElement {
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#textarea-length');

    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'closed'});

        shadow.append(TextareaWithLength.#template.content.cloneNode(true));

        const textarea = shadow.querySelector('textarea');
        const infoSpan = shadow.querySelector('span');

        const countSpan = infoSpan.querySelector('span');

        textarea.addEventListener('input', () => {
            countSpan.innerText = textarea.value.length;

            infoSpan.classList.toggle('error', textarea.value.length > 32);
        })
    }
}

document.querySelector('form').addEventListener('input', () => {
    // események kijutnak a shadow domból
    console.log("asd");
})

customElements.define('textarea-length', TextareaWithLength);