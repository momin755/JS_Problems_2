var numbers = [10,12,12,14,15,16,19];
function removeDuplicate(numbers){
    let unique = [];
    for(let number of numbers){
        if(unique.indexOf(number) == -1){
            unique.push(number);
        }
    }
    return unique;
}
console.log(removeDuplicate(numbers))