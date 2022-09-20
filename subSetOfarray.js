var arr=[1,4,3,7,0,2];
var arr1=[194];

function findSubset(arr,arr1) {

    console.log(arr.some((item)=>arr1.includes(item)))
}

console.log(findSubset(arr,arr1))