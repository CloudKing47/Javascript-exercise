var s = "loveleetcode";

const findUnquieChar =(s)=>{

    var obj={};
    // var s=splitStr.split('')
    for(let i=0;i<s.length;i++) {
        if(obj[s[i]] === undefined) {
             obj[s[i]] =1;
            
     
        }else {
            obj[s[i]]++
        }
    }
 
 for(let i=0;i<s.length;i++) {
    var str=s[i]
    if(obj[str] === 1) 
    {
        return i
    } 
   
 }
 return -1
}

console.log(findUnquieChar(s))