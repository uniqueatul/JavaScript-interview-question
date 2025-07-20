// write a function that calculate the factorial of a given number.
let num = 10;

function factorial(num){
    if(num ===0 || num ===1){
        return 1;

    }
    else
    {
        let fact = 1;
          for(let i = 1; i<=num; i++)
    {
        fact*=i;
    }
    return fact;

    }
  

}

console.log(factorial(7));

