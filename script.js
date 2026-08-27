const canvas = document.getElementById("jellyfishCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#675870b2";
ctx.lineWidth = 3;


//jellyfish dome//
function drawBell() {

    pulse = Math.sin(time) * 10;

    ctx.beginPath();

    ctx.arc(
        300, 250, 100 + pulse, Math.PI, 0 );

    ctx.lineTo(375 + pulse, 270);
    ctx.lineTo(350 + pulse, 250);
    ctx.lineTo(324 + pulse, 270);
    ctx.lineTo(300, 250);
    ctx.lineTo(275 - pulse, 270);
    ctx.lineTo(250 - pulse, 250);
    ctx.lineTo(225 - pulse, 270);
    ctx.lineTo(200 - pulse, 250);


    ctx.closePath();

    ctx.fillStyle = "rgba(175, 144, 228, 0.2)";
    ctx.fill();

    ctx.stroke();
}
//jellyfish danglies//
let time = 0;
let pulse = 0;

function drawTentacle(x, length, direction) {

    let sway = Math.sin(time + x * 0.01) * 30;

    ctx.beginPath();

    ctx.moveTo(x, 265);

    ctx.bezierCurveTo(
        x - 20 + sway, 330,
        x + 20 - sway, 380,
        x + sway, length
    );
    
    ctx.stroke();
}

function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBell();
    drawTentacle(250 - pulse / 2, 450, 1);
    drawTentacle(300, 475, -1);
    drawTentacle(350 + pulse /2, 450, 1);

    time += 0.005;

    requestAnimationFrame(animate);
}

animate();

ctx.beginPath();

ctx.moveTo(300, 260);

ctx.bezierCurveTo(
    285, 270,
    320, 390,
    300, 490
);

ctx.stroke();

ctx.beginPath();

ctx.moveTo(350,265); 

ctx.bezierCurveTo(
    370,330,
    330,380,
    350,450
);

ctx.stroke();