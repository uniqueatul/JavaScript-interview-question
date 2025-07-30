function memozesquare() {
  const cash = {};
  return function (n) {
    if (n in cash) {
      console.log("return from cash");

      return cash[n];
    }

    cash[n] = n * n;
    console.log("calculation");
    return cash[n];
  };
}

const Square = memozesquare()

console.log(memozesquare(5));
console.log(memozesquare(5));
console.log(memozesquare(8));
