var arr=[9,6,4,2,3,5,7,1];


const missingNumber=(arr)=>{

   let missResult=[]

    let count=arr.length+1
   for(let i=1;i<=100;i++) {
    if(arr.indexOf(i) === -1) {
        missResult.push(i)
    }
   }
  return missResult;
}

console.log(missingNumber(arr))

// var missingNumber = function (nums) {
//   var sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += i + 1 - nums[i];
//   }

//   return sum;
// };

// console.log(missingNumber(arr))nums