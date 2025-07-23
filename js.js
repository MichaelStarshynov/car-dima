// ========== Массив машин ==========
const cars = [  { name: "Buick Electra 225", image: "https://i.postimg.cc/PN0yGv62/IMG-20250621-141219.jpg", details:"The Buick Electra 225 was a full-size luxury car produced by Buick from 1959 to 1990. Known for its length, comfort, and smooth V8 engine, it became a symbol of American luxury in the 1960s and 70s. The 225 refers to the car's overall length of 225 inches — nearly 5.7 meters!" },
  { name: "Chevrolet Task Force", image: "https://i.postimg.cc/p9748wsJ/482b4006-c4ef-4c63-8e9d-45ae40223029-2.png", details:"The Chevrolet Task Force was a series of pickup trucks produced from 1955 to 1959. It followed the Advance Design series and introduced more modern styling and features for its time." },
  { name: "Cadillac Series 62 Sedan", image: "https://i.postimg.cc/qgCh82vs/d0572b49-2e28-4ad9-bf4a-04f00e649f1a.png", details:"The Cadillac Series 62 Sedan was a luxury automobile produced by Cadillac from 1940 to 1964. It became one of the brand’s most iconic models, known for its chrome-heavy style, powerful V8 engines, and smooth ride." },
  { name: "Mercedes-Benz 190 SL", image: "https://i.postimg.cc/gXGwN1yk/f7f930e0-098b-4f65-8288-1db22649e48c.png", details:"The Mercedes-Benz 190 SL is a luxurious roadster produced between 1955 and 1963. It was developed as a more affordable alternative to the famous 300 SL." },
  { name: "Chevrolet Pickup (Master Series)", image: "https://i.postimg.cc/BnTc2sgC/e6b79d1a-fb72-4010-ade2-8c9a884aabe0.png", details:"The Chevrolet Pickup from the Master Series era is a classic American workhorse from the late 1930s. It combined durability with art-deco styling." },
  { name: "Subaru 360", image: "https://i.postimg.cc/3WBqSphK/a071c345-da0c-4c6d-9250-4d1c6435b9be.png", details:"The Subaru 360 was Japan’s first mass-produced car and marked the beginning of Subaru’s automotive history. It was nicknamed the “ladybug” for its round shape and tiny size." },
  { name: "Lamborghini Huracán Performante", image: "https://i.postimg.cc/Fd6yFqPZ/6ad47809-61d8-48a8-ae2a-c07c49d884cf.png", details:"The Lamborghini Huracán Performante is a track-focused version of the Huracán, known for its aggressive design and incredible performance." },
  { name: "Mercedes-Benz EQE", image: "https://i.postimg.cc/mh8D9CRv/da8ff44a-32be-4235-bae7-bc5c0d45b0c9.png", details:"The Mercedes-Benz EQE is a luxury electric sedan from the EQ lineup, offering advanced technology and elegant design." },
  { name: "Chevrolet Suburban", image: "https://i.postimg.cc/m1gFMGDM/67c49047-c98d-41d4-8aad-a24d15c7d88b.png", details:"The Chevrolet Suburban is one of the longest-running nameplates in automotive history, known for its full-size versatility and space." },
  { name: "Chevrolet AK Series Pickup", image: "https://i.postimg.cc/G9t2kKKk/09600b1d-9e2d-44ea-9ea2-45d9df3571e5.png", details:"The Chevrolet AK Series was a line of light-duty trucks built in the 1940s, widely used during and after World War II." },
  { name: "Ford Mustang Convertible", image: "https://i.postimg.cc/PLtL0wsh/1aac1e0b-6616-4e06-9776-8ab07ba56a11.png", details:"The Ford Mustang Convertible is a classic American muscle car with a soft top for open-air driving fun." },
  { name: "Fiat 600", image: "https://i.postimg.cc/F1zqbW6g/714818f4-ee24-4f44-8a60-7ba74f7cee93.png", details:"The Fiat 600 is a tiny Italian city car, loved for its compact size and simplicity." },
  { name: "Ford Mustang Coupe", image: "https://i.postimg.cc/d7DdNCcX/b2dca309-0548-4917-b5c2-67b2433a975e.png", details:"The Ford Mustang Coupe is a hardtop version of the iconic Mustang — one of the most influential muscle cars ever built." },
  { name: "Morgan Plus 4", image: "https://i.postimg.cc/2VgSN9MC/d0bfd90d-f206-4480-acda-62531b348cba.png", details:"The Morgan Plus 4 is a handcrafted British roadster with retro looks and modern engineering." },
  { name: "Cadillac Sedan DeVille", image: "https://i.postimg.cc/tYHGp0DR/d7d5d979-bcd6-4b3e-bc38-80429e722f3b.png", details:"The Cadillac Sedan DeVille is a full-size American luxury car known for its smooth ride, spacious interior, and bold presence. Blending classic elegance with powerful V8 performance, it defined upscale comfort for generations." },
  { name: "Ford Thunderbird", image: "https://i.postimg.cc/DSGgFZfm/25bfc576-12d0-40f7-880b-eaed30d1eec1.png", details:"The Ford Thunderbird is a stylish American icon that blended performance with personal luxury. With its distinctive design and powerful engines, it captured the spirit of mid-century cruising." },
  { name: "Pontiac Firebird Trans Am", image: "https://i.postimg.cc/2LrC23HJ/742d1d18-9001-4163-8f14-f32f3d94b96d.png", details:"The Pontiac Firebird Trans Am is a legendary American muscle car, famed for its aggressive styling and thrilling V8 performance. A symbol of 70s and 80s car culture, it delivered attitude, speed, and unmistakable road presence." },
  { name: "Bentley 3 Litre", image: "https://i.postimg.cc/tnTQxnRN/3e1ed2fd-69a4-445a-bea3-0573db4a9b2e.png", details:"The Bentley 3 Litre is a vintage British sports car that established Bentley’s reputation for speed and endurance in the 1920s. Handcrafted and race-proven, it combined elegance with raw performance, winning Le Mans twice." },
  { name: "LGOC B-Type Double-Decker Bus", image: "https://i.postimg.cc/XXC1Jgg7/a8207c2d-b901-4580-a394-375b4abb39dc.png", details:"The LGOC B-Type was one of the world’s first mass-produced double-decker buses, introduced in London in the early 1910s. With its open top and sturdy design, it became an iconic symbol of Edwardian transport — even serving in World War I." },
  { name: "Chevrolet Camaro", image: "https://i.postimg.cc/4nMdvVq0/61639437-5a3f-4d34-bb6b-2c87c1d33414.png", details:"The Chevrolet Camaro is a classic American muscle car known for its bold design and thrilling performance. Born to rival the Mustang, it delivers power, attitude, and pure driving excitement." },
  { name: "Chevrolet C/K", image: "https://i.postimg.cc/m1LzFsnG/04162ea5-d2e0-4ada-a01d-93c29ab908a0.png", details:"The Chevrolet C/K is a rugged line of full-size pickup trucks that became a staple of American work and lifestyle from the 1960s through the '90s. Known for their durability and timeless design, C/K trucks balanced utility with everyday comfort."},
  { name: "Chevrolet C/K 1500", image: "https://i.postimg.cc/qNnxH29h/e5768c08-78ac-4020-8054-fcf03836511b.png", details:"The Chevrolet C/K 1500 is a half-ton pickup truck celebrated for its reliability, versatility, and classic American styling. Whether on the job or off-road, it delivers dependable performance with a no-nonsense attitude." },
  { name: "Chevrolet S-10", image: "https://i.postimg.cc/HcY8RhPM/f897a607-7a31-4508-8527-c3b59f2107ae.png", details:"The Chevrolet S-10 is a compact pickup truck that brought Chevy’s rugged capability to a smaller, more urban-friendly size. Known for its agility and practicality, it became a popular choice for drivers needing a versatile daily workhorse." },
  { name: "Ford Mustang Fastback", image: "https://i.postimg.cc/0b0R2Xtj/7b8cf21e-7dd3-46e2-9871-a958c2367649.png", details:"The Ford Mustang Fastback is an iconic American muscle car combining sleek, aerodynamic styling with powerful performance. Celebrated for its aggressive look and thrilling drive, it embodies the spirit of freedom and speed." },
  { name: "Citroën 2CV", image: "https://i.postimg.cc/9rK82d20/c89eeba2-6fd6-45d2-bdbe-17299b6995b3.png", details:"The Citroën 2CV is a minimalist French classic designed for practicality and simplicity. Known for its quirky design and exceptional fuel efficiency, it became a beloved symbol of post-war mobility and rural charm." },
  { name: "Chevrolet Corvette C3", image: "https://i.postimg.cc/S2cqLSG7/eef1ca2b-f62f-49db-b879-edc746140743.png", details:"The Chevrolet Corvette C3 is a bold and aggressive American sports car, instantly recognizable by its shark-inspired design. Combining striking style with powerful V8 engines, it defined high-performance driving through the 1970s." },
  { name: "Freightliner FLD Christmas", image: "https://i.postimg.cc/21dKxqp5/cc18ba64-6a99-49f8-a898-a0cea92d9531.png", details:"The Freightliner FLD Christmas edition is a festive twist on the classic heavy-duty truck, blending rugged performance with seasonal flair. Known for its durability on long hauls, this special version adds a unique holiday spirit to the open road." },
  { name: "Fiat 124 Sport Spider", image: "https://i.postimg.cc/ygPsxFz4/d868d05e-de95-4e1e-9ce6-57483c06b927.png", details:"The Fiat 124 Sport Spider is a charming Italian roadster combining elegant design with spirited performance. Lightweight and agile, it offers an engaging driving experience wrapped in classic 1960s style." },
  { name: "Citroën Méhari", image: "https://i.postimg.cc/gXRLTtRy/06ffdc88-451e-4011-8141-ad44cddcbfc6.png", details:"The Citroën Méhari is a quirky, lightweight French utility vehicle with a distinctive plastic body and off-road capability. Designed for fun and practicality, it became a symbol of carefree outdoor adventures and innovative simplicity." },
  { name: "NG TC V8", image: "https://i.postimg.cc/Bj7GrqBs/1a635d4b-203c-4f97-adde-b9eff86cc4f9.png", details:"The NG TC V8 is a lightweight British kit car that perfectly blends vintage roadster styling with powerful Rover V8 engines. Known for its nimble handling and thrilling performance, it offers a pure and engaging driving experience for enthusiasts." },
  { name: "Volkswagen Beetle", image: "https://i.postimg.cc/xqv018XK/3fce08b2-77f6-49b7-bedb-0b23ff3102f2.png", details:"The Volkswagen Beetle is an iconic compact car known for its distinctive rounded design and timeless appeal. Combining classic charm with modern engineering, it delivers a unique driving experience cherished worldwide." },
  { name: "Jeep Cherokee XJ", image: "https://i.postimg.cc/zLnnVffs/bd720ec0-7f9f-4642-a2a8-da9f57b93523.png", details:"This is a classic Jeep Cherokee XJ, known for its boxy design and off-road capabilities. It's a rugged and reliable SUV that became iconic in the late '90s." },

  
  //{ name: "Porsche Taycan", image: "https://i.postimg.cc/w74KGq9Y/6821ad81-9023-4780-a7da-f0ec3d0a557f.png", details:"The Porsche Taycan is a high-performance electric car that combines luxury with cutting-edge technology. Its sleek design and powerful acceleration make it one of the most exciting EVs on the road today." },//
  //{ name: "Opel Blitz", image: "https://i.postimg.cc/jdTR2nCQ/20220728-111551.jpg", details:"This is an Opel Blitz from the 1930s, a legendary German pickup truck with wooden side panels. It was widely used for transportation in both civilian and military sectors." },//
  //{ name: "American LaFrance", image: "https://i.postimg.cc/WbmfnXjC/20220728-120245.jpg", details:"This is an early 20th-century American LaFrance fire truck, famous for its iconic red design and impressive equipment. It was used to fight fires in big cities and is now a symbol of historic firefighting technology." },//
 

];
      
