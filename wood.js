function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    let chairPrice = 3;
    let tablePrice = 50;
    let bedPrice = 30;

    let chaprQuant = chairPrice * chairQuantity;
    let tabprQuant = tablePrice * tableQuantity;
    let bedprQuant = bedPrice * bedQuantity;

    let result = chaprQuant + tabprQuant + bedprQuant;
    return result;
}
console.log(woodQuantity(1,1,1))