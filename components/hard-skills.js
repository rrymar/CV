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
            <div>.NET 4-7, Java 8, JavaScript, TypeScript</div>
            <div>Asp.Net, Entity Framework, Asp.Net Web Forms, Asp.Net MVC</div>
            <div>Azure, GCP, On Premise, Docker, Kubernetes</div>
            <div>Azure SQL, Azure App Services, Azure Container Apps, Azure Cosmos DB</div>
            <div>MS SQL, PostgreSQL, Oracle</div>
            <div>Google Cloud Run, Google Kubernetes Engine, Firebase</div>
            <div>React, Angular, RxJS</div>
            <div>Azure DevOps, GitHub, TeamCity</div>
            <div>Veracode, SonarQube</div>
        </div>`;
    }
}

window.customElements.define('app-hard-skills', HardSkills);