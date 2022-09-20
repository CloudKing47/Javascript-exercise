var  strs = ["eat","tea","tan","ate","nat","bat"];


function anagramGrp(strs) {
    var objKey={}
var sortedKey 
    for(var str of strs) {
         sortedKey = str.split('').sort().join('')
        
         if(!objKey[sortedKey]) 
         {
            objKey[sortedKey] = [str] 
        } 
            else {
            objKey[sortedKey].push([str])
            } 
    
    }
return objKey
}


console.log(anagramGrp(strs))