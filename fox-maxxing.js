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
    this.photos = [];
    this.likes = JSON.parse(localStorage.getItem("foxLikes")) || {};
    this.visibleCount = 4;
    this.displayedPhotos = []
    this.limit = 8;
  }

  // reactive properties
  static get properties() {
    return {
      ...super.properties,
      photos: { type: Array },
      likes: { type: Object },
      visibleCount: { type: Number },
    };
  }

  // waaaaaaarp
  static get styles() {
    return [super.styles, css`
    :host {
      display: block;
      min-height: 100vh;
      background: radial-gradient(circle at 50% 10%, #161616 0%, #0a0a0a 100%);
      color: #f2f2f2;
      font-family: var(--ddd-font-navigation, "Inter", sans-serif);
      padding: var(--ddd-spacing-5);
    }

    /* title */
    .gallery-title {
      text-align: center;
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: var(--ddd-spacing-6);
      color: #ffffff;
      text-shadow: 0 0 20px rgba(155, 140, 255, 0.6);
    }

    /* responsive grid */
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--ddd-spacing-4);
      justify-content: center;
      align-items: start;
      padding: var(--ddd-spacing-4);
      max-width: 1300px;
      margin: 0 auto;
    }

    /* individual fox cards */
    .card {
      background: linear-gradient(180deg, #131313 0%, #0b0b0b 100%);
      border: 1px solid rgba(155, 140, 255, 0.15);
      border-radius: var(--ddd-radius-md);
      overflow: hidden;
      box-shadow: 0 0 20px rgba(155, 140, 255, 0.1);
      transition: all 0.25s ease;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 0 25px rgba(155, 140, 255, 0.3);
      border-color: rgba(155, 140, 255, 0.4);
    }

    /* fox image */
    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      display: block;
      filter: brightness(0.95);
    }

    /* text content */
    .info {
      padding: var(--ddd-spacing-4);
      text-align: left;
    }

    h3 {
      font-weight: 700;
      font-size: 1.2rem;
      margin: 0 0 0.4rem;
      color: #fff;
    }

    p {
      color: #aaa;
      font-size: 0.9rem;
      margin: 0.2rem 0 0.8rem;
      line-height: 1.5;
    }

    /* author info */
    .author {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-top: 0.5rem;
    }

    .author img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid rgba(155, 140, 255, 0.3);
    }

    .author-info strong {
      display: block;
      color: var(--accent-color, #b19cff);
      font-weight: 600;
    }

    .author-info span {
      color: #777;
      font-size: 0.85rem;
    }

    /* action buttons */
    .actions {
      display: flex;
      justify-content: space-between;
      margin-top: 0.8rem;
    }

    button {
      background: #151515;
      color: #eaeaea;
      border: 1px solid rgba(155, 140, 255, 0.25);
      border-radius: var(--ddd-radius-xs);
      padding: 6px 12px;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s ease;
      flex: 1;
      margin: 0 0.2rem;
    }

    button:hover {
      background: rgba(155, 140, 255, 0.15);
      box-shadow: 0 0 8px rgba(155, 140, 255, 0.4);
    }

    button:focus {
      color: orange;
      transform: scale(0.95);
    }
    /* background grid effect */
    :host::before {
      content: "";
      position: fixed;
      inset: 0;
      background-image: linear-gradient(0deg, rgba(155, 140, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(155, 140, 255, 0.05) 1px, transparent 1px);
      background-size: 80px 80px;
      z-index: -1;
      opacity: 0.3;
    }

    @media (max-width: 800px) {
      .gallery {
        grid-template-columns: 1fr;
      }
    }
  `];
  }



  // inside your fox-maxxing class
  async connectedCallback() {
    super.connectedCallback();
    const res = await fetch('/api/fox');
    const data = await res.json();
    this.photos = data.photos || [];
    this.limit = 4;
    this.displayedPhotos = this.photos.slice(0, this.limit);

    window.addEventListener('scroll', () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      if (nearBottom) this.loadMore();
    });

    this.requestUpdate();
  }

  loadMore() {
    if (!this.photos?.length) return;
    if (this.limit < this.photos.length) {
      this.limit += 4;
      this.displayedPhotos = this.photos.slice(0, this.limit);
      this.requestUpdate();
    }
  }

  render() {
    if (!this.displayedPhotos?.length) {
      return html`<div class="loading">loading foxes...</div>`;
    }

    return html`
    <h2 class="gallery-title">foxstagram</h2>
    <div class="gallery">
      ${this.displayedPhotos.map(
      (photo) => html`
          <div class="card">
            <img src="${photo.thumbnail}" alt="${photo.title}" />
            <div class="info">
              <h3>${photo.title}</h3>
              <p>${photo.caption}</p>
              <div class="author">
                <img src="${photo.author.image}" alt="${photo.author.name}" />
                <div class="author-info">
                  <strong>${photo.author.name}</strong>
                  <span>${photo.author.channel}</span>
                </div>
              </div>
              <div class="actions">
      <!-- on my life i searched up the emojis on google that was not ai -->
                <a href ="#actions"><button>Love it! 🧡</button></a>
                <a href ="#actions"><button>Hate it. ☠️</button></a>
              </div>
            </div>
          </div>
        `
    )}
    </div>
  `;
  }


  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(FoxMaxxing.tag, FoxMaxxing);
