// IIFE Immediately invoked function expression:
// older approach - new modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and variables within Immediately
// global namespace extra steps

const num1 = 21;
const num2 = 22;
// the normal way
function add(params) {
  console.log(`the result is : ${num1 + num2}`);
}
add();
// iife way
(function () {
  const num3 = 33;
  const num4 = 44;
  console.log(`the result in ${num3 + num4}`);
})();

// iife way by passing argument
(function (num5, num6) {
  console.log(`the result is ${num5 + num6}`);
})(55, 66);

// basically you will just invoke the function immediately instead of using it later
// like creating an anonymous function and using it immediately
