// var arr=[1,2,3,4,5];

// var avg= arr.reduce((acc,ele,index,array)=>{
//  let length=array.length
//     return (acc+ele)/length
// },0)

// console.log(avg)

const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(average);