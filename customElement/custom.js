class AppGreeting extends HTMLElement {
  
  constructor() {

    super();

    this._username = 'none';

    this._isActive = false;
  }

  connectedCallback() {

    this._isActive = true;

    let bold = document.createElement('strong');

    bold.innerHTML = `Hello user ${this._username}. I happy to see you again.`

    this.appendChild(bold);

    console.log("Component was MOUNTED");
  }

  disconnectedCallback() {

    this._isActive = false;

    console.log("Component was UNMOUNTED");
  }

  attributeChangedCallback(attrChanged, oldValue, newValue) {

    console.log(`${attrChanged} cambio de ${oldValue} a ${newValue}`);

    if (attrChanged === "name") {

      this._username = newValue;

    }
  }

  static get observedAttributes() {

    return ['name'];
  }
}

window.customElements.define('app-greeting', AppGreeting);
