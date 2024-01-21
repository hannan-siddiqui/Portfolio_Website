// menu icon-----------
let menuicon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// scroll sections active links

let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = ()  => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset + height){
            navlink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon navbar when click navbar link(scroll) --------------------

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal-------------------------------

ScrollReveal({
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home_content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home_img, .services_container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home_content h1, .about_img', {origin: 'left'});
ScrollReveal().reveal('.home_content p, .about_content', {origin: 'right'});

// typed JS--------------

const typed = new Typed('.multipletext', {
    strings:['Web Developer'],
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000,
    loop :true,
});