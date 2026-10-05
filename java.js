// ===== 1. DATOS DE LA GALERÍA (Fotos y Poemas) =====
// Aquí están todas tus fotos con sus poemas. Si quieres cambiar un poema, solo edita el texto.
const galleryData = {
    'cosas-meli': [
        { src: 'meli/loto.jfif', poem: 'Como la flor de loto, te elevas sobre cualquier obstáculo, hermosa y radiante en medio de todo. Eres pura y bella.' },
        { src: 'meli/astro.jpeg', poem: 'Aunque el universo sea infinito y esté lleno de estrellas, mi lugar favorito siempre será a tu lado.' },
        { src: 'meli/ger.jpg', poem: 'Tus colores favoritos iluminan mis días, recordándome lo mucho que te amo y lo feliz que me haces.' },
        { src: 'meli/regal1.jpeg', poem: 'Cada regalo es un pedacito de mi corazón que te entrego con todo mi amor. Espero que te guste mucho.' }
    ],
    'mi-prioridad': [
        { src: 'meli/f1.jpeg', poem: 'Eres mi prioridad número uno, mi pensamiento constante y la razón de mi sonrisa.' },
        { src: 'meli/f3.jpeg', poem: 'Cada vez que te miro, me enamoro de nuevo de la persona tan maravillosa que eres.' },
        { src: 'meli/f4.jpeg', poem: 'Eres la dueña de mis pensamientos y la reina de mi corazón. Te amo muchísimo.' },
        { src: 'meli/f5.jpeg', poem: 'No importa cuánto tiempo pase, siempre quiero estar a tu lado, mi amor.' },
        { src: 'meli/f6.jpeg', poem: 'Eres mi mundo entero, la persona que le da sentido a todo lo que hago.' },
        { src: 'meli/f7.jpeg', poem: 'Mi todo, mi nada, mi universo. Eres el mejor regalo que la vida me ha dado.' },
        { src: 'meli/f8.jpeg', poem: 'La más hermosa de todas. Tu belleza no solo es exterior, sino también la de tu corazón.' },
        { src: 'meli/f9.jpeg', poem: 'Cada día a tu lado es un regalo que atesoro en mi corazón. Eres mi persona favorita.' },
        { src: 'meli/ft10.jpg', poem: 'No importa la distancia ni el tiempo, siempre te llevo conmigo en cada latido de mi corazón.' },
        { src: 'meli/ft11.jpg', poem: 'Eres la razón por la que creo en el amor verdadero. Gracias por existir.' },
        { src: 'meli/ft12.jpg', poem: 'A tu lado, cualquier lugar es mi hogar. Eres mi refugio seguro.' },
        { src: 'meli/ft13.jpg', poem: 'Tus ojos son mi lugar favorito para perderme, y tu sonrisa mi motivo para sonreír.' },
        { src: 'meli/ft14.jpg', poem: 'Cada momento contigo es un tesoro que guardo en el alma. Te amo infinitamente.' },
        { src: 'meli/ft15.jpg', poem: 'Me encanta cada detalle de ti, desde tu forma de hablar hasta tu hermosa sonrisa.' },
        { src: 'meli/ft16.jpg', poem: 'Si pudiera pedir un deseo, pediría pasar toda una eternidad a tu lado.' },
        { src: 'meli/ft17.jpg', poem: 'Gracias por llegar a mi vida y llenarla de luz, de amor y de momentos inolvidables.' },
        { src: 'meli/ft18.jpg', poem: 'Contigo he aprendido que el amor verdadero existe y que se siente tan bonito como esto.' },
        { src: 'meli/ft19.jpg', poem: 'Eres esa persona especial que hace que todo lo malo desaparezca cuando estoy contigo.' },
        { src: 'meli/ft20.jpg', poem: 'Te amo no solo por lo que eres, sino por lo que soy cuando estoy a tu lado.' },
        { src: 'meli/ft21.jpg', poem: 'Nuestro amor es mi historia favorita, y espero seguir escribiendo páginas contigo.' }
    ],
    'dibujo': [
        { src: 'meli/dibujo1.jpeg', poem: 'Tu arte refleja la belleza de tu alma, y yo soy muy afortunado de poder admirarlo.' },
        { src: 'meli/dibujo2.jpeg', poem: 'Cada trazo que haces está lleno de magia, al igual que cada momento que compartimos.' },
        { src: 'meli/dibujo3.jpeg', poem: 'Me fascina tu creatividad y la forma en que ves el mundo. Eres increíble.' },
        { src: 'meli/dibujo4.jpeg', poem: 'Dibujas maravillas, pero la obra de arte más hermosa eres tú misma.' },
        { src: 'meli/dibujo5.jpeg', poem: 'Tan hermosa como las flores que dibujas, y con un corazón aún más bonito.' },
        { src: 'meli/dibujo6.jpeg', poem: 'Para mí eres una estrella que brilla con luz propia, guiando mi camino.' },
        { src: 'meli/collas1.jpeg', poem: 'Un regalito hecho con mucho esfuerzo y amor, pensando siempre en hacerte feliz.' },
        { src: 'meli/collas2.jpeg', poem: 'Todo lo que hago por ti está hecho con amor, porque te lo mereces todo.' },
        { src: 'meli/collas3.jpeg', poem: 'Eres mi persona amada, mi estrella favorita en este vasto universo.' },
        { src: 'meli/midibujo.jpeg', poem: 'Hice este dibujo pensando en ti, espero que te guste tanto como a mí me gustas tú.' }
    ],
    'regalos': [
        { src: 'meli/car1.jpeg', poem: 'Nuestros momentos juntos son el mejor regalo de todos, y este es solo un pequeño detalle.' },
        { src: 'meli/car2.jpeg', poem: 'Espero que este detalle te recuerde lo mucho que te amo y lo importante que eres para mí.' },
        { src: 'meli/car3.jpeg', poem: 'Cada detalle que tengo contigo es un reflejo de mi amor por ti.' },
        { src: 'meli/car4.jpeg', poem: 'Me encanta verte feliz, y haré todo lo posible por sacarte una sonrisa siempre.' },
        { src: 'meli/car5.jpeg', poem: 'Un pequeño obsequio para una persona gigante en mi corazón.' },
        { src: 'meli/car6.jpeg', poem: 'Gracias por recibir cada uno de mis detalles con tanto amor. Te amo.' }
    ]
};

