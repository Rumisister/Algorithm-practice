/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

<하영>[o]
/*
var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return (list1 ? list1 : list2) //list1과 list2가 빈 리스트라면 그대로 출력도 빈배열,list or list2가 빈리스트이고 나머지 리스트에 숫자 하나라도 있다면 그대로 그 숫자출력
    if(list1.val < list2.val) { // list1의 val보다 list2의 val이 더 크면 list1.next는 list1.next와 list2를 비교 그리고 list1를 반환
        list1.next = mergeTwoLists(list1.next , list2)
        return list1
    }else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};
*/


