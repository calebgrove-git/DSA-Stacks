const Stack = require('./stack');

function peek(stack) {
  return stack.top;
}
function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  } else return false;
}
function display(stack) {
  let display = [];
  let node = stack.top;
  while (node.next !== null) {
    display.unshift(node.data);
    node = node.next;
  }
  display.unshift(node.data);
  return display;
}
var main = function () {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  return starTrek;
};

console.log(display(main()));
let starTrek = main();

starTrek.pop();
starTrek.pop();
starTrek.push('Scotty');

console.log(display(starTrek));

module.exports = { peek, isEmpty, display };
