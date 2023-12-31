const sr = ScrollReveal ({
    distance: '35px',
    duration: 2400,
    reser: true
})

sr.reveal('.logo', {delay:210, origin:'left'});
sr.reveal('.navlist', {delay:310, origin:'top'});
sr.reveal('.top-btn', {delay:410, origin:'right'});


sr.reveal('.main-content h4', {delay:510, origin:'top'});
sr.reveal('.main-content h1', {delay:610, origin:'left'});
sr.reveal('.main-content p', {delay:710, origin:'right'});
sr.reveal('.social', {delay:810, origin:'left'});
sr.reveal('.main-btn', {delay:910, origin:'top'});

const header = document.querySelector('header');

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 120)
})

var menu = document.querySelector('#menu-icon');
var navlist = document.querySelector('.navlist');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active')
    navlist.style.opacity = '1'
    console.log('Clickkk')
});

window.addEventListener('scroll',  () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
});
