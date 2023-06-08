function fact(nbr) {
  if (nbr === 0) {
    return 1;
  }

  return nbr * fact(nbr - 1);
}
console.log(fact(9));
