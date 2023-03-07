class Summary extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            summary {
                padding: 1em;
            }
        </style>
        <summary>
            <p>
                Highly skilled and experienced software architect with 10+ years of experience designing and implementing scalable, high-performance software systems for a diverse range of clients. Proficient in a variety of programming languages and platforms, with a strong understanding of software design principles, system architecture, and cloud computing. 
            </p>
            <p>
                Successfully led cross-functional international teams in delivering high-quality projects within defined timelines and budgets.
            </p>
            <p>
                Enjoys coding and is passionate about writing high-quality, efficient code.
            </p>
        </summary>`;
    }
}

window.customElements.define('app-summary', Summary);