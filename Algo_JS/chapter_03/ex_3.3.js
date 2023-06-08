const arr = ["papa", "maman", "pomme", "poire"];
const arr2 = [];
const arr3 = arr.slice();

for (let elem of arr) {
  arr2.push(elem);
}

console.log(arr2);

console.log(arr3);
