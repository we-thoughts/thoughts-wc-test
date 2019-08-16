import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
class ThoughtsWcTest extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: "thoughts-wc-test"
      }
    };
  }
}
window.customElements.define("thoughts-wc-test", ThoughtsWcTest);
