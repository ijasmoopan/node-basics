const anotherFunction = () => {
  console.log("Alpha");

  setTimeout(() => {
    console.log("Beta");
  }, 0);

  Promise.resolve().then(() => console.log("Gamma"));

  console.log("Delta");
};

anotherFunction();

console.log("Epsilon");
