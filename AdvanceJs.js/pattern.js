let n = 5;
let pattern = "";

// Upper part
for (let i = 1; i <= n; i++) {
  for (let space = 1; space <= n - i; space++) {
    pattern += " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

// Lower part
for (let i = n - 1; i >= 1; i--) {
  for (let space = 1; space <= n - i; space++) {
    pattern += " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
