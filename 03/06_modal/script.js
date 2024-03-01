class Modal extends HTMLElement {
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#modal')

    constructor() {
        super();
        
        const shadow = this.attachShadow({mode: 'closed'});

        shadow.append(Modal.#template.content.cloneNode(true));

        shadow.querySelector('button.open').addEventListener('click', this.open);
        shadow.querySelector('button.close').addEventListener('click', this.close);
        shadow.querySelector('.overlay').addEventListener('click', this.close);
    }

    open = () => this.dataset.open = true;
    close = () => this.dataset.open = false;
}

customElements.define('modal-div', Modal)