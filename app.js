const menu = document.querySelector('#mobile-menu')

const menuLinks = document.querySelector('.navbar-menu')


menu.addEventListener('click' , function(event){
    event.preventDefault();
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})