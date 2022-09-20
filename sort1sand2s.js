// ES6 Arrow Function
const sortArr = arr => {
    // step 1
      let c0 = 0, c1 = 0, c2 = 0, i;
    
    // step2
      for(i = 0; i < arr.length; i++) {
          switch(arr[i]) {
              case 0:
                  c0++;
                  break;
              case 1:
                  c1++;
                  break;
              case 2:
                  c2++;
                  break;
          }
      }
      
      // step 3
      i = 0;
      while(c0 > 0) {
          arr[i++] = 0;
          c0--;
      }
  
      while(c1 > 0) {
          arr[i++] = 1;
          c1--;
      }
  
      while(c2 > 0) {
          arr[i++] = 2;
          c2--;
      }
  
      return arr;
  }
  
  console.log(sortArr([0,1,2,0,1]))