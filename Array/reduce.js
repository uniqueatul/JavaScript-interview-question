
let arr =[10, 20 , 30 , 40 ,,89,40];

function LargestElement(arr){
    return arr.reduce((max ,current ) =>{
       return  current > max ? current: max;

    })

   

}
 console.log(LargestElement(arr));