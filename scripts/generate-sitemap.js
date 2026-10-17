/**
 * Genera sitemap.xml en build/ tras `npm run build`.
 * lastmod de artículos: dateModified del registry (no “hoy” artificial).
 */
const fs = require("fs");
const path = require("path");

const paths = require("../src/data/sitemap-paths.json");
const baseUrl = (
  process.env.REACT_APP_SITE_URL || "https://turismoengijon.com"
).replace(/\/$/, "");

const buildDir = path.join(__dirname, "..", "build");
const outFile = path.join(buildDir, "sitemap.xml");

const registrySrc = fs.readFileSync(
  path.join(__dirname, "..", "src", "data", "articleRegistry.js"),
  "utf8"
);

const articleLastMod = {};
const blockRe =
  /slug:\s*"([^"]+)"[\s\S]*?dateModified:\s*"(\d{4}-\d{2}-\d{2})"/g;
let match;
while ((match = blockRe.exec(registrySrc))) {
  articleLastMod[match[1]] = match[2];
}

/** Fecha estable para hubs/legales (no inventar “hoy” en cada build). */
const DEFAULT_LASTMOD = "2026-10-14";

const urlEntries = paths
  .map((p) => {
    const loc = `${baseUrl}${p === "/" ? "/" : p}`;
    const slug = p.replace(/^\//, "");
    const lastmod = articleLastMod[slug] || DEFAULT_LASTMOD;
    const priority =
      p === "/"
        ? "1.0"
        : p.split("/").filter(Boolean).length <= 1
          ? "0.9"
          : "0.8";
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
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
