export default class MiHeaderComponent extends HTMLElement {
    _template = `
        <style>
            header {
                display: flex;
            }

            span {
                flex-grow: 1;
            }

            img {
                height: 5rem;
            }
        </style>
        <header>
            <span>Cocina con Alexa</span>
            <img src="/components/assets/logo.png">
        </header>
    `;

}
