class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.length){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail            
        }
        length++
        return this
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.length){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        length++
        return this
    }
    shift(){
        if(!this.length) return undefined
        let removed = this.head
        this.head = removed.next
        removed.next = null
        this.head.prev = null
        if(this.length === 1) this.tail = null
        this.length--
        return removed
    }
    set(index, val){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val
            return this
        }
        return false
    }
    remove(index){
        if(index <0 || index >=this.length) return undefined
        if(index ===0 ) return this.shift()
        if(index ===this.length -1 ) return this.pop()
        let removed = this.get(index)
        if(this.length > 1){
            let before = removed.prev
            let after = removed.next
            before.next = after
            after.prev = before
        }
        removed.prev = null
        removed.next = null
        this.length--
        return removed
    }
    pop(){
        if(!this.length) return undefined
        let popped = this.tail
        this.tail = popped.prev
        popped.prev = null
        if(this.length === 1){
            this.head = null
        }else{
            this.tail.next = null
            popped.next = null
        }
        this.length --
        return popped        
    }
    get(index){
        if(index <0 || index >=this.length) return undefined
        let count
        let current
        if(index < this.length/2){
            count = 0
            current = this.head
            while(index!== count){
                current = current.next
                count++
            }
            return current
        }else{
            count = this.length -1
            current = this.tail
            while(index!==count){
                current = current.prev
                count--
            }
            return current
        }
    }
    insert(index, val){
        if(index <0 || index >=this.length) return undefined
        if(index ===0) return this.unshift(val)
        if(index ===this.length -1) return this.push(val)
        let newNode = new Node(val)
        let before = this.get(index - 1)
        let after = before.next
        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode
        this.length++
        return this
    }
}

//! Problem #2

const getDecimalValue = (head) => {
    
}