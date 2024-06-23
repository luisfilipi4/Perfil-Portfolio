document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('h1[data-target]');
    const speed = 5000; // Velocidade da contagem

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        
        const updateCount = () => {
            const count = +counter.innerText.replace(/[\+\,]/g, ''); // Remove os caracteres não numéricos

            // Calcula a incrementação
            const increment = target / speed;

            if (count < target) {
                const newCount = Math.ceil(count + increment);
                counter.innerText = '+' + newCount.toLocaleString('en-US');
                
                // Atualiza a cor com base no valor atual
                if (newCount < target / 2) {
                    counter.style.color = 'green';
                } else if (newCount < target * 0.75) {
                    counter.style.color = 'yellow';
                } else {
                    counter.style.color = 'red';
                }

                setTimeout(updateCount, 1);
            } else {
                counter.innerText = '+' + target.toLocaleString('en-US');
                counter.style.color = 'red'; // Garante que o valor final é vermelho
            }
        };

        updateCount();
    };

    const options = {
        root: null, // Observa a visibilidade em relação ao viewport
        threshold: 0.5 // Inicia a contagem quando 50% do elemento está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target); // Desativa o observador após a contagem iniciar
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleIcon = document.getElementById("toggle-icon");
    const setaBaixo = document.getElementById("seta-baixo");
    const setaCima = document.getElementById("seta-cima");

    toggleIcon.addEventListener("click", function() {
        setaBaixo.style.display = setaBaixo.style.display === "none" ? "block" : "none";
        setaCima.style.display = setaCima.style.display === "none" ? "block" : "none";
    });
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-solid');
    } else {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-solid');
    }
});

let currentSlide = 0;
const slides = [
    document.getElementById('carousel-image'),
    document.getElementById('carousel-map')
];

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize first slide
showSlide(currentSlide);
