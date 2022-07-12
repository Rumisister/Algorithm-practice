// 시도[x] : 완벽이해가 가지않아 다른사람 풀이 봄

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
var deleteDuplicates = function(head) {
    if (!head) return null;
    let prev = head, next = head.next;

    while (next) {
        if (prev.val === next.val) {
            prev.next = next.next;
        } else {
            prev = prev.next;
        }
    	next = next.next;
    }

    return head;
};
