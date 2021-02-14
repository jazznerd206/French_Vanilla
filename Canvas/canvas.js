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

class Trunk {
    constructor(start, height, width, angle) {
        this.start = start;
        this.height = height;
        this.width = width;
        this.angle = angle
    }
}

class Stem {
    constructor(x, y, length, width, angle) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.width = width;
        this.angle = angle;
    }
}


const numTrunks = 1;
let trunkArray = [];
let randNum = Math.round(Math.random() * 10);


const createTrunks = () => {
    trunkArray = [];
    for (let i = 1; i < numTrunks + 1; i++) {
        let start = (canvas.width / (numTrunks + 1)) * i;
        let h = 150 + Math.round(Math.random() * 50);
        let w = 50;
        w = randNum < 5 ? w + randNum : w - randNum;
        let a = 10 + Math.round(Math.random()*50);
        const addTrunk = new Trunk(start, h, w, a);
        // console.log(addTrunk)
        trunkArray.push(addTrunk);
    }
}
createTrunks();

let stemArray = [];
const createStems = arr => {
    stemArray = [];
    let int = randNum
    arr.forEach(trunk => {
        for (let i = 0; i < 100; ++i) {
            let x, y, length, width, angle;
            x = trunk.start;
            y = (canvas.height / 2 - trunk.height);
            length = trunk.height * .5;
            width = trunk.width / 2;
            angle = -60;
            let newStem = new Stem(x, y, length, width, angle * 1280)
            stemArray.push(newStem)
        }
    })
}
createStems(trunkArray);

function drawTrunks() {
    for (let i = 0; i < trunkArray.length; ++i) {
        console.log(trunkArray[i]);
        let trunk = trunkArray[i];
        context.beginPath();
        context.moveTo(trunk.start, 0 - canvas.height / 2);
        context.lineTo(trunk.start, canvas.height / 2 - trunk.height);
        context.strokeStyle = 'red';
        context.lineWidth = '10';
        context.stroke();
    }
}

function drawStems(arr) {
    for (let i = 0; i < 100; ++i) {
        let int = randNum
        let stem = arr[i];
        context.beginPath();
        context.moveTo(stem.x, stem.y);
        context.lineTo(stem.x + stem.length, stem.y + stem.length / i / 10);
        context.strokeStyle = 'green';
        context.lineWidth = '3';
        context.stroke();
    }
}



const draw = () => {
    context.globalCompositeOperation = 'source-over';
    context.fillStyle = 'rgb(249,215,28)';
    context.fillRect(0, 0, canvas.width, canvas.height / 2);
    drawTrunks();
    // createStems(trunkArray)
    console.log(stemArray)
    drawStems(stemArray)
}

const init = () => {
    // window.requestAnimationFrame(init);
    draw();
  }
  
init();

