class ShadowContainer extends HTMLElement {
  
  constructor() {

    super();

    // Shadow DOM registration
    this._root = this.attachShadow({ mode: "closed" });

    this._template = document.getElementById('template-md-card');

    this._shadowCard = document.importNode(this._template.content, true);
  }

  connectedCallback() {

    this._root.appendChild(this._shadowCard);

    console.log("Shadow card was rendered!!!");
  }

}

window.customElements.define('shadow-container', ShadowContainer);
