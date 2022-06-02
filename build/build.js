var TreeNode = (function () {
    function TreeNode(item) {
        this.item = item;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinarySearchTree = (function () {
    function BinarySearchTree() {
        this.head = null;
        this.size = 0;
    }
    BinarySearchTree.prototype.add = function (item) {
        var curr = this.head;
        var parent = null;
        var isLeft;
        while (curr != null) {
            parent = curr;
            if (item < curr.item) {
                curr = curr.left;
                isLeft = true;
            }
            else {
                curr = curr.right;
                isLeft = false;
            }
        }
        var newNode = new TreeNode(item);
        if (parent)
            if (isLeft)
                parent.left = newNode;
            else
                parent.right = newNode;
        else
            this.head = newNode;
        this.size++;
    };
    BinarySearchTree.prototype.drawTree = function () {
        var radius = 50;
        var initialPos = createVector(width / 2, 2 * radius);
        this.drawTreeHelper(this.head, initialPos, radius, 0);
    };
    BinarySearchTree.prototype.drawTreeHelper = function (node, pos, radius, height) {
        if (!node) {
            return;
        }
        fill(100, 100, 200);
        var leftPos = pos.copy().add(-radius * 9 / Math.pow((height + 1), 1.8), radius * 2);
        var rightPos = pos.copy().add(radius * 9 / Math.pow((height + 1), 1.8), radius * 2);
        strokeWeight(5);
        stroke(90, 80, 100);
        if (node.left)
            line(pos.x, pos.y, leftPos.x, leftPos.y);
        if (node.right)
            line(pos.x, pos.y, rightPos.x, rightPos.y);
        circle(pos.x, pos.y, radius);
        fill(20);
        stroke(20);
        strokeWeight(1);
        textSize(radius / 3);
        textAlign('center', 'center');
        text(node.item.toString(), pos.x, pos.y);
        this.drawTreeHelper(node.left, leftPos, radius, height + 1);
        this.drawTreeHelper(node.right, rightPos, radius, height + 1);
    };
    return BinarySearchTree;
}());
var bst;
function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER).noFill().frameRate(30);
    bst = new BinarySearchTree();
    bst.add(4);
    bst.add(2);
    bst.add(1);
    bst.add(3);
    bst.add(6);
    bst.add(5);
    bst.add(7);
    bst.add(0.5);
    bst.add(1.5);
    bst.add(2.5);
    bst.add(3.5);
    bst.add(4.5);
    bst.add(5.5);
    bst.add(6.5);
    bst.add(7.5);
    bst.add(0.25);
    bst.add(0.75);
    bst.add(1.25);
    bst.add(1.75);
    bst.add(2.25);
    bst.add(2.75);
    bst.add(3.25);
    bst.add(3.75);
    bst.add(4.25);
    bst.add(4.75);
    bst.add(5.25);
    bst.add(5.75);
    bst.add(6.25);
    bst.add(6.75);
    bst.add(7.25);
    bst.add(7.75);
    console.log(bst);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background(30, 40, 50);
    bst.drawTree();
}
//# sourceMappingURL=build.js.map