// create a function that generate a random number b/w a given Range

function GenerateNum(min,max){
    return Math.floor(Math.random()*max - min+1) +min;

}

console.log(GenerateNum(20,22));