class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Solution {
  length(head) {
    let cnt = 0;
    while (head !== null) {
      head = head.next;
      cnt++;
    }
    return cnt;
  }

  deleteMiddle(head) {
    if (head === null) {
      return null;
    }

    if (head.next === null) {
      return null;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
      prev = slow;
      fast = fast.next.next;
      slow = slow.next;
    }

    prev.next = slow.next;
    return head;
  }
}

// Example usage:
// Assuming you have a linked list defined like this:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// Print the original linked list
console.log("Original Linked List:");
let current = head;
while (current) {
  console.log(current.val);
  current = current.next;
}

// Create an instance of the Solution class
const solution = new Solution();

// Call the deleteMiddle method
const updatedHead = solution.deleteMiddle(head);

// Print the updated linked list
console.log("\nLinked List after Deleting Middle Node:");
let updatedCurrent = updatedHead;
while (updatedCurrent) {
  console.log(updatedCurrent.val);
  updatedCurrent = updatedCurrent.next;
}
