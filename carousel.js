// Controle do Carrossel de Astronomia
const carousel = document.getElementById('astronomyCarousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('carouselIndicators');

let currentIndex = 0;
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

// Criar indicadores
function createIndicators() {
    const cards = carousel.querySelectorAll('.astronomy-card');
    indicatorsContainer.innerHTML = '';
    
    cards.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'carousel-indicator';
        if (index === 0) indicator.classList.add('active');
        
        indicator.addEventListener('click', () => scrollToCard(index));
        indicatorsContainer.appendChild(indicator);
    });
}

// Scroll para um card específico
function scrollToCard(index) {
    const cards = carousel.querySelectorAll('.astronomy-card');
    if (index < 0 || index >= cards.length) return;
    
    const cardWidth = cards[0].offsetWidth + 20; // Incluir gap
    carousel.scrollLeft = index * cardWidth;
    currentIndex = index;
    updateIndicators();
}

// Atualizar indicadores
function updateIndicators() {
    const cards = carousel.querySelectorAll('.astronomy-card');
    const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
    
    // Calcular qual card está visível baseado na posição do scroll
    const cardWidth = cards[0].offsetWidth + 20;
    const visibleIndex = Math.round(carousel.scrollLeft / cardWidth);
    currentIndex = Math.min(visibleIndex, cards.length - 1);
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Navegação com botões
prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    scrollToCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
    const cards = carousel.querySelectorAll('.astronomy-card');
    currentIndex = Math.min(cards.length - 1, currentIndex + 1);
    scrollToCard(currentIndex);
});

// Drag para arrastar
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
    updateIndicators();
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1; // Multiplicador de velocidade
    carousel.scrollLeft = scrollLeft - walk;
});

// Touch para mobile
carousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1;
    carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener('touchend', () => {
    isDragging = false;
    updateIndicators();
});

// Atualizar indicadores ao fazer scroll com roda
carousel.addEventListener('scroll', updateIndicators);

// Inicializar
createIndicators();
updateIndicators();

console.log('✅ Carrossel de astronomia ativo! Arraste para explorar as curiosidades!');
