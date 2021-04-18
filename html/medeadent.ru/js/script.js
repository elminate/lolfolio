const hamburger = document.querySelector('.header__hamburger'),
    menu = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});