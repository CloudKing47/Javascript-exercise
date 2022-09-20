
class LinkList {
    constructor(value)
    {
        this.head= {
            value:value,
            next:null
        }
        this.tail= this.head;
        this.length=1;
    }

    
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
      }
    append(value) {
        const newNode ={
            value:value,
            next:null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    findMiddle() {
       
        let mid = Math.floor(this.length/2); //mid index=2
        let temp=this.head;
        while(mid!=0) {
            temp =temp.next;
            mid--;
            // this.length--
        }
      
        return temp.value;
    }

  
}

let appendNode = new LinkList(10)

appendNode.append(20);
appendNode.append(30);
appendNode.append(40);
appendNode.append(50);
appendNode.findMiddle()
console.log(appendNode.printList(),appendNode.findMiddle())


