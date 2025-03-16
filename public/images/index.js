const slides = document.querySelectorAll('.slide'); // Récupère toutes les images
let currentIndex = 0; 
// Fonction pour afficher une image et cacher les autres
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0"; 
    });
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Boucle infinie sur les images
    showSlide(currentIndex);
}
showSlide(currentIndex);
setInterval(nextSlide, 3000);
 

const semipage = document.querySelector('.semi-page');
const click = document.querySelector('#click');
semipage.style.display = "none";
click.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de naviguer
    semipage.style.display = "block"; // Affiche la semi-page
});

 const semipage1 = document.querySelector('.semi-page1');
 const click1 = document.querySelector('#click1');
 semipage1.style.display='none';
 click1.addEventListener('click',function (event) {
    event.preventDefault();
    semipage1.style.display ="block";
 });
 const semipage2 = document.querySelector('.semi-page2');
 const click3 = document.querySelector('#click3');
 semipage2.style.display='none';
 click3.addEventListener('click',function (event) {
    event.preventDefault();
    semipage2.style.display ="block";
 });

 const semipage3 = document.querySelector('.semi-page3');
 const click4 = document.querySelector('#click4');
 semipage3.style.display='none';
 click4.addEventListener('click',function (event) {
    event.preventDefault();
    semipage3.style.display ="block";
 });
 function color() {
    const icon1 = document.querySelector('.icon1');
    const colors = ["rgb(15, 238, 220)", "rgb(111, 241, 46)", "rgb(243, 51, 220)","rgb(106, 122, 247)","pink"];
    const changerColor = colors[Math.floor(Math.random() * colors.length)];
    icon1.style.background = changerColor;
}

color();
setInterval(color, 1000);

function color1() {
    const icon2 = document.querySelector('.icon2');
    const colors1 = ["rgb(15, 238, 220)", "rgb(111, 241, 46)", "rgb(243, 51, 220)","rgb(106, 122, 247)","pink"];
    const changerColor1 = colors1[Math.floor(Math.random() * colors1.length)];
    icon2.style.background = changerColor1;
}

color1();

setInterval(color1, 1000);





function color2() {
    const icon3 = document.querySelector('.icon3');
    const colors2 = ["rgb(15, 238, 220)", "rgb(111, 241, 46)", "rgb(243, 51, 220)","rgb(106, 122, 247)","pink"];
    const changerColor2 = colors2[Math.floor(Math.random() * colors2.length)];
    icon3.style.background = changerColor2;
}

color2();

setInterval(color2, 1000);


function color3() {
    const icon4 = document.querySelector('.icon4');
    const colors3 = ["rgb(15, 238, 220)", "rgb(111, 241, 46)", "rgb(243, 51, 220)","rgb(106, 122, 247)","pink"];
    const changerColor3 = colors3[Math.floor(Math.random() * colors3.length)];
    icon4.style.background = changerColor3;
}

color3();

setInterval(color3, 1000);



function color4() {
    const icon5 = document.querySelector('.icon5');
    const colors4 = ["rgb(15, 238, 220)", "rgb(111, 241, 46)", "rgb(243, 51, 220)","rgb(106, 122, 247)","pink"];
    const changerColor4 = colors4[Math.floor(Math.random() * colors4.length)];
    icon5.style.background = changerColor4;
}

color4();

setInterval(color4, 1000);

function color5() {
    const icon6 = document.querySelector('.icon6');
    const colors5 = ["rgb(15, 238, 220)", "rgb(111, 241, 46)", "rgb(243, 51, 220)","rgb(106, 122, 247)","pink"];
    const changerColor5 = colors5[Math.floor(Math.random() * colors5.length)];
    icon6.style.background = changerColor5;
}

color5();

setInterval(color5, 1000);



function color6() {
    const icon7 = document.querySelector('.icon7');
    const colors6 = ["rgb(15, 238, 220)", "rgb(111, 241, 46)", "rgb(243, 51, 220)","rgb(106, 122, 247)","pink"];
    const changerColor6 = colors6[Math.floor(Math.random() * colors6.length)];
    icon7.style.background = changerColor6;
}

color6();

setInterval(color6, 1000);



function color7() {
    const icon8 = document.querySelector('.icon8');
    const colors7= ["rgb(15, 238, 220)", "rgb(111, 241, 46)", "rgb(243, 51, 220)","rgb(106, 122, 247)","pink"];
    const changerColor7 = colors7[Math.floor(Math.random() * colors7.length)];
    icon8.style.background = changerColor7;
}

color7();

setInterval(color7, 1000);



