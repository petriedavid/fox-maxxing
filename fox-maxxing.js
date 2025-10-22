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
    this.image = "";
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
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      overflow: hidden;
      width: 320px;
      transition: transform 0.2s ease;
    }
    .card:hover { transform: scale(1.02); }
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
      background: #0a64c0;
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
      this.title = 'Random Fox';
      this.author = 'randomfox.ca';
    } catch (err) {
      console.error('Error fetching fox:', err);
    }
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.image}" alt="Fox Image" />
        <div class="info">
          <h3>${this.title}</h3>
          <p>Photo from ${this.author}</p>
          <button @click="${this.newFox}">Next Fox</button>
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