// 시도 [x] : 아예 시도조차..못함...ㅠㅠ 아직 재귀가 이해가 안됌....

// 다른사람 풀이
const searchDepth = (node, depth) => {
  if (node === null) return depth;
  depth++;

  const leftDepth = searchDepth(node.left, depth);
  const rightDepth = searchDepth(node.right, depth);

  if (leftDepth === -1 || rightDepth === -1) return -1;
  if (Math.abs(leftDepth - rightDepth) > 1) return -1;

  const max = Math.max(leftDepth, rightDepth);
  return max;
};

const isBalanced = (root) => {
  if (root === null) return true;
  return searchDepth(root, 0) !== -1;
};
