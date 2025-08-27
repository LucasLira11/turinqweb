document.addEventListener('DOMContentLoaded', () => {

    // Adiciona uma classe para animar o header na rolagem
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animações de entrada de elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    // Seções para animar
    const sections = document.querySelectorAll('section, .hero-content, .hero-image');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Adicione animações de CSS correspondentes para .visible
    // Ex:
    /*
    .hero-content {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }
    .hero-content.visible {
        opacity: 1;
        transform: translateY(0);
    }
    */
});