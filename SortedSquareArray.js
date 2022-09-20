let array = [-7, -3, 1, 9, 22, 30]
  function sortedSquaredArray(array) {
        // Write your code here.
        let sqrArr=[]
        array.sort((a,b)=> Math.abs(a) - Math.abs(b)).reduce((acc,curr)=>{
          return sqrArr.push(curr*curr);
        },0)
     
        return sqrArr;
      }
      console.log(sortedSquaredArray(array))
    