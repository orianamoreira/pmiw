class EnemigoDelantero {
  constructor () {
    this.x= 600;
    this.cerca=false
  }

  dibujar () {
    this.x --;
    image(imagenes[3], this.x, 285);
  }

  colision () {
    let d = dist(this.x + 20, 285 + 20, juego.starAdelante.mov, juego.starAdelante.y);
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
