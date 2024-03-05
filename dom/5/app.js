// Web Storage API
// session storage,local storage
// setItem,gerItem,removeItem,clear

// both session and local storage work the same but the difference is,
// if we close the browser session the data will be gone
// but for local storage this data can remain in different browser session as well

// localStorage.setItem("name_of_the_key", "value");
// sessionStorage.setItem("name_of_the_key", "value2");

localStorage.setItem("name", "john");
localStorage.setItem("friend", "michael");
localStorage.setItem("job", "developer");
localStorage.setItem("address", "street 123");

const name1 = localStorage.getItem("name");
console.log(name1);

localStorage.removeItem("name");
const name2 = localStorage.getItem("name");
console.log(name2);

localStorage.clear();

// json.stringify() :Very helpfull when working with array and local storage
// json.parse()
const friends_1 = ["sahil", "aditya", "kishan", "harry"];
localStorage.setItem("friends_without_stringify", friends_1);
const values_1 = localStorage.getItem("friends_without_stringify");
console.log(values_1[0]);
console.log(values_1);
console.log(
  "the issue above is that all the strings in array are merged into one string"
);
console.log("Now we use stringify");

localStorage.setItem("friends_with_Stringify", JSON.stringify(friends_1));
const values_2 = JSON.parse(localStorage.getItem("friends_with_Stringify"));
console.log(values_2[2]);
console.log(values_2);

/*
setTimeout- runs function once after specific time

-pass function reference
-duration in ms(1000ms = 1 second)
-default 0,will cover more extensively in async/wait section
-returns unique identifier
-clearTimeout to cancel
-on window object
*/

function sayHelloWorld() {
  console.log("Hello World");
}

setTimeout(sayHelloWorld, 4000);

setTimeout(function () {
  console.log("setTimeout- runs function once after specific time");
}, 5000);

const function_with_multiple_parameters = (a1, a2, a3) => {
  console.log(`${a1}${a2}${a3}`);
};
setTimeout(function_with_multiple_parameters, 8000, 1, 2, 3);

console.log(
  "Basically we have setTimeout function which we can use to setTimeout for the other function to be executed"
);

/*
setInterval-runs function repeatedly at specific intervals

-pass function reference
-duration in ms(1000ms)
-default 0
-returns unique identifier
-clear Interval to cancel
*/

/*
The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
without waiting for stylesheets,image.and subframes to finish loading.

window.addEventListener('DOMContentLoaded',function(){});
*/

/*
The load event is fired when the whole page has loaded including all the dependent resources
suc as stylesheets and images.this is in contrast to DOMContentLoaded,which is fired as soon as the [age
DOM has been loaded without waiting for resources to finish loading

window.addEventListener('load',function(){})

*/

/*
innerWidth : the read only window property the interior width of the window in pixels

innerHeight : the read only property of the window interface returns the interior height of the window in pixels

The element.getBoundingClientRect() method returns a DOMObject providing information about the size of an element
and its position relative to the viewport.
*/

console.log("height :" + window.innerHeight);
console.log("width :" + window.innerWidth);
