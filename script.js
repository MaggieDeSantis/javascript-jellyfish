const canvas = document.getElementById("jellyfishCanvas");
const ctx = canvas.getContext("2d");

//jellyfish dome//

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

ctx.stroke();

//jellyfish danglies//

ctx.beginPath();

ctx.moveTo(250,255);

ctx.bezierCurveTo(
    220, 330,
    270, 380,
    250, 450
);

ctx.stroke();

ctx.beginPath();

ctx.moveTo(300, 260);

ctx.bezierCurveTo(
    275, 240,
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