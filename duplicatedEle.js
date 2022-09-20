var arr=[1,2,3,1];
// console.log(new Set(arr))

const duplicate=(arr)=>{
    var isTwice=false;
    var obj={};
    var result=[]
    for(let ele of arr) {
        if(obj[ele] === undefined) {
            obj[ele] = 1
            // result.push(ele)

            // isTwice=false
        } else {
            obj[ele] ++
            //  result.push(ele)
            isTwice=true
        }
    }
console.log(obj)
    return isTwice
    
}

console.log(duplicate(arr))