let uno, dos, tres, cuatro,cinco, seis, siete, ocho, nueve, diez, once, doce;
let boton, musiquita, efecto;
let dialogos= [];
let img;
let escena = 0;
function preload (){
musiquita= loadSound ('Assets/weedkiller.mp3');
efecto=loadSound ('Assets/efecto.mp3');
uno = loadImage("Assets/1.png");
dos = loadImage("Assets/2.png");
tres = loadImage("Assets/3.png");
cuatro = loadImage("Assets/4.jpeg");
cinco = loadImage("Assets/5.png");
seis = loadImage("Assets/6.png");
siete = loadImage("Assets/7.png");
ocho=loadImage("Assets/8.jpeg");
nueve=loadImage("Assets/9.png");
diez =loadImage("Assets/10.png");
once= loadImage("Assets/11.jpeg");
doce= loadImage("Assets/12.jpeg");
trece= loadImage ("Assets/13.jpeg");
catorce= loadImage ("Assets/14.jpeg");
quince= loadImage ("Assets/15.jpeg");
dieciseis= loadImage ("Assets/16.jpeg");
diecisiete= loadImage ("Assets/17.jpeg");
dieciocho= loadImage ("Assets/18.jpeg");
diecinueve= loadImage ("Assets/19.jpeg");
veinte= loadImage ("Assets/20.jpeg");
veintiuno= loadImage ("Assets/21.jpeg");
veintidos= loadImage ("Assets/22.jpeg");
veintitres= loadImage ("Assets/23.jpeg");
veinticuatro= loadImage ("Assets/24.jpeg");
veinticinco= loadImage ("Assets/25.jpeg");
veintiseis= loadImage ("Assets/26.jpeg");
veintisiete= loadImage ("Assets/27.jpeg");
veintiocho= loadImage ("Assets/28.jpeg");
veintinueve= loadImage ("Assets/29.jpeg");
treinta= loadImage ("Assets/30.jpeg");
treintiuno= loadImage ("Assets/31.jpeg");
treintidos= loadImage ("Assets/32.jpeg");
treintitres= loadImage ("Assets/33.jpeg");
treinticuatro= loadImage ("Assets/34.png");
treinticinco= loadImage ("Assets/35.png");
treintiseis= loadImage ("Assets/36.png");
treintisiete= loadImage ("Assets/37.jpeg");
treintiocho= loadImage ("Assets/38.jpeg");
treintinueve= loadImage ("Assets/39.jpeg");
cuarenta= loadImage ("Assets/40.png");
cuarentiuno= loadImage ("Assets/41.jpeg");
cuarentidos= loadImage ("Assets/42.png");
cuarentitres= loadImage ("Assets/43.jpeg");
cuarenticuatro= loadImage ("Assets/44.jpeg");
cuarenticinco= loadImage ("Assets/45.jpeg");
cuarentiseis= loadImage ("Assets/46.jpeg");
cuarentisiete= loadImage ("Assets/47.jpg");
boton = loadImage("Assets/corazon.png");
Boton = loadImage("Assets/icorazon.png");
}

function setup() {
createCanvas (640,480);
musiquita.play();
 musiquita.setLoop(true);
img=uno;
dialogos.push ("Hola Ponyhead! ¿Quieres ir al Rebonubes a festejar tu cumpleaños?");
dialogos.push ("No creo que pueda B-fly");
dialogos.push ("Estoy en el Reformatorio Santa Olga");
dialogos.push ("Ay no!");
dialogos.push ("¿Que onda Star? ¿Pony va a ir?");
dialogos.push ("Si queremos que vaya, tenemos que ir a rescatarla ¿Que hacemos?");
dialogos.push ("Vayamos con mis tijeras magicas");
dialogos.push ("Ahh, Santa Olga!!");
dialogos.push ("No vamos, me da miedo!");
dialogos.push ("(Ponyhead queda atrapada por siempre)");
dialogos.push ("(Aparecen fuera del reformatorio)");
dialogos.push ("(Star se asusta al ver a las princesas frente al reformatorio)");
dialogos.push ("(Se disfrazan para poder camuflarse entre las otras princesas)");
dialogos.push ("(Se unen a las demas pricesas para entrar y rescatar a Ponyhead)");
dialogos.push ("La primera en llegar a las habitaciones se queda con la mejor!(grita Marco)");
dialogos.push ("(Gracias a las princesas logran distraer a los guardias\ne ir hacia la habitacion de Ponyhead)");
dialogos.push ("(encuentran la habitacion e intentan entrar)");//16
dialogos.push ("(logran entrar) Que tengas un feliz feliz cumpleaños\n(Empieza a cantar Star)!");
dialogos.push ("(Star deja de cantar y agarra a Ponyhead para sacarla del reformatorio)");
dialogos.push ("(Buscan la forma de escapar)");//19
dialogos.push ("(Llegan a un salon y se asustan al ver lo que hay dentro)");
dialogos.push ("(hay princesas tenindo clases de como tomar te)");
dialogos.push ("¿Creamos una distraccion para escapar?(le pregunta Star a Marco)");
dialogos.push ("(Empiezan a gritar cosas para que las princesas se revelen)");//23
dialogos.push ("¡Corre!");
dialogos.push ("(Los guardias los descubren)");
dialogos.push ("(Escapan y Marco ve un escondite)");
dialogos.push ("Vamos Star lanzate yo voy detras");//27
dialogos.push ("¡Ah me agarran del vestido Ahhh!");
dialogos.push ("¡No Marcoooo!");
dialogos.push ("¿Salvamos a Marco?");
dialogos.push (" Hay demasiados guardias no podremos nosotras solas");//31
dialogos.push (" ¡Vayamos por Marco!");
dialogos.push ("Ahi está!");
dialogos.push ("(Marco es reformado y no vuelve a ser el mismo)");
dialogos.push ("(Entra a la sala y lo libera)"); //35
dialogos.push ("Gracias Star");
dialogos.push ("(Escapando encuntran un pasillo donde hay princesas encerradas)");
dialogos.push ("Por nuestra culpa estan aqui, ¿Que hacemos?");
dialogos.push ("Vamos a liberarlas señoritas!!"); //39
dialogos.push ("(Quedan atrapados por siempre)");
dialogos.push ("(Todos salen a pelear contra los guardias)");
dialogos.push ("(Se pelean)");
dialogos.push ("B-fly, ¿Puedo quedarme?");
dialogos.push ("Por supuesto Pony, divertite!");
dialogos.push ("FIN");
}
