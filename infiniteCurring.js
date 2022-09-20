

function infinitCurring(a) {
    return function(b) {
      if(b) return  infinitCurring(a+b)
      return a
    }
}



console.log(infinitCurring(2)(3)(2)(6)(6)());