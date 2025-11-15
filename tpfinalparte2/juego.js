class Juego {

  constructor() {
    this.inicio();
    this.enemigoM.reiniciar();
    this.enemigoD.reiniciar();
    this.enemigoF.reiniciar();
    this.enemigoM.cerca = false;
    this.enemigoD.cerca = false;
    this.enemigoF.cerca = false;
    this.sonidoGanado = false;
    this.sonidoPerdido = false;
  }

  inicio () {
    this.escena= 0;
    this.tiempo= 0;
    this.carrilActual= 1;
    this.enemigoM = new EnemigoMedio();
    this.enemigoD = new EnemigoDelantero();
    this.enemigoF = new EnemigoFondo();
    this.starmedio = new CarrilMedio();
    this.starFondo = new CarrilFondo ();
    this.starAdelante= new CarrilDelantero ();
  }

  reiniciarJuego() {
    this.inicio();
    this.escena = 20;
  }

  dibujo() {
    if (this.escena === 1) {
      menu.dibujarCreditos();
      return;
    }
    if (this.escena===20) {
      background(0);
      if (frameCount % 60 === 0) {
        this.tiempo++;
      }
      image(imagenes[9], 0, 0);
      fill (255);
      text ("Tiempo: " + this.tiempo, width / 2, 20);
      this.enemigoM.dibujar();
      this.enemigoD.dibujar();
      this.enemigoF.dibujar();
      if (this.carrilActual === 1) {
        this.starmedio.dibujar();
        this.starmedio.disparo();
      } else if (this.carrilActual === 0) {
        this.starFondo.dibujar();
        this.starFondo.disparo();
      } else if (this.carrilActual === 2) {
        this.starAdelante.dibujar();
        this.starAdelante.disparo();
      }
      if (this.starmedio.disparando && this.enemigoM.colision()) {
        this.enemigoM.reiniciar();
        this.starmedio.disparando = false;
      }
      if (this.enemigoM.x <= 166) {
        this.enemigoM.Ganar();
      }
      if (this.enemigoM.cerca) {
        this.escena=40;
      }

      if (this.starFondo.disparando && this.enemigoF.colision()) {
        this.enemigoF.reiniciar();
        this.starFondo.disparando = false;
      }
      if (this.enemigoF.x <= 166) {
        this.enemigoF.Ganar();
      }
      if (this.enemigoF.cerca) {
        this.escena=40;
      }

      if (this.starAdelante.disparando && this.enemigoD.colision()) {
        this.enemigoD.reiniciar();
        this.starAdelante.disparando = false;
      }
      if (this.enemigoD.x <= 166) {
        this.enemigoD.Ganar();
      }
      if (this.enemigoD.cerca) {
        this.escena=40;
      }

      if (this.tiempo>30&& this.escena===20) {
        this.escena= 30;
      }
    }
    if (this.escena === 0) {
      menu.dibujar();
    } else if (this.escena === 30) {
      menu.dibujarGanaste();
      if (!this.sonidoGanado) {
        ganaste.play();
        this.sonidoGanado = true;
      }
    } else if (this.escena === 40) {
      menu.dibujarPerdiste();
      if (!this.sonidoPerdido) {
        perdiste.play();
        this.sonidoPerdido = true;
      }
    }
  }



  mouse() {
    if (this.carrilActual === 1) {
      this.starmedio.prepararDisparo();
    } else if (this.carrilActual === 0) {
      this.starFondo.prepararDisparo();
    } else if (this.carrilActual === 2) {
      this.starAdelante.prepararDisparo();
    }
    if (juego.escena === 0 || juego.escena === 1 || juego.escena === 30 || juego.escena === 40) {
      menu.mousePresionado();
      return;
    }
    if (!sonidoDisparo.isPlaying()) {
      sonidoDisparo.play();
    }
  }


  key() {
    if (keyCode === UP_ARROW && this.carrilActual === 1) {
      this.carrilActual = 0;
    } else if (keyCode === DOWN_ARROW && this.carrilActual === 0) {
      this.carrilActual = 1;
    } else if (keyCode === DOWN_ARROW && this.carrilActual === 1) {
      this.carrilActual = 2;
    }
    if (keyCode === UP_ARROW && this.carrilActual === 2) {
      this.carrilActual = 1;
    }
  }
}
