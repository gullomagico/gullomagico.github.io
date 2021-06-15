var c = document.getElementById("particle");
var ctx = c.getContext("2d", { alpha: false });
let req, npalline, range;
let palline = [];
let linee = [];
let cH,
  cW = 0;
const n = 0.5; // number of ball every 100 px^2
const r = 1; // range of edges, n% of canvas diagonal
const max_range = 300;
const max_ball = 80;

//La funzione init inizializza il canvas
function init() {
  if (window.innerWidth > screen.width) ctx.canvas.width = screen.width;
  else ctx.canvas.width = window.innerWidth;
  if (window.innerHeight > screen.height) ctx.canvas.height = screen.height;
  else ctx.canvas.height = window.innerHeight;

  cH = ctx.canvas.height;
  cW = ctx.canvas.width;

  //Define numbers of points, max 80
  npalline = Math.floor((cW * cH) / 10000) * n;
  if (npalline > max_ball) npalline = max_ball;

  //Define range of lines, max 200px
  range = (Math.sqrt(Math.pow(cW, 2) + Math.pow(cH, 2)) / 100) * r;
  if (range < max_range) range = max_range;

  //Create array of points
  for (let i = 0; i < npalline; i++)
    palline.push(
      new Ball(
        getRandomInt(10, cW - 10),
        getRandomInt(10, cH - 10),
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      )
    );

  //Create array of lines
  for (let i = 0; i < palline.length; i++)
    for (let j = i + 1; j < palline.length; j++)
      if (i != j) linee.push(new Line(palline[i], palline[j]));
  animate();
}

// Utilities function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function reset() {
  window.cancelAnimationFrame(req);
  palline = [];
  linee = [];
  init();
}
window.onresize = reset;

//Ball and Line classes
let Ball = class {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }
  update() {
    // Manage impacts with margins
    if (this.x + this.vx >= cW || this.x < 0) {
      this.vx = -this.vx;
    }
    if (this.y >= cH || this.y < 0) {
      this.vy = -this.vy;
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
};
let Line = class {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.len = Math.sqrt(
      Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2)
    );
  }
  draw() {
    const ax = Math.floor(this.a.x);
    const ay = Math.floor(this.a.y);
    const bx = Math.floor(this.b.x);
    const by = Math.floor(this.b.y);
    this.len = Math.abs(bx - ax) + Math.abs(by - ay);
    ctx.lineWidth = 2;
    if (this.len < range) {
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0,255,0," + (1.0 - this.len / range) + ")";
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.stroke();
    }
  }
};

//Animate the canvas
function animate() {
  //Clear the canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cW, cH);

  //Disegno l'array di palline
  linee.forEach(function (linea) {
    linea.draw();
  });
  palline.forEach(function (palla) {
    palla.update();
  });

  req = requestAnimationFrame(animate);
}

init();
