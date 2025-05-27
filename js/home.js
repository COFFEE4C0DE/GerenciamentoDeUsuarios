function setupSlider() {
    let contador = 0;
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.cafe').length;

    const moveSlide = (n) => {
        contador += n;

        if (contador >= totalSlides) {
            contador = 0;
        } else if (contador < 0) {
            contador = totalSlides - 1;
        }

        slides.style.transform = `translateX(${-contador * 100}%)`;
    };

    return { moveSlide };
}

function init() {
    const { moveSlide } = setupSlider();

    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
}

init();