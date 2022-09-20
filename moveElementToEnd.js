function moveElementToEnd(array, toMove) {
    // Write your code here.
    let movedArr=[]
    let i=0
    for(let i=0;i<array.length;i++){
        let arr=array[i];
        if(arr === toMove) {
          const a=  movedArr.push(...array.splice(i,1))
          --i;
           
        }
        
    }
    console.log([...array,...movedArr])
//    return [...array,...movedArr];
  }
  moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2],2)

