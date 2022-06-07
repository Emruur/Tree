let bst: BinarySearchTree<string>


function setup() {

  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER).noFill().frameRate(30);

  bst= new BinarySearchTree<string>()
  
  bst.add('h');
  bst.add('a');
  bst.add('b');
  bst.add('z');
  bst.add('x');
  bst.add('c');
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  
   // CLEAR BACKGROUND
  background(30,40,50);

  bst.drawTree()
}