#!/usr/bin/env node
/**
 * Avisa os buscadores (Bing, Yahoo, Yandex, Seznam) que as URLs mudaram.
 * O Google nao participa do IndexNow; para ele, use o Search Console.
 *
 * Uso:
 *   node scripts/indexnow.mjs
 *   node scripts/indexnow.mjs https://i9base.com.br/convites
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const INDEXNOW_KEY = readFileSync(join(here, "..", "lib", "indexnow.key"), "utf8").trim();
const SITE_HOST = "i9base.com.br";
const SITE_URL = `https://${SITE_HOST}`;

const URLS = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [SITE_URL + "/", SITE_URL + "/convites"];

const body = {
  host: SITE_HOST,
  key: INDEXNOW_KEY,
  keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
  urlList: URLS,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log("IndexNow:", res.status, res.statusText, "| urls:", URLS.length);
if (!res.ok) {
  const text = await res.text().catch(() => "");
  console.error(text.slice(0, 300));
  process.exit(1);
}
