let pixie = 0;
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener(
  'resize',
  () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // console.log(canvas.width, canvas.height)
  },
  false
);

class Stem {
    constructor(position, height, width) {
        this.position = position;
        this.height = height;
        this.width = width;
    }
}

const numStems = 10;
let stemArray = [];
const createStems = () => {
    stemArray = [];
    for (let i = 0; i < canvas.width; ++i) {
        let marker = canvas.width / numStems;
        if (i % marker.toFixed(0) === 0) {
            const h = 100 * Math.random();
            const addStem = new Stem(i, h, 50);
            stemArray.push(addStem)
        }
    }
}
createStems();




const draw = () => {
    context.globalCompositeOperation = 'source-over';
    context.fillStyle = 'rgb(249,215,28)';
    context.fillRect(0, 0, canvas.width, canvas.height / 2);
    for (let i = 0; i < stemArray.length; ++i) {
        console.log(stemArray[i])
    }
}

const init = () => {
    window.requestAnimationFrame(init);
    draw();
  }
  
init();