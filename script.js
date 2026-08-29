const canvas = document.getElementById("jellyfishCanvas");
const ctx = canvas.getContext("2d");

const particles = [];

for (let i = 0; i < 30; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.3 + 0.1
    });
}

function drawParticles() {

    ctx.save();

    for (let particle of particles) {

        particle.y -= particle.speed;

        if (particle.y < 0) {
            particle.y = canvas.height;
            particle.x = Math.random() * canvas.width;
        }

        ctx.beginPath();

        ctx.arc(
            particle.x, 
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(75, 111, 126, 0.31)";
        ctx.fill();
    }

    ctx.restore();
}

function drawLightRays() {

    ctx.save();

    let raySway = Math.sin(time * 0.3) * 60;

    ctx.fillStyle = "rgba(93, 139, 224, 0.01)";

    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(260, 0);
    ctx.lineTo(380 + raySway, 600);
    ctx.lineTo(180 + raySway, 600);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(450, 0);
    ctx.lineTo(510, 0);
    ctx.lineTo(600 + raySway, 600);
    ctx.lineTo(520 + raySway, 600);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgba(171, 192, 228, 0.01)";

    ctx.beginPath();
    ctx.moveTo(80, 0);
    ctx.lineTo(60, 0);
    ctx.lineTo(80 + raySway, 600);
    ctx.lineTo(80 + raySway, 600);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(350, 0);
    ctx.lineTo(410, 0);
    ctx.lineTo(400 + raySway, 600);
    ctx.lineTo(400 + raySway, 600);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

}

ctx.strokeStyle = "#50226d81";
ctx.lineWidth = 2;
ctx.lineJoin = "round";
ctx.lineCap = "round";

//jellyfish dome//
function drawBell() {

    pulse = Math.sin(time) * 1;

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

    ctx.fillStyle = "rgba(106, 89, 136, 0.9)";
    
    ctx.shadowColor = "rgba(209, 123, 185, 0.83)";
    ctx.shadowBlur = 45;

    ctx.fill();
    ctx.stroke();

    ctx.shadowColor= "transparent";
    ctx.shadowBlur = 0;

    ctx.stroke();
    ctx.restore();

}
//jellyfish danglies//
let time = 0;
let pulse = 0;
let floatY = 0;

let mouseX = 300;
let mouseY = 300;

let jellyX = 0;
let jellyY = 0;

let targetX = 300;
let targetY = 300;
let clickedTarget = false;

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
    
    let armSway = Math.sin(time + 10 * 5) * 9 * direction;

    ctx.beginPath();

    ctx.moveTo(x - 5, 260);

    ctx.bezierCurveTo(
        x - .07 + armSway, 300,
        x + 4 - armSway, 340,
        x + armSway, 370
    );

    ctx.bezierCurveTo(
        x + .05 + armSway, 335,
        x + 5 - armSway, 300,
        x + 5, 260
    );

    ctx.closePath();

    ctx.fillStyle = "rgba(145, 135, 163, 0.50";
    ctx.fill();

    ctx.stroke();

}

canvas.addEventListener("click", function(event){

    const rect = canvas.getBoundingClientRect();

    targetX = (event.clientX - rect.left) * (canvas.width / rect.width);
    targetY = (event.clientY - rect.top) * (canvas.height / rect.height);

    clickedTarget = true;
});

function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawLightRays(); 
    drawParticles();

    floatY = Math.sin(time * .09 ) * 15;

    if (!clickedTarget) {
        targetX = 300 + Math.sin(time * .5) * 180;
        targetY = 300 + Math.cos(time * .5) * 120;
    }
    
    jellyX += ((targetX - 300)  - jellyX) * 0.001;
    jellyY += ((targetY - 300)  - jellyY) * 0.001;

    ctx.save();
    ctx.translate(jellyX, floatY + jellyY);

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