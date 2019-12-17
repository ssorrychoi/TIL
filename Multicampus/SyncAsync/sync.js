function foo() {
  console.log("Hello");
}

function bar() {
  foo();
  console.log("bye");
}

function hoo() {
  bar();
  console.log("Help!");
}
console.log("Start!");
hoo();
console.log("End!");
// start hello bye help end
