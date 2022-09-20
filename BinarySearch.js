let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
let target = 0

function BinarySearcg(arr,target) {

let left=0;
let right = arr.length -1;

    while(left<=right) {
        let mid = Math.floor((left + right) /2)
        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            left= mid +1 ;
        } 
        
        else {
            right =mid -1
        }
    }
    return -1
}

console.log(BinarySearcg(array,target))