
// ========== HTML-структура ==========
const h1 = document.createElement('h1');
h1.textContent = "SnapCar";
document.body.appendChild(h1);

const nav = document.createElement('div');
nav.id = 'nav';
document.body.appendChild(nav);

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

// ========== Страницы ==========
const pages = {
  home: {
    title: 'Welcome!',
    text: `<h3>Hello! Welcome to Snapcar — a site with real car photos from a unique private collection.</h3>
      <hr>
      <blockquote class="quote">“Every car has a story. Every photo captures a piece of history.”</blockquote>
      <br>
      <div class="glass-block">
        <h2>Warning!</h2>
        <p>We kindly ask you not to use these photos without our permission.
        These images are part of a private collection. If you'd like to request permission, feel free to <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQspWhDcbFTmnSMkbRHwJcQjSZBXFrxRCBfRFxdbTBVNVPVJBCKDjDswnhvHsxPBHWmG">contact us</a>.</p>
      </div>
      <br>` 
  },
  gallery: {
    title: 'Gallery',
    text: ''
  },
  about: {
    title: 'About',
    text: `<p>Hello! I'm Michael, 13 years old, and I created this site to show my little brother's growing car photo collection.</p>
      <p>These cars aren’t just metal and wheels — they represent moments, feelings, even dreams. That’s why we made this site: to honor a hobby, share a bit of our world, and inspire others to notice the beauty in the ordinary.</p>
      <blockquote class="quote">“Every car has a story. Every photo is a piece of history.”</blockquote>` 
  },
};

// ========== Навигация ==========
for (let key in pages) {
  const btn = document.createElement('button');
  btn.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  btn.className = 'nav-btn';
  btn.onclick = () => showPage(key);
  nav.appendChild(btn);
}

// ========== Показ страницы ==========
function showPage(page) {
  content.innerHTML = '';

  const h2 = document.createElement('h2');
  h2.textContent = pages[page].title;
  content.appendChild(h2);

  const div = document.createElement('div');
  div.innerHTML = pages[page].text;
  content.appendChild(div);
}
  // === Галерея ===
  if (page === 'gallery') {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'searchInput';
    searchInput.placeholder = 'Search cars...';
    searchInput.style.cssText = `
      padding: 12px 16px;
      margin: 20px auto;
      width: 260px;
      display: block;
      font-size: 16px;
      border-radius: 20px;
      border: 1px solid #ccc;
    `;
    content.appendChild(searchInput);

    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'gallery-container';
    content.appendChild(galleryContainer);

    function renderCards(filter = '') {
      galleryContainer.innerHTML = '';
      cars.forEach(car => {
        if (car.name.toLowerCase().includes(filter)) {
          const card = document.createElement('div');
          card.className = 'div1';
          card.id = car.name;
          card.style.cursor = 'pointer';

          const title = document.createElement('h2');
          title.textContent = car.name;

          const img = document.createElement('img');
          img.src = car.image;
          img.alt = car.name;

          card.appendChild(title);
          card.appendChild(img);
          galleryContainer.appendChild(card);

          card.onclick = () => showCarDetails(car);
        }
      });
    }

    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase().trim();
      renderCards(filter);
    });

    renderCards();
  }


// ========== Детали машины ==========
function showCarDetails(car) {
  pages.details = {
    title: car.name,
    text: `
      <div class="car-details">
        <img src="${car.image}" alt="${car.name}" style="max-width: 300px; border-radius: 10px;" />
        <h3>${car.name}</h3>
        <p>${car.details}</p>
        <button class="nav-btn" onclick="showPage('gallery')">← Back to Gallery</button>
      </div>
    `
  };
  showPage('details');
}

// ========== Запуск ==========
showPage('home');
