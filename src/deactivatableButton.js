class DeactivatableButton extends HTMLButtonElement {

  constructor() {

    super();

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {

    this.setAttribute("disabled", "disabled");
  }

  connectedCallback() {

    this.addEventListener('click', this._handleClick);
  }

  disconnectedCallback() {

    this.removeEventListener('click', this._handleClick);
  }
}

window.customElements.define('deactivatable-button', DeactivatableButton, {
  extends: "button"
});
