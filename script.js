document.querySelector('.menu')?.addEventListener('click',()=>{const nav=document.querySelector('.nav nav');nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='72px';nav.style.right='0';nav.style.background='#f7f5f0';nav.style.padding='20px';nav.style.flexDirection='column';nav.style.border='1px solid #ddd9d0';});

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
        <a class="insight-image" style="background-image:url('${image}')" href="${url}" target="_blank" rel="noopener" aria-label="Read on FBR: ${title}"></a>
        <div class="insight-meta">FBR PRESS RELEASE • ${date}</div>
        <h3 title="${title}">${title}</h3>
        <a href="${url}" target="_blank" rel="noopener">Read on FBR ↗</a>
      `;
      insightGrid.appendChild(article);
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
        <div class="book-cover" data-fallback="${title}">
          ${cover ? `<img src="${cover}" alt="${title} — cover" loading="lazy">` : ''}
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

      const coverEl = card.querySelector('.book-cover');
      const img = coverEl.querySelector('img');
      if (img) {
        coverEl.classList.add('has-cover');
        img.addEventListener('error', () => {
          coverEl.classList.remove('has-cover');
          img.remove();
          coverEl.textContent = title;
        });
      } else {
        coverEl.textContent = title;
      }
    });
  } catch (err) {
    bookGrid.innerHTML = '<p class="insight-status">Publications are being updated — check back shortly.</p>';
  }
}

loadBooks();