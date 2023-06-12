class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let c = new Cat("Skitty", " 9 ans");
let d = new Cat("Pixel", " 6 ans");

console.log("Chat 1: " + c.name + c.age);
console.log("Chat 2: " + d.name + d.age);
