function getSwapIndex(currentInd, n) {
    var swapInd = (currentInd % 3) * n + parseInt(currentInd/3);
    while (swapInd < currentInd) {
      swapInd = getSwapIndex(swapInd, n);
    }
  
    return swapInd;
  }
  
  function convert(arr) {
    var n = parseInt(arr.length / 3);
  
    for(var i = 0; i < arr.length; i++) {
      var swapInd = getSwapIndex(i, n);
  
      var tmp = arr[i];
      arr[i] = arr[swapInd];
      arr[swapInd] = tmp;
    }
  
    return arr;
  }

  console.log(convert(['a1', 'a2', 'aN', 'b1', 'b2', 'bN', 'c1', 'c2', 'cN']))