class HardSkills extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            .list div {
                padding: 0.25em;
            }
            h2 {
                 text-transform: uppercase;
            }
           
        </style>
        <h2>Hard Skills</h2>
        <div class="list">
            <div>.NET 4, .NET 8, Java, JavaScript, TypeScript</div>
            <div>Azure, GCP, AWS, Docker, Kubernetes</div>
            <div>MS SQL, PostgreSQL, Oracle</div>
            <div>React, Angular, RxJS</div>
            <div>Azure DevOps, Jira, GitHub, TeamCity</div>
            <div>Bicep, Terraform, CloudFormation</div>
            <div>Veracode, SonarQube</div>
        </div>`
    }
}

window.customElements.define('app-hard-skills', HardSkills);