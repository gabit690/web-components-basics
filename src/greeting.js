class AppGreeting extends HTMLElement {
  
  constructor() {

    super();

    this._username = '';

    this._isActive = false;
  }

  connectedCallback() {

    this._isActive = true;

    let subtitle = document.createElement('em');

    subtitle.style.display = 'block';

    subtitle.style.textAlign = 'center';

    subtitle.style.padding = '10px 0px';

    subtitle.innerHTML = `Hello ${this._username}. I happy to see you !!!`

    this.appendChild(subtitle);

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
