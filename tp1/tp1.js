
//https://youtu.be/cabNuYtPKws
let imagen0;
let c1, c2, c3, c4;
let tamCuad = 40;
let tamCirculo = 20;
let resultado = false;


function preload() {

  imagen0 = loadImage("assets/imagen0.jpg");
}

function setup() {
  createCanvas(800, 400);
  c1 = color(0);
  c2 = color(255);
  c3 = color(0);
  c4 = color(255);
}

function draw() {
  background(200);
  image(imagen0, 0, 0, 400, 400);
  cuadradosYcirculos(400, tamCuad);
}


function cuadradosYcirculos(ubicacion, tamCuadrado) {

  for (; ubicacion <800; ubicacion += 80) {
    for (let y = 0; y <800; y += 80) {
      // cuadrado blanco
      push();
      fill(c2);
      rect(ubicacion, y, tamCuadrado*tamCuad, tamCuadrado*tamCuad);
      rect(ubicacion + tamCuadrado, y + tamCuadrado, tamCuadrado, tamCuadrado);
      pop();
      // cuadrados negros
      push();
      fill(c1);
      rect(ubicacion, y, tamCuadrado, tamCuadrado);
      rect(ubicacion + tamCuadrado, y + tamCuadrado, tamCuadrado, tamCuadrado);
      pop();

      // círculos blancos
      push();
      fill(c4);
      ellipse(ubicacion + tamCirculo, y + 3 + tamCirculo, tamCirculo, tamCirculo);
      ellipse(ubicacion + 60, y + 60, tamCirculo, tamCirculo);
      pop();

      // círculos negros
      push();
      fill(c3);
      ellipse(ubicacion + tamCirculo, y - tamCirculo, tamCirculo, tamCirculo);
      ellipse(ubicacion + 60, y+tamCirculo, tamCirculo, tamCirculo);
      pop();


      if (camcolor(true)) {
        c1 = color(random(255), random(255), random(255));
        c2 = color(random(255), random(255), random(255));
        c3 = color(random(255), random(255), random(255));
        c4 = color(random(255), random(255), random(255));
      }
    }
  }
}


function camcolor(paramResultado) {
  if (mouseIsPressed) {
    paramResultado = true;
  } else {
    paramResultado = false;
  }
  return paramResultado;
}



function mouseMoved() {

  if (mouseX > pmouseX) {
    tamCirculo = constrain(tamCirculo + 1, 10, 60);
  }


  if (mouseX < pmouseX) {
    tamCuad = constrain(tamCuad - 1, 10, 50);
  }
}



function keyPressed() {
  if ((camcolor(resultado) === false) && (key === 'r' || key === 'R')) {
    c1 = color(0);
    c2 = color(255);
    c3 = color(0);
    c4 = color(255);
  }

  if (key === 'r' || key === 'R') {
    tamCuad = 40;
    tamCirculo = 20;
  }
}
