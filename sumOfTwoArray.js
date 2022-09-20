var arr= [5, 1, 22, 25, 6, -1, 8, 10];
var arr1=[1, 6, -1, 5]
var arr3=[]

//output arr3=[3,3,6,4]

var main = arr.length >= arr1.length ? arr : arr1;
var sec = arr.length < arr1.length ?  arr:arr1;
for(let i=0;i<main.length;i++) {
     var tt= sec[i] ? main[i] + sec[i] : main[i]
     arr3.push(tt)
}

console.log(arr3)




