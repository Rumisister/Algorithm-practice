// 시도[x] : Inorder traversal(중위 순회)를 구현하는 문제는 아직 나에겐..어려웠다부다...ㅜㅜ


//다른사람 풀이 
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    result = []
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        self.dfs(root)

        return self.result

    def dfs(self, root):
        if root is None:
            return
        self.dfs(root.left)
        self.result.append(root.val)
        self.dfs(root.right)
