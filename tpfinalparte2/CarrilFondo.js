class CarrilFondo {
  constructor() {
    this.x = 0;
    this.mov = 115;
    this.y= 215;
    this.disparando = false;
  }

  prepararDisparo() {
    if (!this.disparando) {
      this.disparando = true;
    }
  }

  disparo() {
    if (this.disparando) {
      this.mov += 8;
      image(imagenes[7], this.mov, this.y);
    }

    if (this.mov > 525) {
      this.mov = 115;
      this.disparando = false;
    }
  }
  dibujar() {
    image(imagenes[2], this.x, 210);
    this.x = 50 * noise(0.005 * frameCount);
  }
}
