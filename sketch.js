
var width = 1024;

var height = 768;
var diametrosAsteriou = 7;

////////////////////////////OBJECTS ΓΙΑ ΟΥΡΑΝΟΞΥΣΤΕΣ////////////////////////////

var ox1 = {
  x: 0,
  y: 321,
  platos: 158-0,
  ypsos: height-321
  }

var ox2 = {
  x: 158,
  y: 384,
  platos: 298-158,
  ypsos: height-384
  }

var ox3 = {
  x: 298,
  y: 288,
  platos: 499-298,
  ypsos: height-288
  }

var ox4 = {
  x: 499,
  y: 411,
  platos: 641-499,
  ypsos: height-411
  }

var ox5 = {
  x: 641,
  y: 246,
  platos: 727-641,
  ypsos: height-246
  }

var ox6 = {
  x: 727,
  y: 368,
  platos: 817-727,
  ypsos: height-368
  }

var ox7 = {
  x: 817,
  y: 321,
  platos: 958-817,
  ypsos: height-321
  }

var ox8 = {
  x: 958,
  y: 416,
  platos: width-958,
  ypsos: height-416
  }

/////////////////////////ΜΕΤΑΒΛΗΤΕΣ ΓΙΑ ΤΑ ΠΑΡΑΘΥΡΑ/////////////////////////////

//το μήκος της κάθε πλευράς των παραθύρων των ουρανοξυστών
var parathirow = 20;
//απροσδιόριστες μεταβλητές για τις τιμές x και y
var parathirox;
var parathiroy;

////////////////////////ΜΕΤΑΒΛΗΤΗ ΓΙΑ ΤΑ ΕΠΑΝΑΛΗΨΕΙΣ////////////////////////////

/** Θα χρησιμοποιήσουμε αυτή τη μεταβλητή για να μετρήσουμε πόσες φορές έχει
τρέξει το draw()**/
var repeats = 1;

////////////////////////////BHMA 1/////////////////////////////////////

/** οι βασικές ρυθμίσεις του προγράμματός μας, οι οποίες δεν χρειάζεται
να δηλωθούν κάποια δεύτερη φορά ή να επαναλαμβάνονται συνέχεια,
μπαίνουν στο function setup() που θα τρέξει μόνο μία φορά στην αρχή**/

function setup() {
  //we define the dimensions of the "canvas", the area where the program will run
  createCanvas(1024,768);
  //we define the background color in rgb values
  //sky color r: 25, g: 2, b: 63
  background(25,2,63);
  //We'll use noStroke(); to declare that we don't want any outlines around our shapes
  noStroke();
  }
//////////////////////////////////////////////////////////////////////

