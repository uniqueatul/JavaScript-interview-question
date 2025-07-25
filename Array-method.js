
let arr = [20, 30, 40 ,40,33, 69];
let target = 40;

function removeArr(arr , target){
 return arr.filter(item => item !== target);
}

let removed = removeArr(arr,target);

console.log(removed);