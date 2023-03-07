class Certifications extends HTMLElement {
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
            
        </style>
        <h2>CERTIFICATIONS AND TRAININGS</h2>
        <div class="grid">
            <div>Luxoft</div>
            <div>7 Steps to Leadership</div>
            <div>Luxoft</div>
            <div>Hard and difficult negotiations</div>
            <div>Luxoft</div>
            <div>ARC-001 Software Architecture Methodology</div>
            <div>Luxoft</div>
            <div>ARC-004 Patterns of Enterprise Application Architecture</div>
            <div>MCP (MCTS)</div>
            <div>70-536 TS: Microsoft .NET Framework - Application Development Foundation</div>
            <div>MCP (MCTS)</div>
            <div>70-562 TS: Microsoft .NET Framework, ASP.NET Application Development</div>
        </div>`;
    }
}

window.customElements.define('app-certifications', Certifications);