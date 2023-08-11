// Logic Menu Mobile
const hamburger_menu = document.querySelector('.menu-mobile');
let span_hamburger = document.querySelectorAll('.menu-mobile span');
const nav_mobile = document.querySelector('nav ul');

hamburger_menu.addEventListener('click', function(){
    for (let i = 0; i < span_hamburger.length; i++){
        span_hamburger[i].classList.toggle('clicked');
    };

    nav_mobile.classList.toggle('slide');
});

// Logic untuk load more
let drinks_section = document.querySelectorAll('.drinks-section-container section');

const more_btn = document.querySelector('.more-btn'); 
const mobile_layout = window.matchMedia('(max-width: 576px)');
const tablet_layout = window.matchMedia('(min-width: 576px)');
const L_laptop_layout = window.matchMedia('(min-width: 768px)')

let img_count = 3;
let loop_count = 0;

if (window.innerWidth <= 991){
    img_count = 2;

    more_btn.addEventListener('click', function(){
        if (img_count === 2){
            for (let i = img_count; i < drinks_section.length; i++){
                drinks_section[i].style.display = 'block';
                img_count += 1;
                loop_count += 1;
                
            }
            more_btn.innerText = 'Show Less';
    
        } else if (img_count === 6){
            for (let i = img_count; i > drinks_section.length - loop_count; i--){
                drinks_section[i-1].style.display = 'none';
                img_count -= 1;
            };
            more_btn.innerText = 'Show More';
            loop_count = 0;
        };
        console.log(loop_count);
    });

} else if (window.innerWidth > 992) {
    more_btn.addEventListener('click', function(){
        if (img_count === 3){
            for (let i = img_count; i < drinks_section.length; i++){
                drinks_section[i].style.display = 'block';
                img_count += 1;
                
            }
            more_btn.innerText = 'Show Less';
    
        } else if (img_count === 6){
            for (let i = img_count; i > drinks_section.length - 3; i--){
                drinks_section[i-1].style.display = 'none';
                img_count -= 1;
            };
            more_btn.innerText = 'Show More';
        };
    });
};



// Logic untuk Grind
const coarse_btn = document.querySelector('.menu-grind .coarse');
const medium_btn = document.querySelector('.menu-grind .medium');
const fine_btn = document.querySelector('.menu-grind .fine');

let grind_img = document.querySelector('.content-grind .grind-img .gambar');
let grind_text = document.querySelector('.content-grind .grind-explanation');
let grind_content = document.querySelector('.content-grind');

coarse_btn.addEventListener('click', function(){
    grind_content.style.transform = 'scale(0)';
    grind_img.src = "Assets/Coarse.png";
    grind_text.innerText = 'Untuk ukuran Coarse, sesuai dengan namanya, biji kopi akan bertekstur sedikit kasar (seperti garam dapur). Alat kopi seperti French Press atau Vietnam Drip akan cocok digunakan pada biji yang berukuran Coarse.';
    grind_content.style.transform = 'scale(1)';
});

medium_btn.addEventListener('click', function(){
    grind_img.src = "Assets/Medium.png";
    grind_text.innerText = 'Untuk ukuran Medium, tekstur biji kopi akan lebih halus tetapi masih sedikit kasar. Biji kopi ukuran Medium akan cocok jika diolah menggunakan alat kopi seperti Aeropress atau Siphon.';
});

fine_btn.addEventListener('click', function(){
    grind_img.src = "Assets/Fine.png";
    grind_text.innerText = 'Untuk ukuran Fine, biji kopi akan bertekstur  halus (seperti bedak bayi). Mesin Espresso biasanya menggunakan biji kopi yang bertekstur Fine, selain itu ukuran biji Fine juga biasannya digunakan pada kopi tubruk.';
});


// Logic untuk scroll
let navBar = document.querySelector('.sticky nav');
let article_beans = document.querySelector('.content article.beans');
let article_grinds = document.querySelector('.content article.grind-sizes');
let article_drinks = document.querySelector('.content article.drinks');
let logo_transisi = document.querySelector('.logo');
let whole_content = document.querySelector('.content');

window.addEventListener('scroll', function(){
    navBar.classList.toggle('nav-scroll', window.scrollY > 0);
    article_beans.classList.toggle('transisi-article-beans', window.scrollY > 0);
    article_grinds.classList.toggle('transisi-article-grinds', window.scrollY > 0);
    article_drinks.classList.toggle('transisi-article-drinks', window.scrollY > 0);
});

// window.addEventListener('scroll', function(){
//     if (window.scrollY > 0) {
//         navBar.classList.toggle('nav-scroll', window.scrollY > 0);
//         article_beans.classList.add('masuk-beans', window.scrollY > 0);
//         article_grinds.classList.add('masuk-beans', window.scrollY > 0);
//         article_drinks.classList.add('masuk-beans', window.scrollY > 0);
//     } else if (window.scrollY <= 0) {
//         navBar.classList.toggle('nav-scroll', window.scrollY > 0);
//         article_beans.classList.remove('masuk-beans', window.scrollY > 0);
//         article_grinds.classList.remove('masuk-beans', window.scrollY > 0);
//         article_drinks.classList.remove('masuk-beans', window.scrollY > 0);
//     };
// });



// Logic Biodata 
let biodata = document.querySelector('.biodata .biodata-content');

biodata.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/henzi-juandri-514a9019a/');
});










///////////////////// CODE YANG GA JADI DIPAKAI /////////////////////
// Logic untuk Pop up
// const screen_overlay = document.querySelector('.screen-overlay');
// const pop_up = document.querySelector('.pop-up');
// const back_btn = document.querySelector('.back-btn');

// const coarse = document.getElementById('coarse');
// const medium = document.getElementById('medium');
// const fine = document.getElementById('fine');

// let pop_up_title = document.querySelector('.pop-up .pop-up-main h2');
// let pop_up_body = document.querySelector('.pop-up .pop-up-main p');

// coarse.addEventListener('click', function(){
//     pop_up.classList.add('pop-up-active');
//     pop_up_title.innerText = 'Coarse';
//     pop_up_body.innerText = 'Tentang Coarse';
//     screen_overlay.classList.add('screen-overlay-active');
// });

// medium.addEventListener('click', function(){
//     pop_up.classList.add('pop-up-active');
//     pop_up_title.innerText = 'Medium';
//     pop_up_body.innerText = 'Tentang Medium';
//     screen_overlay.classList.add('screen-overlay-active');
// });

// fine.addEventListener('click', function(){
//     pop_up.classList.add('pop-up-active');
//     pop_up_title.innerText = 'Fine';
//     pop_up_body.innerText = 'Tentang Fine';
//     screen_overlay.classList.add('screen-overlay-active');
// });

// screen_overlay.addEventListener('click', function(){
//     pop_up.classList.remove('pop-up-active');
//     screen_overlay.classList.remove('screen-overlay-active');
// });

// back_btn.addEventListener('click', function(){
//     pop_up.classList.remove('pop-up-active');
//     screen_overlay.classList.remove('screen-overlay-active');
// });
