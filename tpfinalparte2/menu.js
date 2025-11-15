class Menu {
  constructor() {
    this.botonJugar = new Boton(0, 0, 200, 50, "JUGAR");
    this.botonCreditos = new Boton(0, 0, 200, 50, "CRÉDITOS");
    this.botonReiniciar = new Boton(0, 0, 200, 50, "REINICIAR");
    this.botonVolver = new Boton(0, 0, 200, 50, "VOLVER");
  }


  dibujar() {


    image(imagenes[12], 0, 0, width, height);

    fill(0);
    textAlign(CENTER);

    textSize(40);
    text("Bienvenidos", width/2, 80);

    textSize(20);
    text("Objetivo: evita que los enemigos te alcancen.", width/2, 150);
    text("Flechas ARRIBA/ABAJO: cambias de carril.", width/2, 190);
    text("Clic del mouse: disparas.", width/2, 230);

    this.botonJugar.x = width/2 - 100;
    this.botonJugar.y = 300;

    this.botonCreditos.x = width/2 - 100;
    this.botonCreditos.y = 370;

    this.botonJugar.dibujar();
    this.botonCreditos.dibujar();
  }


  dibujarCreditos() {


    image(imagenes[13], 0, 0, width, height);

    fill(0);
    textAlign(CENTER);

    textSize(40);
    text("CRÉDITOS", width/2, 80);

    textSize(20);
    text("Juego creado por :", width/2, 150);
    text("Oriana Moreira y Daniela Ramirez Cancillieri", width/2, 190);
    text("creadora de la serie Mary Wolfman", width/2, 230);

    this.botonVolver.x = width/2 - 100;
    this.botonVolver.y = 280;

    this.botonVolver.dibujar();
  }


  dibujarPerdiste() {


    image(imagenes[10], 0, 0, width, height);

    fill(255);
    textAlign(CENTER);

    textSize(40);
    text("NO Quedaste atrapado en santa O", width/2, 100);

    this.botonReiniciar.x = width/2 - 100;
    this.botonReiniciar.y = 280;

    this.botonReiniciar.dibujar();
  }
  dibujarGanaste() {


    image(imagenes[11], 0, 0, width, height);

    fill(0);
    textAlign(CENTER);

    textSize(40);
    text("SI Pudiste volver a casa", width/2, 100);

    this.botonVolver.x = width/2 - 100;
    this.botonVolver.y = 280;

    this.botonVolver.dibujar();
  }

  mousePresionado() {

    if (juego.escena === 0) {

      if (this.botonJugar.estaSobre(mouseX, mouseY)) {

        juego.escena = 20;
        if (!musiquita.isPlaying()) {
          musiquita.loop();
        }
        return;
      }

      if (this.botonCreditos.estaSobre(mouseX, mouseY)) {
        juego.escena = 1;  
        return;
      }
    }


    if (juego.escena === 1) {
      if (this.botonVolver.estaSobre(mouseX, mouseY)) {
        juego.escena = 0; 
        return;
      }
    }


    if (juego.escena === 30) {
      if (this.botonVolver.estaSobre(mouseX, mouseY)) {
        juego. reiniciarJuego();
        juego.escena = 0;
        return;
      }
    }


    if (juego.escena === 40) {
      if (this.botonReiniciar.estaSobre(mouseX, mouseY)) {
        juego. reiniciarJuego();
        juego.escena = 0;
        return;
      }
    }
  }
}
