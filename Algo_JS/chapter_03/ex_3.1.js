const arr1 = [1, 2, 3, 4, 5];
const arr2 = [100, 101, 102];

let sumArr1 = 0;
let sumArr2 = 0;

for (let elem of arr1) {
  sumArr1 += elem;
}

for (let elem2 of arr2) {
  sumArr2 += elem2;
}

console.log("La somme du tableau 1 est de: " + sumArr1);
console.log("La somme du tableau 2 est de: " + sumArr2);
