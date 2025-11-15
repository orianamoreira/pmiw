class Boton {
  constructor(x, y, w, h, texto) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
  }

  dibujar() {
    fill(255);
    stroke(0);
    strokeWeight(3);


    if (this.estaSobre(mouseX, mouseY)) {
      fill(200);
    } else {
      fill(255);
    }

    rect(this.x, this.y, this.w, this.h, 10);

    fill(0);
    noStroke();
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.w/2, this.y + this.h/2);
  }

  estaSobre(mx, my) {
    return mx > this.x && mx < this.x + this.w &&
      my > this.y && my < this.y + this.h;
  }
}
