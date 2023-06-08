const arr1 = [1, 2, 3, 4, 5];
const arr2 = [100, 101, 102];

let averageArr1 = 0;
let averageArr2 = 0;

for (let elem of arr1) {
  averageArr1 += elem / arr1.length;
}

for (let elem2 of arr2) {
  averageArr2 += elem2 / arr2.length;
}

console.log(averageArr1);
console.log(averageArr2);
