/**
 * Genera sitemap.xml en build/ tras `npm run build`.
 * Ejecutar: node scripts/generate-sitemap.js
 */
const fs = require("fs");
const path = require("path");

const paths = require("../src/data/sitemap-paths.json");
const baseUrl = (
  process.env.REACT_APP_SITE_URL || "https://turismoporgijon.web.app"
).replace(/\/$/, "");

const buildDir = path.join(__dirname, "..", "build");
const outFile = path.join(buildDir, "sitemap.xml");

const today = new Date().toISOString().split("T")[0];

const urlEntries = paths
  .map((p) => {
    const loc = `${baseUrl}${p === "/" ? "/" : p}`;
    const priority =
      p === "/"
        ? "1.0"
        : p.split("/").length <= 2
          ? "0.9"
          : "0.8";
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

if (!fs.existsSync(buildDir)) {
  console.warn("generate-sitemap: build/ no existe. Ejecuta npm run build antes.");
  process.exit(0);
}

fs.writeFileSync(outFile, xml, "utf8");
console.log("Sitemap escrito en", outFile);
