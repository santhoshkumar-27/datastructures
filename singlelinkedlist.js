// create a single node
class elementNode {
    constructor(data) {
        this.data = data;
        this.next = null;
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
list.addArrayToList([1, 2, 3,4,5,6,7])
list.printLinkedList();
list.removeListByArray([2])
list.printLinkedList();

