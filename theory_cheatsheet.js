/** We use variables to store data such as numbers, words, etc. under a symbolic name.
They are especially useful when a value is to be used several times in our program
so we do not need to write it over and over again. All you have to do to reuse this
data within your code is to just recall the name of the variable that you used to save it!
In addition, variables are useful to make quick changes to our code.  **/

//How to create a variable: var variableName = variableValue;

//width is the total widht of our canvas
var width = 1024;
//height total height of our canvas
var height = 768;

/////////////////////////////STAR DIAMETER VARIABLE//////////////////////////////

//We create a variable that will store the diameter of the stars.
var starDiameter = 7;

//////////////////////////// SKYSCRAPER OBJECTS////////////////////////////

/**We saw that with variables we store a value with a symbolic name.
Objects are similar to variables, but they can store multiple values.
Here, we want to store more than one values as properties of our variables in skysc1-skysc8
(1-8 because we’re going to have 8 skyscrapers).
Example: An object, for example, a cell phone, has some properties/attributes such as manufacturer,
model, color, etc. These properties on a specific phone have specific values
like Apple, iPhone 5s, Black. All mobile phones have the same properties
but their properties do not have the same values. **/

/**ATTENTION: The 0,0 coordinates of x and y axes in p5.js are signify the
upper left corner of the coordinate system. The positive values of x
are located to the right of the canvas and the positive y values are the ones
you get once you move down towards the lower part of the canvas.**/

// When it comes to the property x of the object, we declare the value
//of the distance of our point from the beginning of the x-axis.
// As for the property y of the object, we declare the value of the distance
//of our point from the beginning of the y-axis.
// The skysc1-skysc8 objects, which are about to obtain a rectangular shape, rect( );,
//have the following properties: x and y, width and height.

/** You can find the values that you need at the coordinates which
are marked on our reference image.

The x and y values are located at the upper left corner of each skyscraper.
For width, we subtract the value of point x of the current skyscraper
from the value of point x of the next skyscraper.
For height, we subtract from the total height of the canvas (height)
the y value of the current skyscraper.
**/

var skysc1 = {
  x: 0,
  y: 321,
  skyscWidth: 158-0,
  skyscH: height-321
  }

var skysc2 = {
  x: 158,
  y: 384,
  skyscWidth: 298-158,
  skyscH: height-384
  }

var skysc3 = {
  x: 298,
  y: 288,
  skyscWidth: 499-298,
  skyscH: height-288
  }

var skysc4 = {
  x: 499,
  y: 411,
  skyscWidth: 641-499,
  skyscH: height-411
  }

var skysc5 = {
  x: 641,
  y: 246,
  skyscWidth: 727-641,
  skyscH: height-246
  }

var skysc6 = {
  x: 727,
  y: 368,
  skyscWidth: 817-727,
  skyscH: height-368
  }

var skysc7 = {
  x: 817,
  y: 321,
  skyscWidth: 958-817,
  skyscH: height-321
  }

var skysc8 = {
  x: 958,
  y: 416,
  skyscWidth: width-958,
  skyscH: height-416
  }

/////////////////////////WINDOW VARIABLES/////////////////////////////

//the width of each of the skyscrapers' windows
var windWidth = 20;
//undefined variables for each window's x and y values
var windX;
var windY;

////////////////////////REPEATS VARIABLE////////////////////////////

/** We'll use this variable to count how many times draw() was executed **/
var repeats = 1;

////////////////////////////STEP 1/////////////////////////////////////

/** The function setup () {} always runs first and once in our program.
Inside this part of the code, we will add some basic settings of our program,
which do not need to be declared a second time or repeated afterward**/

function setup() {
  //we define the dimensions of the "canvas", the area where the program will run
  createCanvas(1024,768);
  //we define the color of the background in RGB values
  //sky's color r: 25, g: 2, b: 63
  background(25,2,63);
  //We use noStroke(); to declare that we don't want any outlines around our shapes
  noStroke();
  }
//////////////////////////////////////////////////////////////////////

