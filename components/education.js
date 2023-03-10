class Education extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            .grid {
                display: grid;
                grid-template-columns: 1fr 5fr 2fr;
                grid-gap: 0.2em;
                padding: 1em;
            }
            
            .grid div:first-child, 
            .grid div:nth-child(2),
            .grid div:nth-child(3) {
                background-color: #E8E8E8;
                font-weight: bold;
            }
            
            .grid div {
                padding: 0.2em;
                border: lightgray solid 0.01em;
            }
            
            @media screen and (max-width: 500px) {
                .grid {
                    padding: 0.2em;
                }
            }
            
        </style>
        <h2>EDUCATION</h2>
        <div class="grid">
            <div>Year</div>
            <div>Event</div>
            <div>Location</div>
            <div>2009</div>
            <div>
                Graduated from Zhytomyr State Technological University (ZSTU) 
                as Specialist in Software of the automated systems
            </div>
            <div>Zhytomyr, Ukraine</div>
        </div>`;
    }
}

window.customElements.define('app-education', Education);