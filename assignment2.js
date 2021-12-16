let number = 5;
let star = '';

for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= number - i; j++) {
    star += ' ';
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    star += '*';``
  }
  star += '\n';
}

console.log(star);
