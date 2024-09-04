let a = true;
setTimeout(() => {
  a = false;
  console.log('a became false')
}, 2000);
while (a) {
  console.log(" -- inside while -- ");
}

console.log("Start");

setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

console.log("End");
