var numbers= [10,15,12,12,14,15];
function reverseNumber(numbers){
    let reverse =[];
    for(let number of numbers){
         reverse = number + ' ,' + reverse  ;
    }
    return reverse;
}
let reverses = reverseNumber(numbers);
console.log(reverses)