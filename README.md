# Colo — professional cuddling in Lisbon

Marketing site for Ana’s solo professional cuddling practice. Static HTML, no accounts, no calendar. Session requests come through the contact form.

## Language

EN / PT links in the header. Portuguese is European (`pt-PT`): *contacto*, *telemóvel*, *tu*.

Each language is its own static page so search engines can index both:

- `index.html` — English, at `https://colocuddling.com/`
- `pt/index.html` — Portuguese, at `https://colocuddling.com/pt/`

Copy lives in `js/i18n.js`. After changing copy or the markup of `index.html`, rebuild both pages:

```sh
node scripts/build.mjs
```

The choice of language is remembered. On a first visit to the English page, a browser set to Portuguese is sent to `/pt/`, and old `?lang=pt` links go there too.

## Pages

- `index.html`, `pt/index.html` — home
- `faq.html`, `contact.html` — redirects to the matching section
- `404.html` — not-found page

## SEO

- Domain: `colocuddling.com`. Canonical, `hreflang`, Open Graph and structured data all use it.
- `sitemap.xml` and `robots.txt` at the root. Submit the sitemap in Google Search Console.

## Connect the form

Create a free [Formspree](https://formspree.io) form, then paste the endpoint into `js/config.js`:

```js
window.COLO = {
  formAction: "https://formspree.io/f/xxxxxxxx",
};
```

Until that is set, the form still shows the on-page thank-you message so the page can be reviewed, but messages will not arrive by email.

## Publish on GitHub Pages

In the repo: **Settings → Pages → Deploy from a branch → `main` / root**.

The live site is `https://colocuddling.com/`. The GitHub Pages copy at `https://anafilipanocl.github.io/colo/` points search engines to it through its canonical tags.
