import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `my-el`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyEl extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[name]]!</h2>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'my-el',
      },
    };
  }
}

window.customElements.define('my-el', MyEl);
