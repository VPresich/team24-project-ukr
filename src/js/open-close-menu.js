const buttonMenuRef = document.querySelector('.open-mobile-menu-btn');
const mobileMenuRef = document.querySelector('.mobile-menu');
const buttonCloseMenuRef = document.querySelector('.mobile-menu-close-btn');

buttonMenuRef.addEventListener('click', () => {
mobileMenuRef.classList.add('is-open');
});

buttonCloseMenuRef.addEventListener('click', () => {
mobileMenuRef.classList.remove('is-open');
});