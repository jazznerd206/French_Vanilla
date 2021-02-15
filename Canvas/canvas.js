const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const PI = Math.PI

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

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const colors = [
    "#4cff4c",
    "#65ff65",
    "#7fff7f",
    "#98ff98",
    "#b2ffb2",
    "#22ff22",
    "#003600",
    "#009800",
    "#00d300",
    "#4cff4c",
    "#65ff65",
    "#7fff7f",
    "#98ff98",
    "#b2ffb2",
    "#22ff22",
    "#003600",
    "#009800",
    "#00d300"
]

function Trunk(props) {
    let { x, y, thickness, width, loss, direction, angle, color } = props;
    
    const probability = .9;
    const amplitude = .025;

    // draw
    context.beginPath();
    context.moveTo(x, y);
    
    x += Math.cos(angle) * width;
    y += -Math.sin(angle) * width;
    
    context.strokeStyle = color;
    context.lineWidth = thickness;
    context.lineDashOffset = [50,5];
    context.lineTo(x, y);
    context.stroke();
    // context.closePath()
    if (direction) {
        angle -= amplitude
    } else {
        angle += amplitude
    }
    
    if (Math.random() >= probability) {
        Trunk({
            x,
            y,
            thickness: thickness * .9,
            width: 1.1 * width,
            loss,
            direction: !direction,
            angle,
            color
        })
    }
    if (width > 1) {
        setTimeout(() => {
            Trunk({
                x,
                y,
                thickness: thickness * .9,
                width,
                loss,
                direction,
                angle,
                color
            })
        }, 50)
    }
}

let numTrunks = 5;
for (let i = 0; i < numTrunks; i++) {
    let start = (canvas.width / (numTrunks + 1) * i);
    Trunk({
        x: start,
        y: canvas.height + 10,
        thickness: 60,
        width: 20,
        loss: .5,
        direction: getRandom(0, 100),
        angle: getRandom(0, 40) * PI / 40,
        color: colors[i]
    })
}