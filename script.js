document.querySelector('.menu')?.addEventListener('click',(e)=>{const nav=document.querySelector('.nav nav');const open=nav.style.display==='flex';nav.style.display=open?'none':'flex';nav.style.position='absolute';nav.style.top='72px';nav.style.right='0';nav.style.background='#f8f7f3';nav.style.padding='20px';nav.style.flexDirection='column';nav.style.border='1px solid #d9d5c9';e.currentTarget.setAttribute('aria-expanded',open?'false':'true');});

// Tax Insights — rendered from articles.json, which scripts/fetch-articles.mjs
// refreshes from FBR's official press-release page. Only title/date/
// thumbnail/link are shown; full article text stays on fbr.gov.pk.
const insightGrid = document.getElementById('insight-grid');
const insightUpdated = document.getElementById('insight-updated');

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Shared image-placeholder overlay for insight thumbnails and book covers —
// shown up front when no image URL exists, or swapped in if one fails to load.
const IMAGE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="4" width="18" height="16"></rect><circle cx="9" cy="10" r="1.5"></circle><path d="M4 17l5-5 3 3 4-4 4 4"/></svg>';

function imageFallback(label, sub, hiddenByDefault) {
  return `<div class="img-fallback${hiddenByDefault ? ' hidden' : ''}">${IMAGE_ICON}<b>${label}</b>${sub ? `<span>${sub}</span>` : ''}</div>`;
}

function timeAgo(iso) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const hours = Math.round(diffMs / 3.6e6);
  if (hours < 1) return 'just now';
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  const days = Math.round(hours / 24);
  return `${days} day${days === 1 ? '' : 's'} ago`;
}

async function loadInsights() {
  if (!insightGrid) return;
  try {
    const res = await fetch('articles.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.articles) || data.articles.length === 0) {
      throw new Error('No articles in feed');
    }

    insightGrid.innerHTML = '';
    data.articles.slice(0, 3).forEach((item) => {
      const title = escapeHtml(item.title);
      const url = escapeHtml(item.url);
      const image = escapeHtml(item.image);
      const date = escapeHtml(String(item.date).toUpperCase());

      const article = document.createElement('article');
      article.innerHTML = `
        <a class="insight-image" href="${url}" target="_blank" rel="noopener" aria-label="Read on FBR: ${title}">
          <img src="${image}" alt="" loading="lazy">
          ${imageFallback('Image unavailable', title, true)}
        </a>
        <div class="insight-meta">FBR PRESS RELEASE • ${date}</div>
        <h3 title="${title}">${title}</h3>
        <a href="${url}" target="_blank" rel="noopener">Read on FBR ↗</a>
      `;
      insightGrid.appendChild(article);

      const thumb = article.querySelector('.insight-image img');
      thumb.addEventListener('error', () => {
        thumb.remove();
        article.querySelector('.img-fallback').classList.remove('hidden');
      });
    });

    if (insightUpdated && data.fetchedAt) {
      insightUpdated.textContent = timeAgo(data.fetchedAt);
    }
  } catch (err) {
    insightGrid.innerHTML = `<p class="insight-status">Live updates are temporarily unavailable. Visit
      <a href="https://www.fbr.gov.pk/pr" target="_blank" rel="noopener">fbr.gov.pk/pr</a> directly for the latest FBR press releases.</p>`;
  }
}

loadInsights();

// Publications — rendered from books.json. Replace the placeholder entries
// in that file with the real titles, cover images (in assets/books/) and
// details; this just handles the rendering and a fallback when a cover
// image is missing.
const bookGrid = document.getElementById('book-grid');

async function loadBooks() {
  if (!bookGrid) return;
  try {
    const res = await fetch('books.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.publications) || data.publications.length === 0) {
      throw new Error('No publications in books.json');
    }

    bookGrid.innerHTML = '';
    data.publications.forEach((book) => {
      const title = escapeHtml(book.title || 'Untitled');
      const author = escapeHtml(book.author || '');
      const year = escapeHtml(book.year || '');
      const description = escapeHtml(book.description || '');
      const cover = escapeHtml(book.cover || '');
      const link = escapeHtml(book.link || '');

      const card = document.createElement('article');
      card.className = 'book-card';
      card.innerHTML = `
        <div class="book-cover">
          ${cover ? `<img src="${cover}" alt="${title} — cover" loading="lazy">` : ''}
          ${imageFallback(cover ? 'Cover unavailable' : 'Cover pending', title, Boolean(cover))}
        </div>
        <div class="book-info">
          ${year ? `<div class="book-year">${year}</div>` : ''}
          <h3>${title}</h3>
          ${author ? `<p class="book-author">${author}</p>` : ''}
          ${description ? `<p>${description}</p>` : ''}
          ${link ? `<a href="${link}" target="_blank" rel="noopener">More about this book →</a>` : ''}
        </div>
      `;
      bookGrid.appendChild(card);

      const img = card.querySelector('.book-cover img');
      if (img) {
        img.addEventListener('error', () => {
          img.remove();
          card.querySelector('.img-fallback').classList.remove('hidden');
        });
      }
    });
  } catch (err) {
    bookGrid.innerHTML = '<p class="insight-status">Publications are being updated — check back shortly.</p>';
  }
}

loadBooks();