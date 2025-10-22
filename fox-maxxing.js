/**
 * Copyright 2025 petriedavid
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `fox-maxxing`
 * 
 * @demo index.html
 * @element fox-maxxing
 */
export class FoxMaxxing extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "fox-maxxing";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "https://randomfox.ca/floof/";
    this.author = "";
    ;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      author: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
      display: block;
      font-family: sans-serif;
      text-align: center;
      padding: 16px;
    }
    .card {
      display: inline-block;
      background: var(--card-bg, #fff);
      border-radius: 0px;
      overflow: hidden;
      width: 320px;
      transition: transform 0.2s ease;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }
    .info {
      padding: 10px;
    }
    button {
      background: dodgerblue;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      margin-top: 10px;
      cursor: pointer;
    }
    button:hover {
      background: #c0190a;
    }
    `];
  }

  connectedCallback() {
    super.connectedCallback();
    this.getNewFox();
  }

  async newFox() {
    try {
      const res = await fetch('https://randomfox.ca/floof/');
      const data = await res.json();
      this.image = data.image;
      this.title = 'fox title';
      this.author = 'randomfox.ca';
    } catch (err) {
      console.error('Error fetching fox:', err);
    }
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.image}" alt="the fox is here" />
        <div class="info">
          <h3>${this.title}</h3>
          <p>photo provided by: ${this.author}</p>
          <button @click="${this.newFox}">want a new fox?</button>
        </div>
      </div>
 `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(FoxMaxxing.tag, FoxMaxxing);