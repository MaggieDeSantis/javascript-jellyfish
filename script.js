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
let floatY = 0;

function drawTentacle(x, length, direction) {

    let sway = Math.sin(time + x * 0.01) * 30;

    ctx.beginPath();

    ctx.moveTo(x, 265);

    ctx.bezierCurveTo(
        x - 20 + sway, 330,
        x + 20 - sway, 300,
        x + sway, length
    );
    
    ctx.stroke();
}

function drawArm(x) {
    
    let armSway = Math.sin(time + x * 0.02) * 10;

    ctx.beginPath();

    ctx.moveTo(x, 270);

    ctx.bezierCurveTo(
        x - 15 + armSway, 300,
        x + 15 - armSway, 330,
        x, 370
    );

    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.lineWidth = 3;
}

function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    floatY = Math.sin(time * 0.5) * 20;
    
    ctx.save();
    ctx.translate(0, floatY);

    drawBell();
    drawArm(275);
    drawArm(325)
    drawTentacle(250 - pulse / 2, 450, 1);
    drawTentacle(300, 475, -1);
    drawTentacle(350 + pulse /2, 450, 1);

    ctx.restore();

    time += 0.005;

    requestAnimationFrame(animate);
}

animate();

ctx.beginPath();

ctx.moveTo(300, 260);

ctx.bezierCurveTo(
    285, 990,
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