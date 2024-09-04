const obj = {
  name: "test",
  print: function () {
    console.log("Hi " + this.name);
  },
  printData: () => {
    console.log("Hi " + this.name);
  },
};

obj.print();
obj.printData();
