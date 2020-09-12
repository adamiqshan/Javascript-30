var canvas = document.getElementById("draw");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.lineJoin = "round";

var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;

function draw(e) {
    if (!isDrawing) return
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
    hue++

    if (hue > 360) {
        hue = 0;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
})