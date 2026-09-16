// Renders the copy in js/i18n.js into static pages so search engines see every language:
//   index.html     English (updated in place)
//   pt/index.html  European Portuguese
// Run after editing copy or index.html:  node scripts/build.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://colocuddling.com/";

const sandbox = {
  window: {},
  document: { documentElement: { getAttribute: () => null }, addEventListener() {} },
};
vm.runInNewContext(readFileSync(join(root, "js/i18n.js"), "utf8"), sandbox);
const { strings, htmlLang } = sandbox.window.COLO_I18N;

const escText = (v) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (v) => escText(v).replace(/"/g, "&quot;");
const norm = (v) => v.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim();

function render(template, lang) {
  const t = (key) => {
    const value = strings[lang][key] ?? strings.en[key];
    if (value == null) throw new Error(`Missing copy for "${key}" (${lang})`);
    return value;
  };
  let html = template;

  // Element content.
  html = html.replace(
    /<([a-z0-9]+)\b([^>]*?\sdata-i18n(-html)?="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g,
    (match, tag, attrs, isHtml, key, inner) => {
      const next = isHtml ? t(key) : escText(t(key));
      return norm(inner) === norm(next) ? match : `<${tag}${attrs}>${next}</${tag}>`;
    },
  );

  // Attributes.
  for (const [marker, attr] of [["placeholder", "placeholder"], ["aria", "aria-label"], ["alt", "alt"]]) {
    html = html.replace(new RegExp(`<[^>]*\\sdata-i18n-${marker}="([^"]+)"[^>]*>`, "g"), (tag, key) =>
      tag.replace(new RegExp(`\\s${attr}="[^"]*"`), ` ${attr}="${escAttr(t(key))}"`),
    );
  }

  // Head.
  const url = lang === "en" ? SITE : `${SITE}${lang}/`;
  const locale = { en: "en_GB", pt: "pt_PT" };
  const other = lang === "en" ? "pt" : "en";
  html = html
    .replace(/<html lang="[^"]*" data-lang="[^"]*"/, `<html lang="${htmlLang[lang]}" data-lang="${lang}"`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escText(t("meta.homeTitle"))}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${escAttr(t("meta.homeDesc"))}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escAttr(t("meta.ogHomeTitle"))}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escAttr(t("meta.ogHomeDesc"))}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:locale" content=")[^"]*/, `$1${locale[lang]}`)
    .replace(/(<meta property="og:locale:alternate" content=")[^"]*/, `$1${locale[other]}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`);

  if (lang === "en") return html;

  // Portuguese page lives one folder down: no auto-redirect, and relative paths point up a level.
  html = html
    .replace(/\s*<script data-lang-redirect>[\s\S]*?<\/script>/, "")
    .replace(/(\s(?:href|src)=")([^"]*)"/g, (match, pre, value) => {
      if (value === "index.html") return `${pre}./"`;
      if (value === "./") return `${pre}../"`;
      if (/^(#|[a-z]+:|\/)/i.test(value)) return match;
      return `${pre}../${value}"`;
    })
    .replace(/(<a [^>]*data-lang-set="en")( aria-current="true")?>/, "$1>")
    .replace(/(<a [^>]*data-lang-set="pt")( aria-current="true")?>/, '$1 aria-current="true">');
  return html;
}

const template = readFileSync(join(root, "index.html"), "utf8");
writeFileSync(join(root, "index.html"), render(template, "en"));
mkdirSync(join(root, "pt"), { recursive: true });
writeFileSync(join(root, "pt/index.html"), render(template, "pt"));
console.log("Built index.html and pt/index.html");
