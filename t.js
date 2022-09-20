// var arr = [1]


// var maxSubArray = function(nums) {
    
// let uniq = [...new Set(nums)]

// let positive = uniq.filter((i) => i > -1)
// let negative = Math.max(...uniq.filter((i) => i < 0))

// positive.push(negative)
// let finArr = positive.reduce((sum, i) => sum + i, 0)


// return finArr
// };

// console.log(maxSubArray(arr))


// console.log(1);

// new Promise((resolve,reject)=>{
//     console.log(2);
//     resolve(3);
//     console.log(4)
// }).then(res=> console.log(res))

// console.log(5)

// let x="xxx";
// let y="yyy";
// let z="zzz";

// if(x) {
//     y=x
// }else {
//     z=y
// }

// console.log(x);
// console.log(y);
// console.log(z);


// var arr=[[1,2],[3,4],[7,5]];

// let flatOutput=[]
// function flatArr(arr) {

//     for(let i=0;i<arr.length;i++) 
//     {
//         if(Array.isArray(arr[i]))  flatArr(arr[i])
//         else {
//             flatOutput.push(arr[i])
//         }
//     }
//     return flatOutput.sort();
// }

// console.log(flatArr(arr))


// function infinitCurry(a){
    
//     return function(b) {
//         if(b) return infinitCurry(a+b)
//         return a;
//     }
   
// }

// console.log(infinitCurry(1)(2)())

// var num= 123   // -321

// function reverseNeg(num) {

//     var temp = ""+Math.abs(num)

//     var splitStr= +temp.split('').reverse().join('')
//     // console.log("🚀 ~ file: t.js ~ line 82 ~ reverseNeg ~ splitStr", splitStr)

    
// return (num <0 ? -1 :1) * splitStr

// }

// console.log(reverseNeg(num))


// var arr=[1,4,5,100,99];

// function secondLargest(arr) {

//     let max=-Infinity;
//     let result= Infinity

//     for(let val of arr) {
//         if(val > max) {
//             [result,max] =[max,val]
//         } 
//         if(val < max && val>=result) {
//                 result=val;
//          }
        
//     }
// return result;
// }

// console.log(secondLargest(arr))



// var arr=[1,1,2,3,3,4,5,6,7]

// function removeDuplicates(arr) {

//     let obj={}
//     let result=[]
//     for(let val of arr) {
//         if(obj[val]) {
//             obj[val]++ 
           
//         } else {
//             obj[val]=1;
//             result.push(val)

//         }
        
//     }
//     return result;
// }

// console.log(removeDuplicates(arr))



// var nums = [0,1,0,3,12];

// function moveZeros(nums){
// let numberZeros=[]
//    for(let i=0;i<nums.length;i++) {
//     if(nums[i] === 0) {
//         numberZeros.push(nums[i])
//         nums.splice(i,1)
//     }
//    }
//    return [...nums,...numberZeros]
// }

// console.log(moveZeros(nums))

// var  nums = [2,7,11,15];
// var target = 9;

// function TwoSum(nums,target){

//         let obj={};
//              for(let [num,index] of nums.entries()){
//         if(obj[num] !== undefined) return [obj[num],index];
        
//          obj[target -num] = index;    
//         }
//     return obj
// }
// console.log(TwoSum(nums,target))


// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists


// myFunction({a:1,b:2,c:3},'b')
// Expected
// true
// myFunction({x:'a',y:'b',z:'c'},'a')
// Expected
// false
// myFunction({x:'a',y:'b',z:undefined},'z')
// Expected
// true


//method1
// function myFunction(a, b)
// {
//     let isKeyPrasent =Object.keys(a).find((item,i)=> item === b)
//     if(isKeyPrasent) return true
//     // if(a['b'] === b) {
//     //  return   true
//     // } else {
//     //  return   false
//     // }
   
//  return  false
// }

// console.log(myFunction({x:'a',y:'b',z:undefined},'z'))

// method2

// function myFunction(a, b)
// {

   
//  return  b in a
// }

// console.log(myFunction({x:'a',y:'b',z:undefined},'z'))


// function myFunction(a, b)
// {

   
//  return  b in a
// }

// console.log(myFunction({x:'a',y:'b',z:undefined},'z'))

// console.log([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3].join(''))
// console.log(parseInt([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3].join('')) +1)
// let nbr=parseInt([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3].join('')) + 1;
// let number= nbr.toString().split('').map((itm,i) => Number(itm))
// console.log("🚀 ~ file: t.js ~ line 228 ~ number", number)


