// autonomous custom element (6. feladat)
// ######################################

// akkor érdemes használni amikor a komponens viselkedése jelentősen eltér egy meglévő elem viselkedésétől
// vagy elem jellegétől fogva nem kiterjeszthető pl. select
// mindig a HTMLElement objektumot terjeszti ki
// alapvetően javascript működteti, de nem zárja ki a progresszív fejlesztést
// vagy az eredeti tartalmat okosítjuk fel vagy teljes mértékben felülírjuk az elem belső tartalmát
// ha nincs js nem csinál semmit
// eredeti tartalom például használható fallback contentként

// minden esetben extends HTMLElement
class CascadeSelect extends HTMLElement {
    currentCategory;

    constructor() {
        // super hívás itt is kell
        // this viszont ebben az esetben csak egy tároló szerepét tölti be
        // minden funkcionalitást nekünk kell kitalálni
        super();
    }

    connectedCallback() {
        const select = this.querySelector('select');

        const optionGroups = select.children;

        const categorySelect = this.makeCategorySelect(optionGroups);

        this.append(categorySelect);
        this.append(...this.makePetSelects(optionGroups))

        this.onCategoryChange(categorySelect.children[0].innerText)

        select.remove();
    }

    makeCategorySelect(optionGroups) {
        const categorySelect = document.createElement('select');

        for (const group of optionGroups) {
            const option = document.createElement('option');
            option.innerText = group.label;

            categorySelect.append(option)
        }

        categorySelect.addEventListener('change', event => {
            this.onCategoryChange(event.target.value)
        });

        return categorySelect;
    }

    makePetSelects(optionGroups) {
        const petSelects = [];

        for (const group of optionGroups) {
            const petSelect = document.createElement('select');
            petSelect.dataset.group = group.label;

            for (const option of [...group.children]) {
                const petOption = document.createElement('option');
                petOption.innerText = option.value;
    
                petSelect.append(option)
                petSelect.hidden = true;
            }
            petSelects.push(petSelect)
        }

        return petSelects;
    }

    onCategoryChange(category) {
        if (this.currentCategory) {
            this.currentCategory.hidden = true;
            this.currentCategory.name = "";
        }

        this.currentCategory = this.querySelector(`select[data-group="${category}"]`);
        this.currentCategory.name = "pets";

        this.currentCategory.hidden = false;
    }
}

// nincs options objektum
customElements.define('cascade-select', CascadeSelect);
