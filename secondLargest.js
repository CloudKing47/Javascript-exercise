var arr=[1,12,4,332,60,3,9]

function secondLargest(arr) {

    let max=-Infinity;
    let result=-Infinity;

    for(let val of arr) {
        if(val > max) {
            [result ,max] = [max ,val] ;
        } else if(val < max && val>= result) {
            result=val
        }
    }
    return result
}

console.log(secondLargest(arr))