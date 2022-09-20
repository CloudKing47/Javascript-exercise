let characters = "Bste!hetsi ogEAxpelrt x "
let document = "AlgoExpert is the Best!"



function isDocument(characters, document) {

    let cObj={};
    let dObj={};
    

    for(let i=0;i<characters.length;i++) {
        let char=characters[i]
        if(cObj[char] === undefined) 
        {
            cObj[char] = 1
        } else {
            cObj[char]++
        }
    }
    for(let i=0;i<document.length;i++) {
        let doc=document[i]
        dObj[doc]=dObj[doc] +1 || 1
        if(cObj[doc] ===undefined) 
        {
           return false
        } 
        if(dObj[doc] > cObj[doc]) {
            return false
        }
    }
  return true

   
}

console.log(isDocument(characters,document))

