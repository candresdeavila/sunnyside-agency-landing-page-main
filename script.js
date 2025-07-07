function renderHero() {
  const hero = document.getElementById('hero');

  hero.innerHTML = `
    <section class="relative w-full h-[100vh] bg-cover bg-center text-white uppercase font-extrabold tracking-widest"
      style="background-image: url('./images/desktop/image-header.jpg');"
      id="hero-banner">

      <!-- NAV -->
      <nav class="flex items-center justify-between px-6 py-6 md:px-12 md:py-8 absolute top-0 left-0 w-full z-20">
        <div class="text-white text-2xl font-bold">sunnyside</div>
        <ul class="hidden md:flex gap-10 text-white font-medium">
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Services</a></li>
          <li><a href="#" class="hover:underline">Projects</a></li>
          <li>
            <a href="#" class="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-opacity-75 transition">Contact</a>
          </li>
        </ul>
        <button class="block md:hidden z-30">
          <img src="./images/icon-hamburger.svg" alt="Menu" class="w-6 h-6">
        </button>
      </nav>

      <!-- TEXTO HERO -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 flex flex-col items-center gap-6">
        <h1 class="text-3xl md:text-6xl">We are creatives</h1>
        <img src="images/icon-arrow-down.svg" alt="Arrow down" class="w-6 animate-bounce" />
      </div>

      <!-- Overlay opcional para oscurecer la imagen -->
      <div class="absolute inset-0 bg-black/20"></div>
    </section>
  `;
}
renderHero();

function renderTransformSection() {
  const main = document.getElementById('main');

  const section = `
    <section class="flex flex-col md:flex-row w-full">
      <!-- Texto -->
      <div class="flex flex-col justify-center items-center text-center md:items-start md:text-left px-8 md:px-24 py-16 md:w-1/2 bg-white">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-very-dark-desaturated-blue">Transform your brand</h2>
        <p class="text-dark-grayish-blue mb-6 leading-relaxed">
          We are a full-service creative agency specializing in helping brands grow fast.
          Engage your clients through compelling visuals that do most of the marketing for you.
        </p>
        <a href="#" class="uppercase font-bold tracking-wider text-sm relative inline-block after:content-[''] after:block after:h-2 after:w-full after:bg-yellow-300 after:opacity-50 hover:after:opacity-100 transition-opacity">
          Learn more
        </a>
      </div>

      <!-- Imagen -->
      <div class="md:w-1/2 h-[300px] md:h-auto">
        <img
          src="./images/mobile/image-transform.jpg"
          alt="Transform your brand"
          class="w-full h-full object-cover md:hidden"
        />
        <img
          src="./images/desktop/image-transform.jpg"
          alt="Transform your brand"
          class="w-full h-full object-cover hidden md:block"
        />
      </div>
    </section>
  `;

  main.innerHTML += section;
}
renderTransformSection();


function renderStandOutSection() {
  const main = document.getElementById('main');

  const section = `
    <section class="flex flex-col md:flex-row w-full">
      <!-- Imagen -->
      <div class="md:w-1/2 h-[300px] md:h-auto">
        <img
          src="./images/mobile/image-stand-out.jpg"
          alt="Stand out"
          class="w-full h-full object-cover md:hidden"
        />
        <img
          src="./images/desktop/image-stand-out.jpg"
          alt="Stand out"
          class="w-full h-full object-cover hidden md:block"
        />
      </div>

      <!-- Texto -->
      <div class="flex flex-col justify-center items-center text-center md:items-start md:text-left px-8 md:px-24 py-16 md:w-1/2 bg-white">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-very-dark-desaturated-blue">Stand out to the right audience</h2>
        <p class="text-dark-grayish-blue mb-6 leading-relaxed">
          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
          we’ll build and extend your brand in digital places.
        </p>
        <a href="#" class="uppercase font-bold tracking-wider text-sm relative inline-block after:content-[''] after:block after:h-2 after:w-full after:bg-red-300 after:opacity-50 hover:after:opacity-100 transition-opacity">
          Learn more
        </a>
      </div>
    </section>
  `;

  main.innerHTML += section;
}
renderStandOutSection();


function renderDesignAndPhotography() {
  const main = document.getElementById('main');

  const section = `
    <section class="flex flex-col md:flex-row w-full">
      <!-- Graphic Design -->
      <div class="relative md:w-1/2 h-[500px] md:h-[600px] text-center text-dark-desaturated-cyan">
        <!-- Imagen fondo mobile -->
        <img src="./images/mobile/image-graphic-design.jpg" alt="Graphic Design" class="absolute w-full h-full object-cover md:hidden" />
        <!-- Imagen fondo desktop -->
        <img src="./images/desktop/image-graphic-design.jpg" alt="Graphic Design" class="absolute w-full h-full object-cover hidden md:block" />
        <div class="relative z-10 flex flex-col items-center justify-end h-full px-8 pb-12 text-[#25564b]">
          <h3 class="text-2xl font-extrabold mb-4">Graphic Design</h3>
          <p class="max-w-sm text-sm leading-relaxed">
            Great design makes you memorable. We deliver artwork that underscores your brand message.
          </p>
        </div>
      </div>

      <!-- Photography -->
      <div class="relative md:w-1/2 h-[500px] md:h-[600px] text-center text-dark-blue">
        <!-- Imagen fondo mobile -->
        <img src="./images/mobile/image-photography.jpg" alt="Photography" class="absolute w-full h-full object-cover md:hidden" />
        <!-- Imagen fondo desktop -->
        <img src="./images/desktop/image-photography.jpg" alt="Photography" class="absolute w-full h-full object-cover hidden md:block" />
        <div class="relative z-10 flex flex-col items-center justify-end h-full px-8 pb-12 text-[#19536b]">
          <h3 class="text-2xl font-extrabold mb-4">Photography</h3>
          <p class="max-w-sm text-sm leading-relaxed">
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  `;

  main.innerHTML += section;
}
renderDesignAndPhotography();

