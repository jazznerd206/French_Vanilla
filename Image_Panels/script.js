console.log('loaded')
const img_panels = document.getElementsByClassName('img-panels')[0];
const panels = document.getElementsByClassName('panels');

console.log(img_panels, panels)

const pxl8 = () => {
    for (let i = 1; i < 900; i++) {
        img_panels.innerHTML += "<div class='panels'></div>";
        const duration = Math.random() * 5;
        panels[i].style.animationDuration = 2 + duration +'s';
        panels[i].style.animationDelay = duration +'s';
    };
}
pxl8();

let images = [
    './assets/IMG_0603.png', './assets/IMG_0805.png', './assets/IMG_0101.png'
]
const section = document.querySelector('section');
const img = document.getElementById('chief')
let count = 0;
setTimeout(() => {
    if (count > images.length) count = 0;
    img.setAttribute('src', images[count])
    pxl8()
    count++;
}, 14000); // add class active after 14s