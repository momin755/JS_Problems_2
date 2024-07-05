let phones = [
    {name: 'iPhone', price: 150000, camera: 32 , quantity: 3},
    {name: 'samsung', price: 50000, camera: 32, quantity: 2},
    {name: 'Oppo', price: 30000, camera: 32, quantity: 4},
    {name: 'LG', price: 15000, camera: 32, quantity: 3},
    {name: 'Tecno KC2', price: 10000, camera: 32, quantity: 5},
];
let sum = 0;
for(let phone of phones){
    let addCost = phone.price * phone.quantity;
    sum = sum + addCost;
}
console.log(sum)