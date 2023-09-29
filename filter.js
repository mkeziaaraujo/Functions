// Dado um array de números [1, 2, 3, 4, 5, 6, 7, 8] retorne um novo com os números maiores que 3 (filter)
// entrada: [1, 2, 3, 4, 5, 6, 7, 8]
// saida: [4, 5, 6, 7, 8] (novo array)

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const newArray = array.filter((element) => {
    return element > 3;
});
console.log(newArray);
console.log(array);