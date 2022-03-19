let array = [1, 1, 1, 2];

let lastValue = array[0];
let allValuesEqual = true
for (let i = 0; i < array.length; i++) {
    if (array[i] !== lastValue) {
        allValuesEqual = false
        console.log('Не все значения в массиве равны');
        break;
    }
    lastValue = array[i];
}
if (allValuesEqual) {
    console.log('Все значения в массиве равны')
}