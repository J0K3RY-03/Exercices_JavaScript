const pointA = [1, 1];
const pointB = [2, 2];

function calcDistance(pointA, pointB) {
  let [x1, y1] = pointA;
  let [x2, y2] = pointB;
  const dist = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  return console.log(dist.toFixed(2));
}

calcDistance(pointA, pointB);

// doc
// La fonction calcDistance prend deux paramètres pointA et pointB qui représentent les coordonnées des deux points.

// Les coordonnées x et y des points pointA et pointB sont extraites à l'aide de la destructuration d'array. Par exemple let [x1, y1] = pointA; extrait les valeurs x et y du tableau pointA et les assigne respectivement à x1 et y1.

// La distance entre les deux points est calculée dist = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) Ceci calcule la racine carrée de la somme des carrés des différences entre les coordonnées x et y des deux points.

// La distance calculée est arrondie à 2 décimales à l'aide de toFixed(2).
