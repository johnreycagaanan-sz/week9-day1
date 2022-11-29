class Node{
    constructor(val){
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(val){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    unshift(val){
        let newNode = new Node(val)
        if(this.length ===0){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this

    }
    shift(){
        if(!this.length) return undefined
        let current = this.head
        this.head = current.next
        if(!this.length) this.tail = null
        this.length--
        return current
    }
    set(index, val){
        if(index < 0 || index >= this.length) return null
        let foundNode = this.get(index)
        if(foundNode) {
            foundNode.val = val
            return this
        }
        return false
    }
    remove(index){
        if(index < 0 || index >= this.length) return null
        if(index ===0) return this.shift()
        if(index ===this.length) return this.pop()
        let toRemove = this.get(index)
        let prev = this.get(index -1)
        prev.next = toRemove.next
        this.length --
        return toRemove
    }
    pop(){
        if(!this.length) return undefined
        let current = this.head
        let newTail = current;
        while(current.next){
            newTail = current
            current = current.next
        }
        this.length--
        if(!this.length){
            this.head = null
            this.tail = null
        }
        return newTail
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter!==index){
            current = current.next
            counter++
        }
        return current
    }
    insert(index, val){
        if(index < 0 || index >= this.length) return null
        if(index ===0) return this.unshift(val)
        if(index === this.length) return this.push(val)
        let newNode = new Node(val)
        let prev = this.get(index-1)
        let next = prev.next
        newNode.next = next
        prev.next = newNode
        this.length++
        return this
    }
}