// Dado um array de números [1, 2, 3, 4, 5, 6, 7, 8] retorne o primeiro elemento que a divisão dele por 2 é 2 (find)
// entrada: [1, 2, 3, 4, 5, 6, 7, 8]
// saida: 4

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const newElement = array.find((element) => {
  return element / 2 == 2

});

console.log(newElement);