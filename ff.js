// var arr=["1",2,"shivali",6,4,4,"pp"];
// var total=0
// for(let i=0;i<arr.length;i++) {
//     console.log(arr[i])
//     if(typeof arr[i] === "number") {
//          total += arr[i]
//     }
    
//     // return total;
    
// }

// console.log("okok",total)







//reverse string
// var string="hello world";


//method-1
// console.log(string.split('').reverse().join('').split(' ').reverse().join(' '))

// var string="meghrajmm";

// const arrStr=string.split('');
// // console.log(arrStr)

// var obj={}
// var duplicateResult=[]
// var uniqueArray=[]

// for(let ele of arrStr) {
//     if(obj[ele] !== undefined) {
//          obj[ele]++
//          duplicateResult.push(ele)
//     } else {
//         obj[ele]=1
//         uniqueArray.push(ele)
//     }
    
// }

// console.log(duplicateResult)




//Anagram

// var str="cat";
// var str1="act";

// let sortStr=str.split('').sort().join('')
// console.log("🚀 ~ file: ff.js ~ line 59 ~ sortStr", sortStr)

// let sortStr1=str1.split('').sort().join('')
// console.log("🚀 ~ file: ff.js ~ line 62 ~ sortStr1", sortStr1)

// console.log((sortStr === sortStr1) ? true :false )


//reverse with recursion

var str="hello world"

// function withRecursion(str,len) {

//     if(str.length == len) {
//         return; 
//     } 
//     withRecursion(str,len+1) 
//     console.log(str[len])
// }

// console.log(withRecursion(str,0))

// function reverse(string) {
//     // Base case
//     if (string.length < 2) return string;
//     // Recursive case
//     return reverse(string.slice(1, string.length)) + string[0];
//   }
//   console.log(reverse(str))


var str="12344jhj"

const spli=str.split('').every((ele)=> typeof parseInt(ele) === "number")
console.log(spli)
// for(let a of spli) {
    
// }