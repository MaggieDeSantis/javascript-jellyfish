const canvas = document.getElementById("jellyfishCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#6e5b7ad3";
ctx.lineWidth = 2;
ctx.lineJoin = "round";
ctx.lineCap = "round";

//jellyfish dome//
function drawBell() {

    pulse = Math.sin(time) * .5;

    ctx.beginPath();

    ctx.save();
    ctx.translate(300, 0);
    ctx.scale(0.9, 1);
    ctx.translate(-300, 0);

    ctx.arc(
        300, 250, 100 + pulse, Math.PI, 0 );

    ctx.quadraticCurveTo(400 + pulse, 270, 350 + pulse, 255);
    ctx.quadraticCurveTo(325 + pulse, 275, 300, 255);
    ctx.quadraticCurveTo(275 - pulse, 275, 250 - pulse, 255);
    ctx.quadraticCurveTo(200 - pulse, 270, 200 - pulse, 250);

    ctx.fillStyle = "rgba(119, 99, 155, 0.9)";
    ctx.fill();

    ctx.stroke();
    ctx.restore();
}
//jellyfish danglies//
let time = 0;
let pulse = 0;
let floatY = 0;

function drawTentacle(x, length, direction) {

    let sway = Math.sin(time + x * 0.005) * 15 * direction;

    ctx.beginPath();

    ctx.moveTo(x - 2, 252);

    ctx.bezierCurveTo(
        x - 10 + sway, 330,
        x + 5 - sway, 300,
        x + sway, length - 81
    );
    
    ctx.bezierCurveTo(
        x + 1 + sway, 340,
        x - 25 - sway, 330,
        x + 1, 252
    );

    ctx.closePath();
        
    ctx.fillStyle =  "rgba(180, 140, 255, 0.18)";
    ctx.fill();
    ctx.stroke();

    ctx.closePath();

    ctx.beginPath();

    ctx.moveTo(x + sway, length - 79);

    ctx.bezierCurveTo(
        x - 5 + sway, length - 35,
        x + 18 - sway, length - 40,
        x + sway, length - 1
    );

    ctx.stroke();
}

function drawArm(x, direction) {
    
    let armSway = Math.sin(time + 1 * 5) * 9 * direction;

    ctx.beginPath();

    ctx.moveTo(x - 5, 260);

    ctx.bezierCurveTo(
        x - .07 + armSway, 300,
        x + 4 - armSway, 340,
        x + armSway, 370
    );

    ctx.bezierCurveTo(
        x + .05 + armSway, 335,
        x + 1 - armSway, 300,
        x + 5, 260
    );

    ctx.closePath();

    ctx.fillStyle = "rgba(180, 140, 255, 0.25)";
    ctx.fill();

    ctx.stroke();

}

function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    floatY = Math.sin(time * 0.5) * 10;
    
    ctx.save();
    ctx.translate(0, floatY);

    drawArm(275, .9);
    drawArm(325, -.9)
    drawTentacle(250 - pulse / 5, 450, .05);
    drawTentacle(300, 475, 1);
    drawTentacle(350 + pulse / 1, 450, .05);
    drawBell();
    
    ctx.restore();

    time += 0.005;

    requestAnimationFrame(animate);
}

animate();