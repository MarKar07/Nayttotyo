document.addEventListener('DOMContentLoaded', function() {
    // Luodaan hampurilaisvalikko-painike
    const header = document.querySelector('header');
    const navLinks = document.querySelector('.nav_links');
    
    // Luodaan hampurilaisvalikko-elementti
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Lisätään painike headeriin
    header.insertBefore(mobileMenuBtn, header.firstChild);
    
    // Lisätään valikko-toggle toiminnallisuus
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('show');
    });
    
    // Suljetaan valikko kun klikataan linkkiä
    const navLinkItems = document.querySelectorAll('.nav_links li a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('show');
            }
        });
    });
    
    // Päivitetään näkymä ikkunan koon muuttuessa
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('show');
        }
    });
});