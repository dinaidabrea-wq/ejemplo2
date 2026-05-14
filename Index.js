
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('ul'); 

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuToggle.classList.toggle('active'); 
    });
