// Dado um array de números [1, 2, 3, 4, 5, 6, 7, 8] retorne um novo array somando cada elemento + 1 (map)
// entrada: [1, 2, 3, 4, 5, 6, 7, 8]
// saida: [2, 3, 4, 5, 6, 7, 8, 9] (novo array)

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const newArray = array.map((element) => {
    return element +1;
});
console.log(newArray);
console.log(array);