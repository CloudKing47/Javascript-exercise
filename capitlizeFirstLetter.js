var string="hello how are you";

// const capitlizeFirst=(str)=>{

//     var splitStr=str.split(' ')
    
//     for(var i=0;i<splitStr.length;i++) {
//         // console.log(splitStr[i])
//         var cap =splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
//         console.log("🚀 ~ file: capitlizeFirstLetter.js ~ line 10 ~ capitlizeFirst ~ cap", cap.join(' '))

//     }

    
// }

// console.log(capitlizeFirst(string))

// var splitStr=string.split(' ')
// let updatedArr=[]
// for(var ele of splitStr) {
//     ele = ele.charAt(0).toUpperCase() + ele.substring(1)
//     updatedArr.push(ele)
// }

// console.log(updatedArr.join(' '))


function CapFirstChar(str) {
    let splitStr = str.split(' ');
    let update=[]
    for(let i=0;i<splitStr.length;i++) {
    let pdate=splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  update.push(pdate)
}
    return update;
}

console.log(CapFirstChar(string))


//method-2 with this

var str = "How can mirrors be real if our eyes aren't real";
String.prototype.toJadenCase = function () {
	console.log(this)
	let splitStr=this.split(' ')
		let capStr;
		let jordanString=[]
  for(let i=0;i<splitStr.length;i++) {

		 capStr= splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
		
		 jordanString.push(capStr)
	
  }
   return jordanString.join(' ');

};

console.log(str.toJadenCase())
