const canvas = document.getElementById("jellyfishCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#675870b2";
ctx.lineWidth = 3;


//jellyfish dome//
function drawBell() {

    ctx.beginPath();

    ctx.arc(
        300, 250, 100, Math.PI, 0 );

    ctx.lineTo(375,270);
    ctx.lineTo(350,250);
    ctx.lineTo(324,270);
    ctx.lineTo(300,250);
    ctx.lineTo(275,270);
    ctx.lineTo(250,250);
    ctx.lineTo(225,270);
    ctx.lineTo(200,250);


    ctx.closePath();

    ctx.fillStyle = "rgba(175, 144, 228, 0.2)";
    ctx.fill();

    ctx.stroke();
}
//jellyfish danglies//
let time = 0;

function drawTentacle(x, length, direction) {

    let sway = Math.sin(time) * 30;

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
    drawTentacle(250, 450, 1);
    drawTentacle(300, 475, -1);
    drawTentacle(350, 450, 1);

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