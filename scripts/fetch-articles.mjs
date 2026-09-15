// Pulls the latest press releases from FBR's official site (fbr.gov.pk) and
// writes them to articles.json for the Tax Insights section to render.
// Only title/date/thumbnail/link are captured — full article text stays on
// fbr.gov.pk and the site links out to it, it is never reproduced here.

const SOURCE_URL = 'https://www.fbr.gov.pk/pr';
const SOURCE_ORIGIN = 'https://www.fbr.gov.pk';
const OUTPUT_PATH = new URL('../public/articles.json', import.meta.url);
const LOG_PATH = new URL('../fetch-articles.log', import.meta.url);
const MAX_ARTICLES = 6;

async function log(line) {
  const fs = await import('node:fs/promises');
  await fs.appendFile(LOG_PATH, `[${new Date().toISOString()}] ${line}\n`, 'utf8');
}

const ITEM_RE =
  /<img src="([^"]+)" class="pressReleaseFeaturedImage"[^>]*\/?>[\s\S]*?<a href="(\/pr\/[^"]+)">\s*<h4>([\s\S]*?)<\/h4>\s*<span class="btn btn-success[^"]*">([^<]+)<\/span>/g;

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

async function main() {
  const res = await fetch(SOURCE_URL, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ChamberSiteFetcher/1.0)' },
  });
  if (!res.ok) throw new Error(`FBR fetch failed: HTTP ${res.status}`);
  const html = await res.text();

  const articles = [];
  let match;
  while ((match = ITEM_RE.exec(html)) && articles.length < MAX_ARTICLES) {
    const [, image, relLink, rawTitle, rawDate] = match;
    articles.push({
      title: decodeEntities(rawTitle),
      date: decodeEntities(rawDate),
      url: SOURCE_ORIGIN + relLink,
      image: image.startsWith('http') ? image : SOURCE_ORIGIN + image,
    });
  }

  if (articles.length === 0) {
    throw new Error('No articles parsed — FBR page markup may have changed.');
  }

  const payload = {
    source: 'Federal Board of Revenue (FBR), Government of Pakistan',
    sourceUrl: SOURCE_URL,
    fetchedAt: new Date().toISOString(),
    articles,
  };

  const fs = await import('node:fs/promises');
  await fs.writeFile(OUTPUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  const msg = `Wrote ${articles.length} articles to ${OUTPUT_PATH.pathname}`;
  console.log(msg);
  await log(`OK - ${msg}`);
}

main().catch(async (err) => {
  console.error('fetch-articles failed:', err.message);
  await log(`FAILED - ${err.stack || err.message}`);
  process.exitCode = 1;
});
