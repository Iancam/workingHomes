import fs from "fs";
import { html } from "./utils.mjs";
import { services, testimonials, websiteTitle } from "./data.mjs";
import {
  cards,
  sectionCentered,
  sectionTitleLeft,
  head,
  nav,
  hero,
} from "./components.mjs";

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

fs.writeFileSync("build/index.html", page);
fs.mkdirSync("build/images", { recursive: true });
fs.readdirSync("images").forEach((img) =>
  fs.copyFileSync("images/" + img, "build/images/" + img)
);
