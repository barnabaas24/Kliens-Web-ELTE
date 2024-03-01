class TextareaWithLength extends HTMLElement {
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#textarea-length');

    // ha ez jelen van állítható válik mi küldődjön el ha az elem űrlapbban van
    static formAssociated = true;

    constructor() {
        super();

        // az űrlapérték állítása az internals objektumon keresztül állítható
        const internals = this.attachInternals();

        console.log(internals);

        const shadow = this.attachShadow({mode: 'closed'});

        shadow.append(TextareaWithLength.#template.content.cloneNode(true));

        const textarea = shadow.querySelector('textarea');
        const infoSpan = shadow.querySelector('span');

        const countSpan = infoSpan.querySelector('span');

        textarea.addEventListener('input', () => {
            countSpan.innerText = textarea.value.length;

            infoSpan.classList.toggle('error', textarea.value.length > 32);

            // setForm állítja be
            internals.setFormValue(textarea.value)
        })
    }
}

customElements.define('textarea-length', TextareaWithLength);

/*

import css

logika
struktúra

<style>
</style>

<script>
</script>

<template>
</template>
*/