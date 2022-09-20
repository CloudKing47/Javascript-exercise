var arr=[2,1,3,4,5];
var arr2=[4,3,2,1];

var result;
for(let i=0;i<arr.length;i++) {
    if(!arr.includes(arr2[i])) {
        result=arr[i]
    }
}
console.log(result)
