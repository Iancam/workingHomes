import fs from "fs";
export const colors = {
  sky: "#e8f0ff",
  tan: "#f2e2ce",
  beard: "#8c5c51",
  truckBedBlue: "#304d73",
  wall: "#fff5e8",
  sky: "#e8f0ff",
};
export const images = fs.readdirSync("./images");
const color = ([k, v]) => `
.${k} {color: ${v};}
.bg-${k}{background-color: ${v}; } `;
export const style = `<style>
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
