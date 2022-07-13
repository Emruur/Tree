let bst: BinarySearchTree<number>


function setup() {

  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER).noFill().frameRate(30);

  bst= new BinarySearchTree<number>()
  bst.add(10)
  bst.add(6)
  bst.add(3)
  bst.add(7)
  bst.add(1)
  bst.add(2)
  bst.add(14)
  bst.add(13)
  bst.add(11)

  console.log("-----------Initializtion complete----------")
  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  
   // CLEAR BACKGROUND
  background(30,40,50);

  bst.drawTree()
}