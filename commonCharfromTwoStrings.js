var str="xyab";
var str1="xzca";

function notCommonChar(str,str2) {

  let splitStr=str.split('').sort();

  let splitStr2 =str2.split('').sort();
  var uniChar=[]
  for(var i=0;i<=splitStr.length;i++) {
    if(splitStr[i] !== splitStr2[i]) {
        uniChar.push(splitStr[i])
        uniChar.push(splitStr2[i])
    } 

    }
 
    return uniChar.join('');
  }

  console.log(notCommonChar(str,str1))
