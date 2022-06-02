
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

    drawTree(){
        let radius= 50
        let initialPos: p5.Vector= createVector(width/2, 2*radius)
        this.drawTreeHelper(this.head, initialPos, radius,0)
    }

    private drawTreeHelper(node: TreeNode<TreeType>, pos: p5.Vector, radius: number, height: number){
        if(!node){
            return
        }
        fill(100,100,200)
        
        let leftPos= pos.copy().add(-radius*9/(height+1)**1.8, radius*2)
        let rightPos= pos.copy().add(radius*9/(height+1)**1.8, radius*2)

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


