class TreeNode {
    constructor(item) {
        this.item = item;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(item) {
        let curr = this.head;
        let parent = null;
        let isLeft;
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
        let newNode = new TreeNode(item);
        if (parent)
            if (isLeft)
                parent.left = newNode;
            else
                parent.right = newNode;
        else
            this.head = newNode;
        this.size++;
    }
    remove(data) {
        this.head = this.removeNode(this.head, data);
    }
    removeNode(node, key) {
        if (node === null)
            return null;
        else if (key < node.item) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.item) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            var aux = this.findMinNode(node.right);
            node.item = aux.item;
            node.right = this.removeNode(node.right, aux.item);
            return node;
        }
    }
    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    drawTree() {
        let radius = width / 31;
        let initialPos = createVector(width / 2, 2 * radius);
        this.drawTreeHelper(this.head, initialPos, radius, 0);
    }
    drawTreeHelper(node, pos, radius, height) {
        if (!node) {
            return;
        }
        fill(100, 100, 200);
        let leftPos = pos.copy().add(-radius * 39 / (height + 2) ** 2.25, radius * 3);
        let rightPos = pos.copy().add(radius * 39 / (height + 2) ** 2.25, radius * 3);
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
    }
}
let bst;
function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER).noFill().frameRate(30);
    bst = new BinarySearchTree();
    bst.add('h');
    bst.add('a');
    bst.add('b');
    bst.add('z');
    bst.add('x');
    bst.add('c');
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