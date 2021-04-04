import { websiteTitle } from "./data.mjs";
import { style } from "./style.mjs";
import { html } from "./utils.mjs";
export const head = html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${websiteTitle}</title>
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
      />
      ${style}
    </head>
  </html> `;

export const nav = (sections) => html`<div
  class="bg-yellow white pa0 f3 fw1 truckBedBlue w-100 fixed avenir"
>
  <div class="pointer dib pa3">
    <div class="link">
      <a class="pl3 link hover-pink truckBedBlue fl" href="#home"
        ><h4 class="dib avenir tc ma0 fw5">${websiteTitle}</h4></a
      >
    </div>
  </div>
  ${sections.map(
    (sect) => html`<a class="link dib fr" href="#${sect.title.toLowerCase()}"
      ><div class="hover-bg-pink pointer dib pa3 fr">
        <div class="link">${sect.title}</div>
      </div></a
    >`
  )}
</div>`;

export const hero = html`<div class="vh-100 Tools cover">
  <h1 class="avenir tc mt0 pt4 f-headline fw7 truckBedBlue">${websiteTitle}</h1>
</div>`;

export const card = ({ title, image, text }) => html`
  <div class="tc w5 min-h-100 ma2 bg-near-white ba br2 dib bg-wall">
    <p class="ma1 avenir fw1 f3 ttc pv2">${title || text}</p>
    <div class="${image} cover w-100 h5 br3 br--bottom"></div>
  </div>
`;

export const sectionCentered = ({ title, content, Class, id }) => html`<div
  id=${id ?? title.toLowerCase()}
  class="h-100 tc center pt4 pb4 ${Class || "bg-light-yellow"}"
>
  <h2 class="f2 avenir mt0 truckBedBlue">${title}</h2>
  ${content}
</div>`;

export const sectionTitleLeft = ({ title, content, Class, id }) => html`<div
  class="bg-washed-red ${Class}"
  id=${id ?? title.toLowerCase()}
>
  <div class="w-50 f2 fl avenir truckBedBlue pl4 pr4 mt0">
    <h2 class="fr mr2 pr4">${title}</h2>
  </div>
  <div class="w-25 fl avenir mt6 tl">${content}</div>
</div> `;

export const cards = (cards) => html` <div
  class="flex flex-wrap items-center w-75 tc center justify-center"
>
  ${cards.map(card)}
</div>`;
