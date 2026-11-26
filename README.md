# MONEYWISE

Free financial calculators and plain-language money guides, built as a single self-contained HTML file. No build step, no framework, no account, and no data leaves the visitor's browser (except live currency rates).

## Features

- **22 calculators** across six categories: Budgeting, Savings & Interest, Debt & Loans, Income & Salary, Shopping & Prices, and Business.
- **Live currency converter** using mid-market rates from [open.er-api.com](https://open.er-api.com). If the service is unreachable it shows an error instead of a stale rate.
- **6 financial guides** written in plain language.
- **Display-currency picker** that remembers the visitor's choice (`localStorage`, key `mw_currency`).
- **Search and category filters** on the tools page.
- **Legal pages:** Privacy, Disclaimer and Cookie Policy.
- **Accessible and responsive:** skip link, focus styles, reduced-motion support, mobile menu, print styles.

## Quick start

1. Open `mwproject.html` in any modern browser. Nothing else is needed.
2. To publish, upload the file to any static host (GitHub Pages, Netlify, Cloudflare Pages, or plain web hosting). Rename it to `index.html` if the host expects that.

The currency converter needs internet access. Everything else works offline.

## Project structure

Everything lives in one file, in this order:

| Section | What it holds |
|---|---|
| `<head>` | SEO meta tags, canonical link, structured data, fonts |
| `<style>` | Design system (colors, spacing, components) as CSS variables |
| HTML body | Header, empty `<main>`, footer, toast area |
| `<script>` | Icons, `CURRENCIES`, `CATEGORIES`, `TOOLS`, `ARTICLES`, page renderers, router |

Pages are routed by URL hash:

| Route | Page |
|---|---|
| `#/` | Home |
| `#/tools` | All tools (supports `?cat=` and `?q=`) |
| `#/tools/<slug>` | A single calculator |
| `#/tools/currency-converter` | Currency converter |
| `#/articles`, `#/articles/<slug>` | Guides |
| `#/about`, `#/contact`, `#/legal/<key>` | Info and legal pages |

## Customizing

**Contact email.** Change `CONTACT_EMAIL` (near `renderContact`) from `hello@moneywise.example` to your real address. The contact form opens the visitor's email app with the message prefilled.

**Add a calculator.** Add an object to the `TOOLS` array:

```js
{
  slug: 'my-calculator',          // used in the URL
  name: 'My Calculator',
  cat: 'budgeting',               // a key from CATEGORIES
  icon: 'wallet',
  desc: 'One-sentence description (also used as the meta description).',
  keywords: 'words used by search',
  fields: [ money('amount', 'Amount', 1000, 'Hint text') ],
  compute(v) {
    return { kpis: [{ label: 'Result', value: fmt(v.amount), tone: 'primary' }], notes: ['Optional note.'] };
  }
}
```

`compute` can also return a `chart` (for example `{type:'donut', items:[...]}`) as the existing calculators do.

**Add a guide.** Add an object to the `ARTICLES` array with `slug`, `title`, `cat`, `read` (minutes), `excerpt`, and a `body` list of `{h, p}` sections.

**Add a currency.** Add an entry to `CURRENCIES` (`CODE: {symbol, name, locale}`).

**Colors and fonts.** Edit the CSS variables at the top of `<style>` (`--navy`, `--emerald`, `--blue`, and so on).

## Known limitations

- **SEO:** Hash routes (`#/...`) are poorly indexed by search engines. For real search traffic, split the site into separate pages (one per calculator and guide) and add a sitemap.
- **Ads:** No ad slots are included. Ad networks usually want more long-form content than six guides.
- **Cookies and analytics:** None are set. If you add analytics or ads, update the Privacy and Cookie Policy pages first.
- **Calculations** are simplified estimates and do not include every lender fee or tax rule.

## Disclaimer

MONEYWISE provides educational tools only and is not financial, tax, or legal advice. Verify important decisions with a qualified professional.
