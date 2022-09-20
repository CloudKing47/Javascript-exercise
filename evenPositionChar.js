var str="meghraj";

const arrStr=str.split('');
var newStr=[]
for(let i in arrStr) {
    if(i%2 !==0)  newStr.push(arrStr[i])
 
}

console.log(newStr.join(''))