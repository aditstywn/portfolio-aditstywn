// navbar
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const navIcon = document.querySelector('#navIcon')

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        // navIcon.classList.add('navIcon')
    }else{
        header.classList.remove('navbar-fixed');
        // navIcon.classList.remove('navIcon')
    }
}


// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function (){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
})