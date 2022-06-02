let bst: BinarySearchTree<number>


function setup() {

  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER).noFill().frameRate(30);

  bst= new BinarySearchTree<number>()
  
  bst.add(4)
  bst.add(2)
  bst.add(1)
  bst.add(3)
  bst.add(6)
  bst.add(5)
  bst.add(7)
  bst.add(0.5)
  bst.add(1.5)
  bst.add(2.5)
  bst.add(3.5)
  bst.add(4.5)
  bst.add(5.5)
  bst.add(6.5)
  bst.add(7.5)
  bst.add(0.25)
  bst.add(0.75)
  bst.add(1.25)
  bst.add(1.75)
  bst.add(2.25)
  bst.add(2.75)
  bst.add(3.25)
  bst.add(3.75)
  bst.add(4.25)
  bst.add(4.75)
  bst.add(5.25)
  bst.add(5.75)
  bst.add(6.25)
  bst.add(6.75)
  bst.add(7.25)
  bst.add(7.75)


  console.log(bst)
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  
   // CLEAR BACKGROUND
  background(30,40,50);

  bst.drawTree()
}