class IntervalInput extends HTMLElement {
    // static - osztályszintű
    // # - privát
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#interval-template');

    constructor() {
        super();

        // template tartalma a content adattagon keresztül érhető el
        // cloneNode lemásolja
        // true: mély másolat (szinte mindig az kell)
        this.append(IntervalInput.#template.content.cloneNode(true))

        const from = this.querySelector('input[name="tol[]"]');
        const to = this.querySelector('input[name="ig[]"]');


        this.addEventListener('input', () => {
            const error = to.value !== "" && from.value !== "" && to.value <= from.value;

            from.classList.toggle('error', error);
            to.classList.toggle('error', error);
        })
    }
}

customElements.define('interval-input', IntervalInput);

class IntervalInputGroup extends HTMLElement {
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#interval-group-template');

    constructor() {
        super();

        this.append(IntervalInputGroup.#template.content.cloneNode(true));
        this.querySelector('button').addEventListener('click', this.add);
    }

    // eseménykezelőként hozzáadás leköti a this-t
    // kivéve ha az eseménykezelőként hozzáadott függvény arrow function
    add = () => {
        this.prepend(new IntervalInput())
    }
}


customElements.define('interval-input-group', IntervalInputGroup);