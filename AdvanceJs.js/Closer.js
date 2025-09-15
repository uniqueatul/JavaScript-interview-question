
//A closure is a function that remembers its lexical scope, even when the function is executed outside that scope.



// Why are closures useful?
//  Answer:
// Closures allow:-

// Data privacy/encapsulation

// Creating function factories

// Maintaining state across function calls (like counters)




// function increaseCount (){
//     count = 0
//     return function (){
//         count = count +1
//         return count
//     }
// }

// const Mycount = increaseCount()
// console.log(Mycount());





// function counter() {
//   let count = 0;
//   return function() {
//     count++;
//     console.log(count);
//   };
// }

// const increment = counter();
// increment(); // 1
// increment(); // 2
// increment(); // 3






function App(){
   let count  = 0;
    return function (){
      count++;
      console.log(count);
    };
    

}

let appp = App();

appp();
appp();


