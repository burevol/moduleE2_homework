let array = [1, 2, 3, 4, 5, 0, 's', null]

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i=0; i<array.length; i++) {
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
        if (array[i] === 0) {
            zeroCount += 1
        } else if (array[i] % 2 === 0) {
            evenCount += 1
        } else if (array[i] % 2 === 1) {
            oddCount += 1
        }
    }
}
console.log(`Четных значений: ${evenCount}`)
console.log(`Нечетных значений: ${oddCount}`)
if (zeroCount !== 0) {
    console.log(`Нулевых значений: ${zeroCount}`)
}