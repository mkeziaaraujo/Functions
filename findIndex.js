// Dado um array de números [1, 2, 3, 4, 5, 6, 7, 8] retorne o primeiro index que a divisão dele por 2 é 2 (findIndex)
// entrada: [1, 2, 3, 4, 5, 6, 7, 8]
// saida: 3

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const newIndex = array.findIndex((element, index) => {
    if (element / 2 == 2) {
    return index;
}
});
console.log(newIndex);
