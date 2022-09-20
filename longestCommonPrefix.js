// var str= ["flower","flow","flight"];

// const findCommonPrefix=(str)=>{
    
//     const temstr=str.split('')
//     console.log("🚀 ~ file: longestCommonPrefix.js ~ line 6 ~ findCommonPrefix ~ temstr", temstr)
// //    for(let i=0;i<str.length;i++) {
// //     console.log(str[i])
// //    }
// }
// console.log(findCommonPrefix(str))

function prefix(words){
   
    // check border cases size 1 array and empty first word)
    if (!words[0] || words.length ==  1) return words[0] || "";
    let i = 0;
    // while all words have the same character at position i, increment i
    while(words[0][i] && words.every(w => w[i] === words[0][i]))
      i++;
    
    // prefix is the substring from the beginning to the last successfully checked i
    return words[0].substring(0, i);
  }
  
//   console.log(1, prefix([]));
//   console.log(2, prefix([""]));
//   console.log(3, prefix(["abc"]));
  console.log( prefix(["flower","flow","flight"]));
//   console.log(5, prefix(["abc", "abc", "abc"]));
  // console.log(6, prefix(["abc", "abcde", "xyz"]));