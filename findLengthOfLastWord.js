var  s = "Hello Worldtt"


function findLastWordLength(str) {
    let splitStr= str.trim().split(' ')
    let len=splitStr.length-1
    // console.log("🚀 ~ file: findLengthOfLastWord.js ~ line 6 ~ findLastWordLength ~ splitStr",splitStr)
    // for(let i=splitStr.length;i--;) {
    //     console.log(splitStr[len].length)

    // }
    console.log(splitStr[len].length)
}

console.log(findLastWordLength(s))