function draw() {

/////////////////////////////STEP 7///////////////////////////////////

/** At this stage, the sky is filled with stars at some point and it turns completely yellow,
so we want to erase the previous stars once we get a reasonable amount of them and create
new ones from the beginning, creating a nice effect. To do this, we have to find a way
to calculate how many times the function draw (); has been executed because
this is what determines the number of the stars as well.

We will go to the top of the code again and set a new variable named repeats
starting at 1 and increasing by one every time draw( ); is being executed.
When draw () reaches 200 repetitions (that is when 200 stars are created,)
we will erase the previous ones and return the value of the repeats to 1
to create the next round of 200 stars.
**/

  /**We will use an if statement (selection structure).
  The code in the curly brackets will only be executed if the condition
  in the parentheses is valid, that is, only if draw(); has run 200 times
  and consequently the “repeats” variable is equal to 200.
  **/

  if (repeats >= 200) {
    //re-drawing the background erases the old stars
    background(25,2,63);
    //by giving repeats the "1" value, our program starts
    //counting from the beginning, until it reaches "200" again.
    repeats = 1;
  }
///////////////////////////////////////////////////////////////////////


////////////////////////////STEP 2/////////////////////////////////////

  /**
  - Let’s draw! Where should we start? First, we need to think about what should
    be at the background and what in the foreground of our drawing.
    For example, does the hill appear in front of or behind the skyscrapers?

  - Find the right order from the background to the foreground:
    hill, stars, windows, skyscrapers, moon, sky

  - Before we begin to draw each shape, we will go up to the beginning of
    our code and define the variables of the objects we are going to design.
    So, let’s go up to define the variable that we need for the stars
    and then come back down here.

  - All of our drawings will be created in the function draw () {} part
    that runs continuously over and over again, as opposed to the function setup ()
    that runs only once in the beginning.
  **/

  /** Once we have created the variable var starDiameter = 7; for the diameter
  of the stars, we design the stars that fill the sky. The stars have a circular
  shape and for this reason, we will use the ellipse command
  ellipse(x, y, horizontal diameter, vertical diameter); .
  The stars must appear everywhere on the canvas in a random position.
  This can be achieved with the help of random(minValue, maxValue); .
  By using random( ) we’re telling the program that we want it to randomly choose
  a value within the framework we define. We also want our canvas to fill up
  with many stars, and to do this we just take advantage of the draw( ) function
  that, as we said, is repeated over and over again.
  **/

  //Using fill(), select the color of the stars in r, g, b values
  //stars color r: 242, g: 197, b: 61
  fill(242,197,61);

  /**We start drawing the shape and declare that the location of each star
  on the x-axis and the y-axis will be randomly selected by the program taking
  values from 0 to the maximum value of the width and height of our canvas respectively.
  **/
  //random(minValue, maxValue);

  //ellipse(x, y, horizontal diameter, vertical diameter)
  ellipse(random(0,width), random(0,height), starDiameter, starDiameter);
////////////////////////////////////////////////////////////////////////


////////////////////////////STEP 3//////////////////////////////////////

  //drawing the moon - no variables needed
  //moon color r: 242, g: 169, b: 34
  fill(242,169,34);
  ellipse(911,81,90,90);
////////////////////////////////////////////////////////////////////////


////////////////////////////STEP 4//////////////////////////////////////

  //We create the skyscraper Objects and then we draw
  //draw their respective rectangular shapes using the properties
  //of the objects skysc1-8.

  //purple color r: 70, g: 69, b: 139
  fill(70,69,139);
  //rect(x, y, width, height)
  rect(skysc1.x,skysc1.y,skysc1.skyscWidth,skysc1.skyscH);
  rect(skysc2.x,skysc2.y,skysc2.skyscWidth,skysc2.skyscH);
  rect(skysc3.x,skysc3.y,skysc3.skyscWidth,skysc3.skyscH);
  rect(skysc4.x,skysc4.y,skysc4.skyscWidth,skysc4.skyscH);
  rect(skysc5.x,skysc5.y,skysc5.skyscWidth,skysc5.skyscH);
  rect(skysc6.x,skysc6.y,skysc6.skyscWidth,skysc6.skyscH);
  rect(skysc7.x,skysc7.y,skysc7.skyscWidth,skysc7.skyscH);
  rect(skysc8.x,skysc8.y,skysc8.skyscWidth,skysc8.skyscH);
////////////////////////////////////////////////////////////////////////


////////////////////////////STEP 5//////////////////////////////////////

  /**We define the variables we will need for the windows and then
   we use an iteration structure to draw the windows much faster.
  **/

  //window color r: 242, g: 169, b: 34
  fill(242,169,34);

  /** Before we begin designing the windows, we must initially declare
  the x point from which the windows for each skyscraper must start to be formed.
  This value is the result of the sum of each skyscraper’s point x value
  plus the distance between the edge of the wall of the skyscraper and the first row of windows.
  We can find these values in our reference picture. Similarly, we have to declare
  the value of the variable of the y point from which the window’s drawing should begin,
  but we’ll happen later, inside the condition of the "for" iteration structure.
  **/

  //1st skyscraper windows
  //we define the windX value
  windX = skysc1.x+25;

  /**Each building’s first horizontal row of windows should be repeated across
  the skyscraper to give the illusion of multiple floors.
  To achieve this, we will use the “for” iteration structure.
  **/

  /**for ( the 1st command indicates the initial value of the variable to
  be controlled by the repeat condition; the 2nd command is the condition
  whose validity is checked each time so that the program knows if it will
  execute the code in the curly brackets (or, simply put, the point until
  which the program will keep repeating the code in the curly brackets);
  the 3rd command is being executed at the end of each iteration and changes the control variable) {
  Inside these brackets, we’ll add the code that needs to be repeated.
  }
  **/

  for (windY = skysc1.y+25; windY <= height; windY+=35) {
      rect(windX,windY,windWidth,windWidth);
      rect(windX+40,windY,windWidth,windWidth);
      //+40 is the distance between the 1st and the 2nd rows of windows
      rect(windX+80,windY,windWidth,windWidth);
      //+80 is the distance between the 1st and the 3nd rows of windows
      }

  //2nd skyscraper windows
  windX = skysc2.x+23;
  for (windY = skysc2.y+25; windY <= height; windY+=35) {
      rect(windX,windY,windWidth,windWidth);
      rect(windX+40,windY,windWidth,windWidth);
      rect(windX+80,windY,windWidth,windWidth);
      }

  //3rd skyscraper windows
  windX = skysc3.x+27;
  for (windY = skysc3.y+25; windY <= height; windY+=35) {
      rect(windX,windY,windWidth,windWidth);
      rect(windX+42,windY,windWidth,windWidth);
      rect(windX+84,windY,windWidth,windWidth);
      rect(windX+126,windY,windWidth,windWidth);
      }

  //4th skyscraper windows
  windX = skysc4.x+25;
  for (windY = skysc4.y+25; windY <= height; windY+=35) {
      rect(windX,windY,windWidth,windWidth);
      rect(windX+40,windY,windWidth,windWidth);
      rect(windX+80,windY,windWidth,windWidth);
      }

  //5th skyscraper windows
  windX = skysc5.x+12;
  for (windY = skysc5.y+25; windY <= height; windY+=35) {
      rect(windX,windY,windWidth,windWidth);
      rect(windX+40,windY,windWidth,windWidth);
      }

  //6th skyscraper windows
  windX = skysc6.x+15;
  for (windY = skysc6.y+25; windY <= height; windY+=35) {
      rect(windX,windY,windWidth,windWidth);
      rect(windX+40,windY,windWidth,windWidth);
      }

  //7th skyscraper windows
  windX = skysc7.x+20;
  for (windY = skysc7.y+25; windY <= height; windY+=35) {
      rect(windX,windY,windWidth,windWidth);
      rect(windX+40,windY,windWidth,windWidth);
      rect(windX+80,windY,windWidth,windWidth);
      }

  //8th skyscraper windows
  windX = skysc8.x+6;
  for (windY = skysc8.y+25; windY <= height; windY+=35) {
      rect(windX,windY,windWidth,windWidth);
      rect(windX+29,windY,windWidth,windWidth);
      }
////////////////////////////////////////////////////////////////////////

////////////////////////////STEP 6//////////////////////////////////////

  /**We will draw the hill using the ellipse () command to
   create a large oval shape. **/
  //hill color r: 0, g: 125, b: 87
  fill(0,125,87);

  /** When it comes to the x value of this oval shape (AKA the center of our oval shape),
  we’re going to figure it out by dividing the total width of our canvas by 2.
  Thus, the center of our circle lies exactly in the middle of the horizontal axis (1024/2).

  To give the impression of a hill, we only want to see the top half part of our oval shape.
  To do this, we’ll declare “y” as the y value of our canvas (the height of the canvas). **/

  ellipse(width/2,height,width+200,500);
/////////////////////////////////////////////////////////////////////////


////////////////////////////STEP 7 CONTINUES HERE//////////////////////////

//Each time the code reaches this point, one unit should be added to the repeats variable
  repeats += 1;
/////////////////////////////////////////////////////////////////////////

  }
