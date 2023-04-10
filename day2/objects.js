let numbers = [1, 6, 4, 56, 56, 56, 6, 4, 2];

// efficient way
let table = {};

for (let index = 0; index < numbers.length; index++) {
    table[numbers[index]] = 0;
}

for (let index = 0; index < numbers.length; index++) {
    table[numbers[index]]++;
}

console.log(table);