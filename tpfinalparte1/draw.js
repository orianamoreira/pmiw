function draw() {
background (255);
if (escena===0){
 image (img,5,10);
image (Boton,450,200);
image (Boton,0,200);
textSize(30);
fill(255);
text ("Inicio", 40, 270);
text ("Creditos", 470, 270);
decision (1,2)}
pantalla (1,dos,0);
pantalla (3,tres,1);
pantalla (4,cuatro,2);
pantalla (5,cinco,3);
pantalla (6,seis,4);
pantallaDeDecision (7, siete, 5, "La rescatan", "No la rescatan", 8, 9);
pantalla (8,ocho,6);
pantalla (9,nueve,7);
pantalla (10,diez,8);
pantallaDeDecision (11, once, 9, "Inicio", "Creditos", 1, 2);
pantalla (12,doce,10);
pantalla (13,trece,11);
pantalla (14,catorce,12);
pantalla (15,quince,13);
pantalla (16,dieciseis,14);
pantalla (17,diecisiete,15);
pantalla (18,dieciocho,16);
pantalla (19,diecinueve,17);
pantalla (20,veinte,18);
pantalla (21,veintiuno,19);
pantalla (22,veintidos,20);
pantalla(23,veintitres,21);
pantallaDeDecision (24,veinticuatro,22,"Rebelion","Seguir huyendo",25,26);
pantalla (25,veinticinco,23);
pantalla (26,veintiseis,24);
pantalla (27,veintisiete,25);
pantalla (28,veintiocho,26);
pantalla (29,veintinueve,27);
pantalla (30,treinta,28);
pantalla (31,treintiuno,29);
pantallaDeDecision (32,treintidos,30,"Salvar a Marco","Escapar ellas",35,33);
pantalla (33,treintitres,31);
pantallaDeDecision(34,treinticuatro,34,"Inicio","Creditos",1,2);
pantalla (35,treinticinco,32);
pantalla (36,treintiseis,33);
pantalla (37,treintisiete,35);
pantalla (38,treintiocho,36);
pantalla (39,treintinueve,37);
pantallaDeDecision(40,cuarenta,38,"Liberarlas","No liberarlas",41,27);
pantallaDeDecision(42,cuarentidos,40,"Inicio","Creditos",1,2);
pantalla (41,cuarentiuno,39);
pantalla (43,cuarentitres,41);
pantalla (44,cuarenticuatro,42);
pantalla (45,cuarenticinco,43);
pantalla (46,cuarentiseis,44);
pantallaDeDecision(47,cuarentisiete,45,"Inicio","Creditos",1,2);
if (escena===2){
  background (0);
  image (boton,240,320);
  textSize(30);
  text ("Alumnas: Daniela Ramirez Cancillieri\n                Oriana Moreira \n\nCreadora de la serie: Daron Nefcy", 50,80);
  text ("Inicio", 270, 385);
 if (mouseY>320&&mouseY<450&&mouseX>240&&mouseX<360&&mouseIsPressed){ 
efecto.play();
escena =1;}}}
