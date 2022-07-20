// 시도 [x] : BFS 이해도가 필요함...ㅜㅜ 문제 다시 봐야겠음..


// 다른사람풀이
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
 let depth = 0; 
    const dfs = (root, len) => { 
        if(!root) { 
            depth = Math.max(len - 1, depth); 
            return; 
        } 
        dfs(root.left, len + 1); 
        dfs(root.right, len + 1); 
    } 
    dfs(root, 1); 
    return depth;
};