function renderTestimonials() {
  const main = document.getElementById('main');

  const section = `
    <section class="w-full text-center py-24 px-6 bg-white">
      <h2 class="uppercase text-gray-700 tracking-widest text-sm mb-12">Client testimonials</h2>

      <div class="flex flex-col md:flex-row gap-12 md:gap-6 justify-center items-center max-w-6xl mx-auto">
        <!-- Testimonio 1 -->
        <div class="flex flex-col items-center max-w-sm">
          <img src="./images/image-emily.jpg" alt="Emily" class="w-16 h-16 rounded-full mb-6" />
          <p class="text-gray-600 mb-6">
            "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          </p>
          <h3 class="font-bold text-very-dark-desaturated-blue">Emily R.</h3>
          <p class="text-sm text-gray-400">Marketing Director</p>
        </div>

        <!-- Testimonio 2 -->
        <div class="flex flex-col items-center max-w-sm">
          <img src="./images/image-thomas.jpg" alt="Thomas" class="w-16 h-16 rounded-full mb-6" />
          <p class="text-gray-600 mb-6">
            "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          </p>
          <h3 class="font-bold text-very-dark-desaturated-blue">Thomas S.</h3>
          <p class="text-sm text-gray-400">Chief Operating Officer</p>
        </div>

        <!-- Testimonio 3 -->
        <div class="flex flex-col items-center max-w-sm">
          <img src="./images/image-jennie.jpg" alt="Jennie" class="w-16 h-16 rounded-full mb-6" />
          <p class="text-gray-600 mb-6">
            "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          </p>
          <h3 class="font-bold text-very-dark-desaturated-blue">Jennie F.</h3>
          <p class="text-sm text-gray-400">Business Owner</p>
        </div>
      </div>
    </section>
  `;

  main.innerHTML += section;
}
renderTestimonials();

function renderGallery() {
  const main = document.getElementById('main');

  const section = `
    <section class="grid grid-cols-2 md:grid-cols-4 w-full">
      <!-- Imagen 1 -->
      <div>
        <img
          src="./images/mobile/image-gallery-milkbottles.jpg"
          alt="Milk Bottles"
          class="w-full h-full object-cover md:hidden"
        />
        <img
          src="./images/desktop/image-gallery-milkbottles.jpg"
          alt="Milk Bottles"
          class="w-full h-full object-cover hidden md:block"
        />
      </div>

      <!-- Imagen 2 -->
      <div>
        <img
          src="./images/mobile/image-gallery-orange.jpg"
          alt="Orange"
          class="w-full h-full object-cover md:hidden"
        />
        <img
          src="./images/desktop/image-gallery-orange.jpg"
          alt="Orange"
          class="w-full h-full object-cover hidden md:block"
        />
      </div>

      <!-- Imagen 3 -->
      <div>
        <img
          src="./images/mobile/image-gallery-cone.jpg"
          alt="Cone"
          class="w-full h-full object-cover md:hidden"
        />
        <img
          src="./images/desktop/image-gallery-cone.jpg"
          alt="Cone"
          class="w-full h-full object-cover hidden md:block"
        />
      </div>

      <!-- Imagen 4 -->
      <div>
        <img
          src="./images/mobile/image-gallery-sugar-cubes.jpg"
          alt="Sugar Cubes"
          class="w-full h-full object-cover md:hidden"
        />
        <img
          src="./images/desktop/image-gallery-sugarcubes.jpg"
          alt="Sugar Cubes"
          class="w-full h-full object-cover hidden md:block"
        />
      </div>
    </section>
  `;

  main.innerHTML += section;
}
renderGallery();


function renderFooter() {
  const body = document.body;

  const footer = `
    <footer class="bg-[#90d4c6] py-16 px-6 text-center flex flex-col items-center space-y-8">
      <!-- Logo -->
      <img src="./images/logo.svg" alt="Sunnyside logo" class="h-6 invert-0 brightness-0 saturate-0 opacity-70" />

      <!-- Menú -->
      <ul class="flex space-x-8 text-[#2c7566] font-semibold">
        <li><a href="#" class="hover:text-white">About</a></li>
        <li><a href="#" class="hover:text-white">Services</a></li>
        <li><a href="#" class="hover:text-white">Projects</a></li>
      </ul>

      <!-- Iconos sociales -->
      <div class="flex space-x-6 mt-4">
        <a href="#"><img src="./images/icon-facebook.svg" alt="Facebook" class="h-5 hover:brightness-125" /></a>
        <a href="#"><img src="./images/icon-instagram.svg" alt="Instagram" class="h-5 hover:brightness-125" /></a>
        <a href="#"><img src="./images/icon-twitter.svg" alt="Twitter" class="h-5 hover:brightness-125" /></a>
        <a href="#"><img src="./images/icon-pinterest.svg" alt="Pinterest" class="h-5 hover:brightness-125" /></a>
      </div>
    </footer>
  `;

  body.innerHTML += footer;
}
renderFooter();