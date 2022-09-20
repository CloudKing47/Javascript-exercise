var arr=[1,7,3,0,4,5];

function findminmax(arr){
    let max=-Infinity;
    let min=Infinity
    for(let val of arr )
    {
        if(val >max){
            max=val;
        }
        if(val < min) {
            min=val
        }
    }
    return [max,min];
}

console.log(findminmax(arr))