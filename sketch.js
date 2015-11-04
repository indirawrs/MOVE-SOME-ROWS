var numberOfRows; //determine the number of rows we want
var numberOfColumns; //determine the number of columns we want

var xStep; //determine the size of the gap between two points on the x axis
var yStep; //determine the size of the gap between two points on the y axis
var cards = []; // arryay of cards that do stuff
var positions = []; //an array of positions where we will store each of our Vectors

//we tryna change width n nheight so it prints in tinier place
var newW = 450;  //speech bibbidily boop
var newH = 400;

function preload() {
  createCanvas(500,800);
  card1 = loadImage('assets/gC1.png');
  card2 = loadImage('assets/gC2.png');
  card3 = loadImage('assets/gC3.png');
/*  card4 = loadImage('assets/gC4.png');
  card5 = loadImage('assets/gC5.png');
  card6 = loadImage('assets/bC1.png');
  card7 = loadImage('assets/bC2.png'); 
  card8 = loadImage('assets/bC3.png'); 
  card9 = loadImage('assets/bC4.png'); 
  card10 = loadImage('assets/bC5.png');
  */
  for (var i = 0; i<10; i++){ // we cycle thru all the things..
    cards[i] =(card1, card2, card3);//, card4, card5, card6, card7, card8, card9, card10);
  } 
  
}

function setup(){
  numberOfColumns = 3; //we want 5 columns
  numberOfRows = 2; //we want 4 rows
  
  xStep = width/numberOfColumns; //to make sure they are evenly spaced, we divide the width and height by numberOfColumns
  yStep = height/numberOfRows; //and numberOfRows respectively
  
  for(var x = 30; x < width; x += xStep){ //HERE is where u fit em into speech babble :^)
  
    for(var y = 20; y < height; y += yStep){ //go through all the rows (y = 0, y = yStep * 1, y  = yStep * 2, etc.)
    
      var p = createVector(x, y); //we create a vector at this location
      
      positions.push(p); // and then we put the vector into the array
      
    }
    //at the end of the inner for loop, we go back to the first loop, and we increment x
    //now our column is going to be x = xStep*1, and we populate all the rows with the inner for loop
    //and again, and again until x > width
  }
}

function draw(){
  println(cards);

  for(var i = 0; i < positions.length; i++){ //go through all our positions
    image(card1, positions[i].x, positions[i].y); //put a circle at each of them
  }
}