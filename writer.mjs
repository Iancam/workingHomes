import fs from "fs";
import { html } from "./utils.mjs";
import { services, testimonials, websiteTitle } from "./data.mjs";

const colors = {
  sky: "#e8f0ff",
  tan: "#f2e2ce",
  beard: "#8c5c51",
  truckBedBlue: "#304d73",
  wall: "#fff5e8",
  sky: "#e8f0ff",
};
const images = fs.readdirSync("./images");
const color = ([k, v]) => `
.${k} {color: ${v};}
.bg-${k}{background-color: ${v}; } `;
const style = `<style>
  .fit-cover {
    object-fit: cover;
  }
  .fit-fill {
    object-fit: fill;
  }
  .mh-100 {
    max-height: 100%;
  }
 
  ${images
    .map((fn) => fn.split("."))
    .map(
      ([fn, ftype]) => `.${fn}{
    background-image: url(images/${fn}.${ftype});
  }`
    )
    .join("\n")}
  
  ${Object.entries(colors).map(color).join("\n")}
</style>`;

const head = html`<!DOCTYPE html>
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

const nav = (sections) => html`<div
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

const hero = html`<div class="vh-100 Tools cover">
  <h1 class="avenir tc mt0 pt4 f-headline fw7 truckBedBlue">${websiteTitle}</h1>
</div>`;

const card = ({ title, image, text }) => html`
  <div class="tc w5 min-h-100 ma2 bg-near-white ba br2 dib bg-wall">
    <p class="ma1 avenir fw1 f3 ttc pv2">${title || text}</p>
    <div class="${image} cover w-100 h5 br3 br--bottom"></div>
  </div>
`;

const sectionCentered = ({ title, content, Class, id }) => html`<div
  id=${id ?? title.toLowerCase()}
  class="h-100 tc center pt4 pb4 ${Class || "bg-light-yellow"}"
>
  <h2 class="f2 avenir mt0 truckBedBlue">${title}</h2>
  ${content}
</div>`;

const sectionTitleLeft = ({ title, content, Class, id }) => html`<div
  class="bg-washed-red ${Class}"
  id=${id ?? title.toLowerCase()}
>
  <div class="w-50 f2 fl avenir truckBedBlue pl4 pr4 mt0">
    <h2 class="fr mr2 pr4">${title}</h2>
  </div>
  <div class="w-25 fl avenir mt6 tl">${content}</div>
</div> `;

const cards = (cards) => html` <div
  class="flex flex-wrap items-center w-75 tc center justify-center"
>
  ${cards.map(card)}
</div>`;

const sections = [
  { title: "Services", content: cards(services), render: sectionCentered },
  {
    title: "Testimonials",
    content: testimonials.map(
      (review) =>
        html`<p class="f3 fw1 athelas">${review.text}</p>
          <p class="tr athelas i">-- ${review.client}</p>`
    ),
    Class: "bg-washed-yellow",
    render: sectionTitleLeft,
  },
];

const page = html`${head}<body>
    ${nav(sections)}
    <div
    id="home"
      class="min-h-10 bg-yellow yellow tc pa2 f3 fw1 truckBedBlue w-100 avenir"
    >
        a
    </div>
    ${hero}
    ${sections.map((props) => props.render(props))}
    <div class="bg-truckBedBlue yellow pa4 avenir f2 fw6 fl w-100">
      <div class="db">
          <p>Phone: <a class="link dim pink" href="tel:+1 650 690-2474"> ‭‬(650) 690-2474</a></p>
        </div>
        <div class="db">
          <p>Email: <a class="link dim pink" href="mailto:john@workinghomes.net">john@workinghomes.net</a></p>
        </div>
        <div class="db">
          <p>Location: Berkeley, California</p>
        </div>
      </div>
  </body>
</html>`;

fs.writeFileSync("index.html", page);