function draw() {

/////////////////////////////ΒΗΜΑ 7///////////////////////////////////


  if (repeats >= 200) {
    background(25,2,63);
    repeats = 1;
  }
///////////////////////////////////////////////////////////////////////


////////////////////////////BHMA 2/////////////////////////////////////


  //με το fill ορίζουμε το χρώμα των αστεριών σε τιμές r, g, b
  //κίτρινο αστεριών r: 242, g: 197, b: 61
  fill(242,197,61);


  //ellipse(x, y, οριζόντια διάμετρος, κάθετη διάμετρος)
  ellipse(random(0,width), random(0,height), diametrosAsteriou, diametrosAsteriou);
////////////////////////////////////////////////////////////////////////


////////////////////////////ΒΗΜΑ 3//////////////////////////////////////

  //σχεδιάζουμε το φεγγάρι - δεν χρειαζόμαστε μεταβλητές
  //κίτρινο φεγγαριού r: 242, g: 169, b: 34
  fill(242,169,34);
  ellipse(911,81,90,90);
////////////////////////////////////////////////////////////////////////


////////////////////////////ΒΗΜΑ 4//////////////////////////////////////

  //μωβ χρώμα r: 70, g: 69, b: 139
  fill(70,69,139);
  //rect(x, y, πλάτος, ύψος)
  rect(ox1.x,ox1.y,ox1.platos,ox1.ypsos);
  rect(ox2.x,ox2.y,ox2.platos,ox2.ypsos);
  rect(ox3.x,ox3.y,ox3.platos,ox3.ypsos);
  rect(ox4.x,ox4.y,ox4.platos,ox4.ypsos);
  rect(ox5.x,ox5.y,ox5.platos,ox5.ypsos);
  rect(ox6.x,ox6.y,ox6.platos,ox6.ypsos);
  rect(ox7.x,ox7.y,ox7.platos,ox7.ypsos);
  rect(ox8.x,ox8.y,ox8.platos,ox8.ypsos);
////////////////////////////////////////////////////////////////////////


////////////////////////////ΒΗΜΑ 5//////////////////////////////////////

  //χρώμα παραθύρων r: 242, g: 169, b: 34
  fill(242,169,34);

  //παράθυρα 1ου ουρανοξύστη
  //αναθέτουμε την τιμή στο parathirox
  parathirox = ox1.x+25;

  for (parathiroy = ox1.y+25; parathiroy <= height; parathiroy+=35) {
      rect(parathirox,parathiroy,parathirow,parathirow);
      rect(parathirox+40,parathiroy,parathirow,parathirow);
      //+40 είναι η απόσταση μεταξύ της 1ης και 2ης σειράς παραθύρων
      rect(parathirox+80,parathiroy,parathirow,parathirow);
      //+80 είναι η απόσταση μεταξύ της 1ης και 3ης σειράς παραθύρων
      }

  //παράθυρα 2ου ουρανοξύστη
  parathirox = ox2.x+23;
  for (parathiroy = ox2.y+25; parathiroy <= height; parathiroy+=35) {
      rect(parathirox,parathiroy,parathirow,parathirow);
      rect(parathirox+40,parathiroy,parathirow,parathirow);
      rect(parathirox+80,parathiroy,parathirow,parathirow);
      }

  //παράθυρα 3ου ουρανοξύστη
  parathirox = ox3.x+27;
  for (parathiroy = ox3.y+25; parathiroy <= height; parathiroy+=35) {
      rect(parathirox,parathiroy,parathirow,parathirow);
      rect(parathirox+42,parathiroy,parathirow,parathirow);
      rect(parathirox+84,parathiroy,parathirow,parathirow);
      rect(parathirox+126,parathiroy,parathirow,parathirow);
      }

  //παράθυρα 4ου ουρανοξύστη
  parathirox = ox4.x+25;
  for (parathiroy = ox4.y+25; parathiroy <= height; parathiroy+=35) {
      rect(parathirox,parathiroy,parathirow,parathirow);
      rect(parathirox+40,parathiroy,parathirow,parathirow);
      rect(parathirox+80,parathiroy,parathirow,parathirow);
      }

  //παράθυρα 5ου ουρανοξύστη
  parathirox = ox5.x+12;
  for (parathiroy = ox5.y+25; parathiroy <= height; parathiroy+=35) {
      rect(parathirox,parathiroy,parathirow,parathirow);
      rect(parathirox+40,parathiroy,parathirow,parathirow);
      }

  //παράθυρα 6ου ουρανοξύστη
  parathirox = ox6.x+15;
  for (parathiroy = ox6.y+25; parathiroy <= height; parathiroy+=35) {
      rect(parathirox,parathiroy,parathirow,parathirow);
      rect(parathirox+40,parathiroy,parathirow,parathirow);
      }

  //παράθυρα 7ου ουρανοξύστη
  parathirox = ox7.x+20;
  for (parathiroy = ox7.y+25; parathiroy <= height; parathiroy+=35) {
      rect(parathirox,parathiroy,parathirow,parathirow);
      rect(parathirox+40,parathiroy,parathirow,parathirow);
      rect(parathirox+80,parathiroy,parathirow,parathirow);
      }

  //παράθυρα 8ου ουρανοξύστη
  parathirox = ox8.x+6;
  for (parathiroy = ox8.y+25; parathiroy <= height; parathiroy+=35) {
      rect(parathirox,parathiroy,parathirow,parathirow);
      rect(parathirox+29,parathiroy,parathirow,parathirow);
      }
////////////////////////////////////////////////////////////////////////

////////////////////////////ΒΗΜΑ 6//////////////////////////////////////

  //πράσινο λόφου r: 0, g: 125, b: 87
  fill(0,125,87);

  ellipse(width/2,height,width+200,500);
/////////////////////////////////////////////////////////////////////////


////////////////////////////συνέχεια από ΒΗΜΑ 7//////////////////////////
  repeats += 1;
/////////////////////////////////////////////////////////////////////////

  }
