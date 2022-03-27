class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = {value: value, next: null};
        if(this.tail){
            this.tail.next = newNode;
        }
        // New tail
        this.tail = newNode;

        if(!this.head){
            this.head = newNode;
        }
    }

    prepend(value){
        const newNode = {value: value, next: this.head };

        this.head = newNode;
        if(!this.tail){
            this.tail = newNode
        }
    }

    delete(value){
        if(!this.head){
            return;
        }

        let curNode = this.head;

        while(this.head && this.head.value === value){
            this.head = this.head.next;
        }

        while(curNode.next){
            if(curNode.next.value === value){
                curNode.next = curNode.next.next
            }else{
                curNode = curNode.next
            }
        }

        if(this.tail.value === value){
            this.tail = curNode;
        }
    }

    find(value){
        if(!this.head){
            return;
        }

        let curNode = this.head;

        while(curNode){
            if(curNode.value === value){
                return curNode;
            }
            curNode = curNode.next;
        }

        return null
    }

    insertAfter(value, afterValue){
        const existingNode = this.find(afterValue);

        if(existingNode){
            const newNode = {value:value, next: existingNode.next};
            existingNode.next = newNode;
        }
    }

    toArray(){
        const elements = [];

        let curNode = this.head;
        while(curNode){
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }

}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.append(3);
linkedList1.prepend(0);
linkedList1.append(4);

linkedList1.append(5, 4);
// linkedList1.delete(3);

console.log(linkedList1.toArray() );

// console.log(linkedList1.find(2) );