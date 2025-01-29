class SoftSkills extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, 20em);
                grid-gap: 0.5em;
            }
            h2 {
                 text-transform: uppercase;
            }
           
        </style>
        <h2>Soft Skills</h2>
        <div class="grid">
            <div>Team leading 10+ FTE</div>
            <div>Interviewing Candidates</div>
            <div>Project Management 30+ FTE</div>
            <div>Cross team’s communication</div>
            <div>Technical Design and Documentation</div>
            <div>Architecture Definition</div>
            <div>Presales & Estimations</div>
            <div>Architecture Review</div>
            <div>Requirement Gathering</div>
            <div>Security Review</div>
        </div>`;
    }
}

window.customElements.define('app-soft-skills', SoftSkills);