class TreeNode {
    constructor(item) {
        this.item = item;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}
class BinarySearchTree {
    constructor() {
        this.head = null;
        this.size = 0;
        this.height = 0;
    }
    updateHeight() {
        this.height = this.updateTreeHeight(this.head);
    }
    updateTreeHeight(node) {
        if (!node)
            return 0;
        let height = max(this.updateTreeHeight(node.left), this.updateTreeHeight(node.right)) + 1;
        node.height = height;
        return height;
    }
    add(data) {
        this.head = this.addNode(this.head, data);
        this.updateHeight();
    }
    addNode(node, key) {
        if (!node)
            node = new TreeNode(key);
        else if (key < node.item) {
            node.left = this.addNode(node.left, key);
        }
        else {
            node.right = this.addNode(node.right, key);
        }
        if (node.left.height - node.right.height)
            return node;
    }
    remove(data) {
        this.head = this.removeNode(this.head, data);
        this.updateHeight();
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
    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;
        this.updateHeight();
        return x;
    }
    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;
        y.left = x;
        x.right = T2;
        this.updateHeight();
        return y;
    }
    leftRightRotate(node) {
        node.left = this.leftRotate(node.left);
        node = this.rightRotate(node);
        return node;
    }
    rightLeftRotate(node) {
        node.right = this.rightRotate(node.right);
        node = this.leftRotate(node);
        return node;
    }
    drawTree() {
        let radius = width / 31;
        let initialPos = createVector(width / 2, 2 * radius);
        this.drawTreeHelper(this.head, initialPos, radius, 0);
    }
    drawTreeHelper(node, pos, radius, height) {
        if (!node)
            return;
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
        text(node.item.toString() + "-" + node.height.toString(), pos.x, pos.y);
        this.drawTreeHelper(node.left, leftPos, radius, height + 1);
        this.drawTreeHelper(node.right, rightPos, radius, height + 1);
    }
}
let bst;
function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER).noFill().frameRate(30);
    bst = new BinarySearchTree();
    bst.add(10);
    bst.add(6);
    bst.add(3);
    bst.add(7);
    bst.add(1);
    bst.add(2);
    bst.add(14);
    bst.add(13);
    bst.add(11);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background(30, 40, 50);
    bst.drawTree();
}
//# sourceMappingURL=build.js.map