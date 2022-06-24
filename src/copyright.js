class BasicCopyright extends HTMLElement {

  constructor() {

    super();

    this._root = this.attachShadow({ mode: "open" });

    this._content = document.createElement('p');

    this._content.style.textAlign = 'center';

    this._content.style.position = 'absolute';

    this._content.style.bottom = '0';
    
    this._content.style.right = '0';

    this._content.style.margin = '0px 10px 5px 0px';

    this._content.style.fontSize = '0.8rem';

    this._content.style.color = 'whitesmoke';

    this._content.innerText = `Developed by Gabit-${(new Date().getFullYear())}`;
  }

  connectedCallback() {

    this._root.appendChild(this._content);

    console.log("copyright was rendered!!!");
  }
}

window.customElements.define('app-copyright', BasicCopyright);
