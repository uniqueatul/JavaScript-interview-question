
//A closure is a function that remembers its lexical scope, even when the function is executed outside that scope.



// Why are closures useful?
// 🧠 Answer:
// Closures allow:-

// Data privacy/encapsulation

// Creating function factories

// Maintaining state across function calls (like counters)




function increaseCount (){
    count = 0
    return function (){
        count = count +1
        return count
    }
}

const Mycount = increaseCount()
console.log(Mycount());






