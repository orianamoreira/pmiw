function dialogue (N){
  fill(255);
textSize (15);
 text (dialogos [N], 100, 300);}
 
 function keyPressed (){
   if (keyCode === RIGHT_ARROW) {
    if (escena === 1) {
      escena = 3; 
    } else if (escena === 3) {
      escena = 4;}
     else if (escena === 4) {
      escena = 5; 
    }else if (escena === 5) {
      escena = 6; 
    }else if (escena === 6) {
      escena = 7;
    }else if (escena === 9) {
      escena = 10;}
      else if (escena === 10) {
      escena = 11;}
     else if (escena === 8) {
      escena = 12;}
    else if (escena === 12) {
      escena = 13;}
  else if (escena === 13) {
      escena = 14;}
    else if (escena === 14) {
      escena = 15;}  
     else if (escena === 15) {
      escena = 16;} 
      else if (escena === 16) {
      escena = 17;}
       else if (escena === 17) {
      escena = 18;}
       else if (escena === 18) {
      escena = 19;}
       else if (escena === 19) {
      escena = 20;}
      else if (escena === 20) {
      escena = 21;}
      else if (escena === 21) {
      escena = 22;}
      else if (escena === 22) {
      escena = 23;}
      else if (escena === 23) {
      escena = 24;}
      else if (escena === 25) {
      escena = 28;}
      else if (escena === 26) {
      escena = 27;}
      else if (escena === 27) {
      escena = 42;}
      else if (escena === 28) {
      escena = 29;}
      else if (escena === 29) {
      escena = 30;}
      else if (escena === 30) {
      escena = 31;}
      else if (escena === 31) {
      escena = 32;}
      else if (escena === 33) {
      escena = 34;}
      else if (escena === 35) {
      escena = 36;}
      else if (escena === 36) {
      escena = 37;}
      else if (escena === 37) {
      escena = 38;}
      else if (escena === 38) {
      escena = 39;}
      else if (escena === 39) {
      escena = 40;}
      else if (escena === 41) {
      escena = 43;}
      else if (escena === 43) {
      escena = 44;}
      else if (escena === 44) {
      escena = 45;}
      else if (escena === 45) {
      escena = 46;}
      else if (escena === 46) {
      escena = 47;}}}

function pantalla (e, i, d){
if (escena===e){
   img=i
image (img,5,20);
fill (192, 49,245,128);
rect (0, height - 220, width - 36,100);
fill(255);
text ("Presione la tecla derecha para continuar", 330, 350);
dialogue (d);}}

function pantallaDeDecision (E, I, D, A, B, P, p){
if (escena===E){
 img=I
image (img,5,20);
fill (192, 49,245,128);
rect (0, height - 220, width - 36,100);
dialogue (D);
image (boton,450,140);
image (boton,0,140);
textSize(15);
fill(255);
text (A, 27, 200);
text (B, 467, 200);
decision (P,p);}}

function decision (a,b){
   if (mouseY>170&&mouseX<140&&mouseIsPressed){ 
efecto.play();
escena =a;    
}
  if ( mouseY>170&&mouseX>450&&mouseIsPressed){
    efecto.play();
  escena = b;}}
