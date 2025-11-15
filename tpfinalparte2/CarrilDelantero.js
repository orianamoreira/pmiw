class CarrilDelantero {
  constructor() {
    this.x = 0;
    this.mov = 180;
    this.y =285;
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
      image(imagenes[8], this.mov, 285);
    }

    if (this.mov > 525) {
      this.mov = 180;
      this.disparando = false;
    }
  }

  dibujar() {
    image(imagenes[1], this.x, 300);
    this.x = 50 * noise(0.005 * frameCount);
  }
}