const car = [
  {image: "https://i.postimg.cc/Dy3MQ3d9/image.png", place: "Castricum"},
  {image: "https://i.postimg.cc/fL4c4DLZ/image.png", place: "Castricum"},
  {image: "https://i.postimg.cc/T1t5P6RK/image.png", place: "Castricum"},
  {image: "https://i.postimg.cc/xCx9JTzV/image.png", place: "Castricum"},
  {image: "https://i.postimg.cc/Qd2mDp4R/image.png", place: "Castricum"},
  {image: "https://i.postimg.cc/Pr3hSq3L/image.png", place: "Louwman museum"},
  {image: "https://i.postimg.cc/qRRxXjz6/image.png", place: "Louwman museum"},
  {image: "https://i.postimg.cc/JzrxzrMQ/image.png", place: "Street"},
  {image: "https://i.postimg.cc/02xdVkMq/image.png", place: "Street"},
  {image: "https://i.postimg.cc/FRykSSxk/image.png", place: "Street"},
  {image: "https://i.postimg.cc/1tB5PrHB/image.png", place: "Street"},
  {image: "https://i.postimg.cc/3Jshsqh7/image.png", place: "Street"},
  {image: "https://i.postimg.cc/c1V4WC7V/image.png", place: "Street"},
  {image: "https://i.postimg.cc/nrY3zM5n/image.png ", place: "Street"},

  
]
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

function showPage(page) {
  content.innerHTML = '';

  const h2 = document.createElement('h2');
  h2.textContent = pages[page].title;
  content.appendChild(h2);

  const div = document.createElement('div');
  div.innerHTML = pages[page].text;
  content.appendChild(div);

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
