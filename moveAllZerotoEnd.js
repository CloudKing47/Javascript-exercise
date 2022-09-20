var nums = [0,1,0,3,12];

function moveZeros(nums){
let numberZeros=[]
   for(let i=0;i<nums.length;i++) {
    if(nums[i] === 0) {
        numberZeros.push(nums[i])
        nums.splice(i,1)
    }
   }
   return [...nums,...numberZeros]
}

console.log(moveZeros(nums))