class EnemigoMedio {
  constructor () {
    this.x= 600;
    this.cerca=false
  }

  dibujar () {
    this.x -=2;
    image(imagenes[5], this.x, 250);
  }

  colision () {
    let d = dist(this.x + 20, 250 + 20, juego.starmedio.mov, juego.starmedio.y);
    return d < 40;
  }
  reiniciar() {
    this.x =600;
  }
  Ganar() {
    if (!this.cerca) {
      this.cerca =true;
    }
  }
  escenaPerdiste() {
    image(imagenes[10], 0, 0);
  }
}
