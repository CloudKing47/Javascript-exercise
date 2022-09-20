var arr=[2,1,4,5,10]
// var sort= arr.sort((a,b)=> a-b)
// console.log("🚀 ~ file: sort.js ~ line 3 ~ sort", sort)

//bubbleSort
function bubbleSort(arr) {
    
    for(let i=0;i<arr.length-1;i++) {
        for(let j=0;j<arr.length-1-i;i++) {
            if(arr[j]>arr[j+1]) {
                let temp
                // var temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j+1] = temp
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
              
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr))