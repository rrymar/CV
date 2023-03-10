class Project extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            .grid {
                display: grid;
                grid-template-columns: 1fr 3fr;
                grid-gap: 0.2em;
                padding: 1em;
            }
            
            .grid div:first-child, .grid div:nth-child(2) {
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
        <div class="grid">
            <div>Project</div>
            <div><slot name="name"></slot></div>
            <div>Description</div>
            <div><slot name="description"></slot></div>
            <div>Customer</div>
            <div><slot name="customer"></slot></div>
            <div>Period</div>
            <div><slot name="period"></slot></div>
            <div>Technologies</div>
            <div><slot name="technologies"></slot></div>
            <div>Role</div>
            <div><slot name="role"></slot></div>
            <div>Responsibilities</div>
            <div><slot name="responsibilities"></slot></div>
        </div>`;
    }
}

window.customElements.define('app-project', Project);