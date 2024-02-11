var canvas = document.getElementById("matrix"),
  ctx = canvas.getContext("2d");

canvas.width = window.screen.width;
canvas.height = window.screen.height;
canvas.style.overflow = "hidden";

var fontSize = 10,
  columns = window.screen.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = window.screen.height;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, .05)";
  ctx.fillRect(0, 0, window.screen.width, window.screen.height);
  for (var i = 0; i < drops.length; i++) {
    let text = String.fromCharCode(Math.round(Math.random() * 256));
    ctx.fillStyle = "#00aa00";
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > window.screen.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}

setInterval(draw, 70);