// ===== 2. FUNCIONES DE NAVEGACIÓN =====
function showView(viewId) {
    // Ocultar todas las vistas
    document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
    });
    // Mostrar la vista deseada
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0); // Subir al inicio de la página
}

function goToMenu() {
    showView('main-menu');
    // Limpiar la cuadrícula para que no se acumulen fotos
    document.getElementById('photo-grid').innerHTML = '';
}

function openCategory(category) {
    if (category === 'inicio') {
        showView('inicio-view');
        typeWriter(); // Iniciar el efecto de escritura cada vez que se entra a inicio
        return;
    }
    if (category === 'cartas') {
        showView('cartas-view');
        return;
    }

    // Para las categorías con fotos (gustos, prioridad, dibujos, regalos)
    const grid = document.getElementById('photo-grid');
    const title = document.getElementById('category-title');
    
    // Configurar el título
    const titles = {
        'cosas-meli': '🌷 Cosas que te gustan',
        'mi-prioridad': '👑 Mi Prioridad',
        'dibujo': '🎨 Tus Dibujos',
        'regalos': '🎁 Nuestros Regalos'
    };
    title.textContent = titles[category] || 'Galería';

    // Limpiar y llenar la cuadrícula
    grid.innerHTML = '';
    if (galleryData[category]) {
        galleryData[category].forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            // Guardamos el poema en un atributo data para recuperarlo al hacer clic
            card.innerHTML = `
                <img src="${item.src}" alt="Recuerdo" data-poem="${item.poem}" onclick="showPoem(this)">
            `;
            grid.appendChild(card);
        });
    }

    showView('category-view');
}

// ===== 3. FUNCIÓN PARA MOSTRAR EL POEMA Y LOS CORAZONES =====
function showPoem(imgElement) {
    const overlay = document.getElementById('poem-overlay');
    const poemImg = document.getElementById('poem-img');
    const poemText = document.getElementById('poem-text');
    const heartContainer = document.getElementById('heart-container');

    // Configurar imagen y texto
    poemImg.src = imgElement.src;
    const poem = imgElement.getAttribute('data-poem') || "Eres lo más hermoso que me ha pasado. Te amo con todo mi corazón.";
    poemText.innerText = poem;

    // Mostrar la ventana
    overlay.classList.add('active');

    // Limpiar corazones anteriores
    heartContainer.querySelectorAll('.heart-particle').forEach(h => h.remove());

    // Crear la animación de corazones alrededor de la imagen
    const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '♥️'];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        // Posicionar alrededor de la imagen
        heart.style.left = '50%';
        heart.style.top = '50%';
        
        // Calcular dirección aleatoria (círculo)
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 100; // Distancia del centro
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        // Pasar variables a CSS
        heart.style.setProperty('--tx', `${tx}px`);
        heart.style.setProperty('--ty', `${ty}px`);
        
        // Retraso aleatorio para que no salgan todos a la vez
        heart.style.animationDelay = `${Math.random() * 0.3}s`;
        
        heartContainer.appendChild(heart);
    }

    // Lanzar confeti
    triggerConfetti();
}

function closePoem() {
    document.getElementById('poem-overlay').classList.remove('active');
}

// ===== 4. EFECTOS Y UTILIDADES =====

// Modo Oscuro / Claro
function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.getElementById('theme-toggle');
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        toggleBtn.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleBtn.textContent = '☀️';
    }
}

// Música de fondo
let isPlaying = false;
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-btn');
    if (isPlaying) {
        music.pause();
        btn.textContent = '🎵';
    } else {
        music.play().catch(e => console.log("El navegador bloqueó el autoplay"));
        btn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

// Efecto Máquina de Escribir (solo se ejecuta en Inicio)
let i = 0;
let typingTimeout;
function typeWriter() {
    const text = "❤️ La niña más hermosa que verás el resto de tu vida ❤️";
    const element = document.getElementById("typewriter");
    if (!element) return;
    
    element.innerHTML = "";
    i = 0;
    clearTimeout(typingTimeout);
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typingTimeout = setTimeout(type, 100);
        }
    }
    type();
}

// Confeti
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e63946', '#ff6b81', '#ff4757', '#ff1493']
    });
}

// Contador de Amor
const startDate = new Date(2022, 0, 1); // Cambia esta fecha por la de su aniversario
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const timerElement = document.getElementById('love-timer');
    if (timerElement) {
        timerElement.innerHTML = `❤️ Juntos desde hace: <br> ${days} días, ${hours} horas y ${minutes} min ❤️`;
    }
}
setInterval(updateTimer, 1000);

// Corazones flotantes de fondo
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = ['❤️', '💖', '💕', '💗'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.position = 'fixed';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    heart.style.animation = `floatHeart ${Math.random() * 2 + 4}s ease-out forwards`;
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '0';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

// Inicialización al cargar
document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
    setInterval(createFloatingHeart, 1200);
    
    // Animación de fondo (flotar corazones)
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes floatHeart {
            0% { transform: translateY(0) scale(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100vh) scale(1.5) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});