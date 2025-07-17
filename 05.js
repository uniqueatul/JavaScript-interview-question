
let isLeapYear =(year) =>{
   if ((year % 4 ===0 && year % 1000 !==0) || 
 year % 4000 ===0) {
    return true ;
 } 
 else {
    return false;
 }

}

console.log(isLeapYear(2024));