// Dado um array de números [1, 2, 3, 4, 5, 6, 7, 8] retorne o array original somando cada elemento + 1 (forEach)
// entrada: [1, 2, 3, 4, 5, 6, 7, 8]
// saida: [2, 3, 4, 5, 6, 7, 8, 9]

const array = [1, 2, 3, 4, 5, 6, 7, 8];

array.forEach((element, currentArray) => {
    const newArray = element + 1
    console.log(newArray);
});
