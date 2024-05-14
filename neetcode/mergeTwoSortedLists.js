/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

 */
let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

var mergeTwoLists = function (list1, list2) {
    if (list1 == null) {
        return list2;
    } else if (list2 == null) {
        return list1;
    } else if (list1 == null && list2 == null) {
        return [];
    }

    let mergeList = tail = new ListNode();

    while (list1 && list2) {
        const isL2Greater = list1.val <= list2.val;
        const isL2Less = list2.val < list1.val;

        if (isL2Greater) {
            console.log(list1);
            tail.next = list1;
            list1 = list1.next;
        }

        if (isL2Less) {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return mergeList.next;
};



console.log(mergeTwoLists(list1, list2));