// eddig: custom components
// mostandtól fogunk ténylegesen komponensekről beszélni
// komponens: HTML + JS + CSS

// Izoláltság: shadow dom
class TextareaWithLength extends HTMLElement {
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#textarea-length');

    constructor() {
        super();

        // shadow DOM
        // az eredeti DOM-tól elszigelt részfa
        // shadow DOM-ból nem jutnak ki (kivétel: legtöbb esemény) és nem jutnak be a dolgok (pl. css)
        // egy shadow DOM fa gyökerét shadow rootnak nevezzük
        // egy konkrét elemere csatoljuk ezt nevezzük shadow host-nak

        // closed: a shadow rootra nem tudunk referenciát szerezni
        // így nem tudunk később turkálni a részfába
        // open: ha szerzünk referenciát a shadowrootra el tudjuk érni kívülrül a shadow DOM-ot
        const shadow = this.attachShadow({mode: 'closed'});

        // shadow !== this
        // this-re csak rácsatoltuk a shadow domot
        shadow.append(TextareaWithLength.#template.content.cloneNode(true));
        // így már nem jut ki a stílus
        // új probléma: shadow dom annyira izolál, hogy a textarea értéke nem jut ki űrlapelküldésnél
        // a probléma nagyon sok módon megoldható:
            // esemény kezelése űrlap szinten
            // szinkronba tartás egy shadow dom-on kívüli hidden inputtal
            // külső elem beküldése a template-be <slot> segítségével
            // form associated custom component

        const textarea = shadow.querySelector('textarea');
        const infoSpan = shadow.querySelector('span');

        const countSpan = infoSpan.querySelector('span');

        textarea.addEventListener('input', () => {
            countSpan.innerText = textarea.value.length;

            infoSpan.classList.toggle('error', textarea.value.length > 32);
        })
    }
}

customElements.define('textarea-length', TextareaWithLength);