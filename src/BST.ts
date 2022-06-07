
class TreeNode<TreeType>{
    item: TreeType
    left: TreeNode<TreeType>
    right: TreeNode<TreeType>
    height:number

    constructor(item: TreeType){
        this.item= item
        this.left= null
        this.right= null
        this.height= 1
    }
}

class BinarySearchTree<TreeType>{
    private head: TreeNode<TreeType>
    size:number
    height: number

    constructor(){
        this.head= null
        this.size= 0
        this.height= 0
    }

    updateHeight(){
        this.height= this.updateTreeHeight(this.head)
    }

    private updateTreeHeight(node: TreeNode<TreeType>): number
    {
        if(!node)
            return 0

        let height:number= max(this.updateTreeHeight(node.left), this.updateTreeHeight(node.right)) + 1
        node.height= height
        return height
    }

    add(data: TreeType)
    {
        this.head= this.addNode(this.head, data)
        this.updateHeight()
    }

    private addNode(node: TreeNode<TreeType>, key: TreeType): TreeNode<TreeType>
    {
        
        
        if(!node)
            node=  new TreeNode(key)
        
        else if(key < node.item)
        {
            node.left= this.addNode(node.left, key)
            
        }
        else{
            node.right= this.addNode(node.right, key)
            
        }

        //fix unbalances
        if(node.left.height - node.right.height)

        return node

    }

    remove(data: TreeType)
    {
        this.head = this.removeNode(this.head, data)
        this.updateHeight()
    }
 

    // Method to remove node with a
    // given data
    // it recur over the tree to find the
    // data and removes it
    private removeNode(node: TreeNode<TreeType>, key: TreeType): TreeNode<TreeType>
    {
            
        // if the root is null then tree is
        // empty
        if(node === null)
            return null;
    
        // if data to be delete is less than
        // roots data then move to left subtree
        else if(key < node.item)
        {
            node.left = this.removeNode(node.left, key);
            return node;
        }
    
        // if data to be delete is greater than
        // roots data then move to right subtree
        else if(key > node.item)
        {
            node.right = this.removeNode(node.right, key);
            return node;
        }
    
        // if data is similar to the root's data
        // then delete this node
        else
        {
            // deleting node with no children
            if(node.left === null && node.right === null)
            {
                node = null;
                return node;
            }
    
            // deleting node with one children
            if(node.left === null)
            {
                node = node.right;
                return node;
            }
            
            else if(node.right === null)
            {
                node = node.left;
                return node;
            }
    
            // Deleting node with two children
            // minimum node of the right subtree
            // is stored in aux
            var aux:TreeNode<TreeType> = this.findMinNode(node.right);
            node.item = aux.item;
    
            node.right = this.removeNode(node.right, aux.item);
            return node;
        }
    
    }

    // finds the minimum node in tree
    // searching starts from given node
    private findMinNode(node: TreeNode<TreeType>): TreeNode<TreeType>
    {
        // if left of a node is null
        // then it must be minimum node
        if(node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

      //right rotate
    rightRotate(y: TreeNode<TreeType>)
    {
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;
        this.updateHeight()
        return x;
    }
  
    //left rotate
    leftRotate(x: TreeNode<TreeType>)
    {
        let y = x.right;
        let T2 = y.left;
        y.left = x;
        x.right = T2;
        this.updateHeight()
        return y;
    }

    leftRightRotate(node: TreeNode<TreeType>)
    {
        node.left= this.leftRotate(node.left)
        node= this.rightRotate(node)
        return node
    }
    rightLeftRotate(node: TreeNode<TreeType>)
    {
        node.right= this.rightRotate(node.right)
        node= this.leftRotate(node)
        return node
    }


    drawTree()
    {
        let radius= width/31
        let initialPos: p5.Vector= createVector(width/2, 2*radius)
        this.drawTreeHelper(this.head, initialPos, radius,0)
    }

    private drawTreeHelper(node: TreeNode<TreeType>, pos: p5.Vector, radius: number, height: number)
    {
        if(!node)
            return
        
        fill(100,100,200)
        
        let leftPos= pos.copy().add(-radius*39/(height+2)**2.25, radius*3)
        let rightPos= pos.copy().add(radius*39/(height+2)**2.25, radius*3)

        //draw lines connecting nodes
        strokeWeight(5)
        stroke(90,80,100)
        if(node.left)
            line(pos.x, pos.y, leftPos.x, leftPos.y)
        if(node.right)
            line(pos.x, pos.y, rightPos.x, rightPos.y)

        //draw node
        circle(pos.x, pos.y, radius)

        //draw item
        fill(20)
        stroke(20)
        strokeWeight(1)
        textSize(radius/3)
        textAlign('center','center')
        text(node.item.toString() + "-" +node.height.toString(),pos.x , pos.y)

        //draw child trees
        this.drawTreeHelper(node.left,leftPos,radius,height+1)
        this.drawTreeHelper(node.right,rightPos,radius, height+1)
    }
}


