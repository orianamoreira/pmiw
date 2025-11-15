class EnemigoFondo {
  constructor () {
    this.x= 600;
    this.cerca=false
  }

  dibujar () {
    this.x --;
    image(imagenes[4], this.x, 210);
  }

  colision () {
    let d = dist(this.x + 20, 210 + 20, juego.starFondo.mov, juego.starFondo.y);
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
