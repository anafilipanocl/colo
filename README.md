# Colo — professional cuddling in Lisbon

Marketing site for Ana’s solo professional cuddling practice. Static HTML, no accounts, no calendar. Session requests come through the contact form.

## Pages

- `index.html` — home
- `faq.html` — questions, grouped
- `contact.html` — enquiry form

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

The site will be at `https://<user>.github.io/<repo>/`.
