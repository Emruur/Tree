
class TreeNode<TreeType>{
    pos: p5.Vector
    item: TreeType
    left: TreeNode<TreeType>
    right: TreeNode<TreeType>

    constructor(item: TreeType){
        this.item= item
        this.left= null
        this.right= null
    }
}

class BinarySearchTree<TreeType>{
    private head: TreeNode<TreeType>
    size:number

    constructor(){
        this.head= null
        this.size= 0
    }

    add(item: TreeType){
        let curr= this.head
        let parent: TreeNode<TreeType>= null
        let isLeft: boolean

        //Locate the place to insert the node
        while(curr != null){
            parent= curr
            if(item<curr.item){
                curr= curr.left
                isLeft= true
            } 
            else{
                curr= curr.right
                isLeft= false
            }
        }  

        //curr points to the valid leaf
        //create a new node
        let newNode= new TreeNode<TreeType>(item)

        if(parent)
            if(isLeft)
                parent.left= newNode
            else
                parent.right= newNode
        else
            this.head= newNode

        this.size++
    }

    remove(data: TreeType)
    {
        // root is re-initialized with
        // root of a modified tree.
        this.head = this.removeNode(this.head, data);
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




    drawTree(){
        let radius= width/31
        let initialPos: p5.Vector= createVector(width/2, 2*radius)
        this.drawTreeHelper(this.head, initialPos, radius,0)
    }

    private drawTreeHelper(node: TreeNode<TreeType>, pos: p5.Vector, radius: number, height: number){
        if(!node){
            return
        }
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
        text(node.item.toString() ,pos.x , pos.y)

        //draw child trees
        this.drawTreeHelper(node.left,leftPos,radius,height+1)
        this.drawTreeHelper(node.right,rightPos,radius, height+1)
    }
}


