/**
 * Initialize your data structure here.
 */
const MyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

const Node = function(val) {
  this.val = val;
  this.next = null;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (this.size === 0 || index > this.size - 1 || index < 0) return -1;
  
  let nodeIdx = 0;
  let node = this.head;
  
  while (nodeIdx != index) {
    node = node.next;
    nodeIdx += 1;
  }
  
  return node.val;
};

/**
 * Get the index-th node in the linked list. If the index is invalid, return null. 
 * @param {number} index
 * @return {node}
 */
MyLinkedList.prototype.getNode = function(index) {
  if (this.size === 0 || index > this.size - 1 || index < 0) return null;
  
  let nodeIdx = 0;
  let node = this.head;
  
  while (nodeIdx != index) {
    node = node.next;
    nodeIdx += 1;
  }
  
  return node;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let newNode = new Node(val);
  
  if (this.head) {
    newNode.next = this.head;
    this.head = newNode; 
  } else {
    this.head = newNode;
    this.tail = newNode
  }
  this.size += 1;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let newNode = new Node(val);
  
  if (this.tail) {
    this.tail.next = newNode;
    this.tail = newNode;
  } else {
    this.head = newNode;
    this.tail = newNode;
  }
  
  this.size += 1;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  // Adding to the end of the list
  if (index === this.size) {
    return this.addAtTail(val);
  };
  
  // Adding before the head
  if (index === 0) {
    return this.addAtHead(val);
  }
  
  // Find the previous and next nodes
  let prevNode = this.getNode(index-1);
  if (!prevNode) return null;
  
  let nextNode = prevNode.next;
  
  let newNode = new Node(val);
  newNode.next = nextNode;
  prevNode.next = newNode;
  
  this.size += 1;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size || index < 0) return;
  
  // Delete head
  if (index === 0) {
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
  } else if (index === this.size-1) { // Delete tail
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = this.getNode(this.size-2);
      newTail.next = null;
      this.tail = newTail;
    }
  } else {
    let prevNode = this.getNode(index-1);
    let nextNode = prevNode.next.next;
    prevNode.next = nextNode;
  }
  
  this.size -= 1;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
