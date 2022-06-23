class ShadowContainer extends HTMLElement {
  
  constructor() {

    super();

    // Shadow DOM registration
    this.attachShadow({ mode: "open" });

    this._template = document.getElementById('template-md-card');

    this._shadowCard = document.importNode(this._template.content, true);
  }

  connectedCallback() {

    this.shadowRoot.appendChild(this._shadowCard);

    console.log("Shadow card was rendered!!!");
  }

  attributeChangedCallback(attr, oldValue, newValue) {

  }

  static get observedAttributes() {
    return [];
  }

}

window.customElements.define('shadow-container', ShadowContainer);
