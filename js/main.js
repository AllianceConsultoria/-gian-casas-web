// Script principal para o site Gian Casas

document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica do Menu Mobile (Hambúrguer)
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            if (mobileMenu.classList.contains('active')) {
                mobileToggle.innerHTML = '&#10005;';
            } else {
                mobileToggle.innerHTML = '&#9776;';
            }
        });
    }

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileToggle.innerHTML = '&#9776;';
        });
    });

    console.log('Gian Casas - Site carregado com sucesso!');
});
