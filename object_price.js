let phones = [
    {name: 'iPhone', price: 150000, camera: 32},
    {name: 'samsung', price: 50000, camera: 32},
    {name: 'Oppo', price: 30000, camera: 32},
    {name: 'LG', price: 15000, camera: 32},
    {name: 'Tecno KC2', price: 10000, camera: 32},
];
let cheapest = phones[0];
for(let phone of phones){
    if(phone.price > cheapest.price){
        cheapest = phone;
    }
}
 console.log(cheapest)