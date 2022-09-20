var str="Welcome to this Javascript Guide!"


//method-1
// console.log(str.split('').reverse().join('').split(' ').reverse().join(' '))


//method-II
// function reverseString(str) {
// let rev=[]
// let rr;
//     for(let i=str.length-1;i >= 0;i--) {
//        rr= 
//         rev.push(str[i])
//     }

//     return rev.join('')
// }

//method -III
function reverseString(str) {
    if(str=== '') {
        return false
    }
    let reverStr= reverseString(str.substring(1) + str.charAt(0))
 return reverStr
}

console.log(reverseString(str))