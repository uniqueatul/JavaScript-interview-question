console.log(false == []);

// false convert [] into empty string ""
// false convert zero and empty string also convert zero then return true

console.log(false == ![]);

// in js [] is a truthi value but we negate then false == false get result is ture 

// sort 
let art = [1,2,3,4,5,6,7];

let str = art.sort(function(a,b){
    return b-a;
});


// forEach :- in for each we want to apply operation in every index in array to used forEach and take only one call back . like value
// return in not needed;

let arr =[1,2,3,4,5,6,7];
arr.forEach(function (value) {
    console.log(value*8/2);
});






// map :- jub bhi aapko aisha koi case dikh jaaye jaha per ek array sa naya array banega and wo naya array kuchh value ko rakhaga tab map lagag.
// return is nessusary 

let atul = [1,2,3,4,4,5,6,6,6,78,8];

let newatul = atul.map(function(value) {
    if(value> 10)
    return  value;
else{
    return ("not a number");
}
});
 

// reduce: - 

let array = [1,2,3,4,5,6,,7,8];

let ans = array.reduce(function (acc , val){
    return acc+val;
},0);



// find: 

let fin = [
   {id:1, key: 1},
   {id:2, key : 2},
   {id: 3, key: 1},
];


let sst = fin.find(function (value) {

    return value.key===1;
});


// some :- atlist one condition are true then return true . 


let aaa= [20,30,45,78,90];

let any = aaa.some( function (val)
{
return val>77;
});


//every : - all contition are true then return true 
let ar = [10,0,30,40];

let sss = ar.every(function (val)
{
    return val>2;
}
);



//sprade operater ;

let arrange = [1,2,3,4,5,6,7,8,8,9,];
let arr2 = [...arrange];
arr2.pop();



// create an array with 3 fruits and print the second fruit.
// add "chiku" at the end of an array and pineapple in bigning of an array 
//replace  mango with kivi in the array.

let fruits = ["apple" , "banana" , "mango"];

fruits[1];

fruits.push("chiku")
fruits.unshift("pineapple");

fruits.pop();
fruits.push("kivi");

// insert "red" and "blue" at index 1 in this array:

let col =["green" , "yellow"];
col.splice(1,0 , "red" , "blue" );

// extract only the middle 3 element from this array 

let item = [1,2,3,4,4,6,7];
let newitem = item.slice(2,5);
console.log(newitem);

// sort this array alphabetically and then reverse it:

let names = ["atul" , "arjun" , "mira" , "bhavya" ,"uul", "Auul"];

names.sort().reverse();

console.log(names);



// use .map () to square each number:

let number = [1,2,3,4,,5,6,7,7];
let num2 = number.map(function(value){
    return value*value;
});
 
console.log(num2);






// use .filter () to keep number greater then 10;

let arrr = [2,3,4,5,11,22,3];

let arrr2 = arrr.filter( function(val){
    return val>10;
}
);

console.log(arrr2);

// use .reduce () to find the sum of this array:
 
let arrayy = [100,200,300];

let arrayy2 = arrayy.reduce(function(acc, value)
{
    return acc+value;

} ,0);
 

console.log(arrayy2);




// use .find () to get the first number less then 10:

let Aaa= [12,39,55,77 , 2,3,5];
let Aaa2 = Aaa.find(function(val){
    return val >10;

});

console.log(Aaa2);


// use .some () to check if any student has scored below 35:

let aryy = [30,40,20,44,55,11];

let aryy2 = aryy.some(function(val){
    return val < 35;
});
console.log(aryy2);


//use .every () to check if all number are even :

let even = [2,4,6,8,10];

let ever2 = even.every(function(value) {
    return value % 2 ===0;

});

console.log(ever2);


// destructure this array to get firstname and lastName

let fullName = ["Harsh" , "sharma"];

let [firstName , LastName] = fullName;


// merge two array using spread operator:

let q = [1,2];
let p = [3,4];

let u = [...q , ...p]
console.log(u);

// Add india to the start of this array using spread:

let countries = ["usA" , "UK", ];

 countries = ["INDIA", ...countries];
 console.log(countries);

 // clone this array properly not by reference:

 let arrrrrr = [1,4,5,,6,667,8];
 let arrrrr2 = [...arrrrrr];
 console.log(arrrrr2);


