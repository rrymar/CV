class Save extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            @media print {
                .save {
                    display: none;
                }
            }
        </style>
        <div class="save">
            <a href="RUSLAN RYMAR - Software Architect.pdf" target="_self">
                Download print version
            </a> 
        </div>`;
    }
}

window.customElements.define('app-save', Save);