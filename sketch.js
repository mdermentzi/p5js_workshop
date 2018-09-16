/**In this section of our code, we'll create the program's variables.**/
//How to create a variable: var variableName = variableValue;

//width is the total widht of our canvas
var width = 1024;
//height total height of our canvas
var height = 768;

/////////////////////////////STAR DIAMETER VARIABLE//////////////////////////////

  //We create a variable that will store the diameter of the stars.


//////////////////////////// SKYSCRAPER OBJECTS////////////////////////////

  /**
  The skysc1-skysc8 objects, which are about to obtain a rectangular shape, rect( );,
  have the following properties: x and y, width and height.

  You can find the values that you need at the coordinates which
  are marked on our reference image.

  The x and y values are located at the upper left corner of each skyscraper.
  For width, we subtract the value of point x of the current skyscraper
  from the value of point x of the next skyscraper.
  For height, we subtract from the total height of the canvas (height)
  the y value of the current skyscraper. **/



/////////////////////////WINDOW VARIABLES/////////////////////////////

  //the width of each of the skyscrapers' windows

  //undefined variables for each window's x and y values


////////////////////////REPEATS VARIABLE////////////////////////////

  /** We'll use this variable to count how many times draw() was executed **/

////////////////////////////////////////////////////////////////////////////


////////////////////////////STEP 1/////////////////////////////////////

/** The function setup () {} always runs first and once in our program.**/

function setup() {
  //we define the dimensions of the "canvas", the area where the program will run

  //we define the color of the background in RGB values
  //sky's color r: 25, g: 2, b: 63

  //We use noStroke(); to declare that we don't want any outlines around our shapes

  }
//////////////////////////////////////////////////////////////////////

function draw() {

/////////////////////////////STEP 7///////////////////////////////////

  /**We will use an if statement (selection structure).
  The code in the curly brackets will only be executed if the condition
  in the parentheses is valid, that is, only if draw(); has run 200 times
  and consequently the “repeats” variable is equal to 200.
  **/

///////////////////////////////////////////////////////////////////////


////////////////////////////STEP 2/////////////////////////////////////
  //Using fill(), select the color of the stars in r, g, b values

  //stars color r: 242, g: 197, b: 61

  //random(minValue, maxValue);

  //ellipse(x, y, horizontal diameter, vertical diameter)

////////////////////////////////////////////////////////////////////////


////////////////////////////STEP 3//////////////////////////////////////
  //drawing the moon - no variables needed
  //moon color r: 242, g: 169, b: 34

////////////////////////////////////////////////////////////////////////


////////////////////////////STEP 4//////////////////////////////////////

  //We create the skyscraper Objects and then we draw
  //draw their respective rectangular shapes using the properties
  //of the objects skysc1-8.

  //purple color r: 70, g: 69, b: 139

  //rect(x, y, width, height)

////////////////////////////////////////////////////////////////////////


////////////////////////////STEP 5//////////////////////////////////////

  //window color r: 242, g: 169, b: 34


  //1st skyscraper windows
  //we define the windX value

  /**
  for ( the 1st command indicates the initial value of the variable to
  be controlled by the repeat condition; the 2nd command is the condition
  whose validity is checked each time so that the program knows if it will
  execute the code in the curly brackets (or, simply put, the point until
  which the program will keep repeating the code in the curly brackets);
  the 3rd command is being executed at the end of each iteration and changes the control variable) {
  Inside these brackets, we’ll add the code that needs to be repeated.
  }
  **/


  //2nd skyscraper windows


  //3rd skyscraper windows


  //4th skyscraper windows


  //5th skyscraper windows


  //6th skyscraper windows


  //7th skyscraper windows


  //8th skyscraper windows


////////////////////////////////////////////////////////////////////////

////////////////////////////STEP 6//////////////////////////////////////

  //hill color r: 0, g: 125, b: 87

  //The hill ellipse

/////////////////////////////////////////////////////////////////////////


////////////////////////////STEP 7 CONTINUES HERE//////////////////////////

//Each time the code reaches this point, one unit should be added to the repeats variable


/////////////////////////////////////////////////////////////////////////

  }
