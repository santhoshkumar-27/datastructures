// create a single node
// Node class represents each element (node) in the linked list
class elementNode {
    constructor(data) {
        this.data = data; // Holds the data for the node
        this.next = null; // Reference to the next node (initially null)
    }
}

// create a single linked list object
class LinkedList {
    constructor() {
        this.head = null; // Reference to the first node (initially null)
    }
    addNodeToList(data) {
        const node = new elementNode(data);

        // Adds a new node to the end of the linked list
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head
            // traverese through the last node of list
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            // Attach the new node to the last node's 'next' reference
            currentNode.next = node;
        }
    }

    // Removes a node from the linked list by value
    removeNodeFromList(data) {
        if (!this.head) {
            return; // If the list is empty, do nothing
        }
        // If the node to remove is the head, update the head reference
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let currentNode = this.head;
        let previousNode = null;
        // Traverse the list until we find the node to remove or reach the end
        while (currentNode && currentNode.data != data) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        // If the node to remove is found, update the references
        if (currentNode) {
            previousNode.next = currentNode.next;
        }
    }
    printLinkedList() {
        let elements = []
        let currentNode = this.head
        // traverese through the last node of list
        while (currentNode) {
            elements.push(currentNode.data)
            currentNode = currentNode.next;
        }
        // Print the elements
        console.log(elements.join(" -> "));
    }
    addArrayToList(data) {
        data.forEach(element => {
            this.addNodeToList(element);
        });
    }
    removeListByArray(data) {
        data.forEach(element => {
            this.removeNodeFromList(element);
        });
    }
}

const list = new LinkedList();
// list.addNodeToList(2);
// list.addNodeToList(3);
// list.addNodeToList(4);
// list.addNodeToList(5);

// list.printLinkedList();
// list.removeNodeFromList(4);
// list.printLinkedList();
// list.addArrayToList([1, 2, 3, 4, 5])
// list.addArrayToList([1, 2, 3, 4, 5, 6])
list.addArrayToList([12,86,47,6,23,6,11,30,16,81,62,32,80,61,66,41,8,88,5,98,77,54,24,60,52,32,99,84,81,66,1,25,31,27,70,90,19,54,50,6,72,32,69,88,18,10,75,40,22,97])
// list.printLinkedList();
// list.removeListByArray([2])
// list.printLinkedList();

/* 
    Input: head = [1,2,3,4,5]
    Output: [3,4,5]
    Explanation: The middle node of the list is node 3.


    Constraints:
    The number of nodes in the list is in the range [1, 100].
    1 <= Node.val <= 100
*/


const middleNode = (head) => {
    let arrayList = []
    let duplicateHead = JSON.parse(JSON.stringify(head))
    while (duplicateHead) {
        arrayList.push(duplicateHead.data);
        duplicateHead = duplicateHead.next;
    }
    const index = Math.floor(arrayList.length / 2)
    let current = head;
    let i = 0;
    while (current && current.data && i != index) {
        current = current.next;
        i++;
    }
    return current;
};
console.log(middleNode(list.head))