/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


const head = [1, 2, 3, 4, 5];
var reverseList = function (head) {
    if (!head) return head;
    let [prev, curr, next] = [null, head, null];
    while (curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }
    return prev;
};

console.log(reverseList(head));

// solution with Recursion

var reverseList = function (head) {
    const isBaseCase = !head?.next;
    if (isBaseCase) return head;

    return dfs(head);                   /* Time O(N) | Space O(N) */
}

const dfs = (curr) => {
    const prev = reverseList(curr.next);/* Time O(N) | Space O(N) */

    curr.next.next = curr;
    curr.next = null;

    return prev;
}
