// S = {"geeks", "for", "geeks", "contribute", 
//      "practice"}
// word1 = "geeks"
// word2 = "practice"
// Output: 2
// Explanation: Minimum distance between the
// words "geeks" and "practice" is 2

var arr = ["the", "quick", "brown", "fox", 
"quick"]
var word1 = "the"
var word2 = "quick"


function findDistance(arr,w1,w2) {

    let obj={};

    for(let i=0;i<arr.length;i++) {
        if(obj[arr[i]] === undefined ) {
            obj[arr[i]] = i
        } else{
            obj[arr[i]]=i++
        }
    }

    return   obj[w2] - obj[w1] ; 
}
console.log(findDistance(arr,word1,word2))