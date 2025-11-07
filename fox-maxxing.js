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

  // tag name for the element
  static get tag() {
    return "fox-maxxing";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.author = "";
    this.bio = "";
    this.foxes = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      author: { type: String },
      bio: { type: String },
      foxes: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        text-align: center;
        padding: var(--ddd-spacing-4);
      }
      .card {
        display: inline-block;
        background: var(--ddd-theme-default-coalyGray);
        border: var(--ddd-border-sm);
        border-color: var(--ddd-theme-default-potentialMidnight);
        border-radius: var(--ddd-radius-sm);
        overflow: hidden;
        width: 400px;
        box-shadow: var(--ddd-boxShadow-sm);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .card:hover {
        box-shadow: var(--ddd-boxShadow-md);
      }

      img {
        width: 100%;
        height: auto;
        display: block;
        border-bottom: var(--ddd-border-sm);
        border-color: var(--ddd-theme-default-potentialMidnight);
      }

      .info {
        padding: var(--ddd-spacing-4);
      }

      button {
        background: var(--ddd-theme-default-slateGray);
        color: var(--ddd-theme-default-white);
        border: var(--ddd-border-sm);
        border-color: var(--ddd-theme-default-potentialMidnight);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-xs);
        margin-top: var(--ddd-spacing-3);
        cursor: pointer;
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        transition: background 0.2s ease, border-color 0.2s ease;
      }

      button:hover {
        background: var(--ddd-theme-default-potentialMidnight);
        border-color: var(--ddd-theme-default-white);
      }

      #postcontainer {
        margin-top: var(--ddd-spacing-4);
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-3);
      }
    `];
  }

  // runs when component mounts to the DOM
  connectedCallback() {
    super.connectedCallback();
    this.loadFoxData();
  }

  // loads fox data from local JSON file instead of randomfox API
  async loadFoxData() {
    if (this.foxes.length === 0) {
      const res = await fetch("fox.json");
      const data = await res.json();
      this.foxes = data.foxes;
    }
  }

  // creates cards dynamically from JSON data
  renderFoxCards() {
    return html`
      ${this.foxes.map(
      (fox) => html`
          <div class="card">
            <img src="${fox.image}" alt="${fox.title}" />
            <div class="info">
              <h3>${fox.title}</h3>
              <p><strong>author:</strong> ${fox.author}</p>
              <p>${fox.bio}</p>
            </div>
          </div>
        `
    )}
    `;
  }

  // renders the component
  render() {
    return html`
      <div id="postcontainer">
        ${this.foxes.length === 0
        ? html`<p>Loading local fox data...</p>`
        : this.renderFoxCards()}
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(FoxMaxxing.tag, FoxMaxxing);
