class Contacts extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            div {
                padding: 0.3em;
            }
            a {
                text-decoration: none;
                color: black;
                white-space: nowrap;
            }
            a:hover {
                text-decoration: underline;
            }
            .contacts a:visited {
                color: black;
            }
            .linkedin-text {
                    display: none;
            }
            @media print {
                .linkedin-link {
                    display: none;
                }
                .linkedin-text {
                    display: inline;
                    white-space: nowrap;
                }
            }
        </style>
        <div class="contacts">
            <div><b>Contacts: </b></div>
            <div>
                <a href="mailto:rrymar@outlook.com">rrymar@outlook.com</a>
            </div>
            <div>
                <a href="tel:+380955941674">+380955941674</a>
            </div>
            <div>
                <a href="https://t.me/RuslanTheArchitect" target="_blank">t.me/RuslanTheArchitect</a>
            </div>
            <div>
                <a href="https://github.com/rrymar" target="_blank">github.com/rrymar</a>
            </div>
            <div class="linkedin-link">
                <a href="https://www.linkedin.com/in/ruslan-rymar-6b662046" target="_blank">
                    open linkedin profile
                </a>
            </div>
            <div class="linkedin-text">
                www.linkedin.com/in/ruslan-rymar-6b662046
            </div>
        </div>`;
    }
}

window.customElements.define('app-contacts', Contacts);