// Typed.js
const options = {
    strings: ['Desenvolvedor', 'Engenheiro', 'Pesquisador', 'Artista', 'Designer'],
    typeSpeed: 100,
    smartBackspace: true,
    loop: true,
    backDelay: 800,
    backSpeed: 100,
    shufle: true,
};

const typed = new Typed('.home-label-text', options);


// Scroll Spy
let section = document.querySelectorAll("section");
const skillSection = document.getElementById("skills");
skillSectionOffset = 400;
const skillsBars = document.getElementsByClassName('skill-bar');
let sections = {};
let i = 0;

Array.prototype.forEach.call(skillsBars, function (e) {
    e.classList.add('paused');
});


Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
});


window.onscroll = function () {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
        if (sections[i] <= scrollPosition) {

            if (skillSection.offsetTop <= scrollPosition + skillSectionOffset) {
                Array.prototype.forEach.call(skillsBars, function (e) {
                    e.classList.remove('paused');
                    e.classList.add('play');
                });
            }

            let current = document.getElementsByClassName('menu-active');
            current[0].className = 'navbar-menu-item';
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'menu-active navbar-menu-item');
        }
    }
};



