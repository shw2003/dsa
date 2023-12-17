class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Solution {
  removeNthFromEnd(head, n) {
    let start = new ListNode();
    start.next = head;
    let fast = start;
    let slow = start;

    for (let i = 1; i <= n; ++i) fast = fast.next;

    while (fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;

    return start.next;
  }
}

// Example usage:
// Assuming you have a linked list defined like this:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
// ...

console.log("Original Linked List:");
let current = head;
while (current) {
  console.log(current.val);
  current = current.next;
}
// Create an instance of the Solution class
const solution = new Solution();

// Call the removeNthFromEnd method
const updatedHead = solution.removeNthFromEnd(head, 1);
console.log("\nLinked List after Deleting last Node:");
let updatedCurrent = updatedHead;
while (updatedCurrent) {
  console.log(updatedCurrent.val);
  updatedCurrent = updatedCurrent.next;
}
// 'updatedHead' is the updated head after removing the Nth node from the end
