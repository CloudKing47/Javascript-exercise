//method-1
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  //method-2
  function createPhoneNumber(numbers){
	let firtThree=numbers.splice(0,3);
	let nextThree=numbers.splice(0,3);

	let remaining=numbers
  console.log("🚀 ~ file: commonfile.js ~ line 874 ~ createPhoneNumber ~ remaining", remaining)
  console.log("("+firtThree.join('').toString() + ")" +' ' + nextThree.join('').toString() +'-'+ remaining.join('').toString())
 
}
 console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))