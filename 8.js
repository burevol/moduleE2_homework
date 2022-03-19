let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry",    "blue"]
]);

for (let name of fruits.keys()) {
    console.log(`Ключ - ${name}, значение - ${fruits.get(name)}`)
}