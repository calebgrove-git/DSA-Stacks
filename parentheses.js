const Stack = require('./stack');

function parentheses(s) {
  let check = new Stack();
  let bool = 0;
  for (i = 0; i < s.length; i++) {
    check.push(s[i]);
  }
  for (i = 0; i < s.length; i++) {
    popped = check.pop();
    if (popped === ')') {
      bool += 1;
    }
    if (popped === '(') {
      bool -= 1;
    }
  }
  if (bool === 0) {
    return true;
  }
  return false;
}

console.log(parentheses('1 (+ 3 * (((3 + 7)))'));
