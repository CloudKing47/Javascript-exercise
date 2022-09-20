function firstDuplicateValue(array) {
    // Write your code here.
      var obj={};
      
      for(let i=0;i<array.length;i++) {
          if(obj[array[i]] === undefined) {
               obj[array[i]] =1;
              
       
          }else {
              obj[array[i]]++
              return array[i]
          }
      }
   
     
   return -1
  }

  console.log(firstDuplicateValue([6, 15, 7, 10, 9, 14, 10, 1, 10, 1, 2, 11, 1, 6, 8]))