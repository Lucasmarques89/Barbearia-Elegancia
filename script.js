// Teste para verificar se o JavaScript está carregando
console.log("JavaScript está funcionando!");

// Carrossel
const slides = document.querySelectorAll('.carrossel-slide');
const prevBtn = document.querySelector('.carrossel-btn.prev');
const nextBtn = document.querySelector('.carrossel-btn.next');
let currentSlide = 0;

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // ✅ Correção feita aqui: uso de crase (`) para template string
    document.querySelector('.carrossel-container').style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
}

nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Auto-slide
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Inicializa o carrossel e animações
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    
    // Animação para cards e barbeiros
    document.querySelectorAll('.card, .barbeiro').forEach((element, index) => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.transition = 'opacity 1s';
            element.style.opacity = '1';
        }, index * 200); // Delay progressivo para cada elemento
    });
});