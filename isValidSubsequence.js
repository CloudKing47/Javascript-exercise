
{/* <p>
  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
  <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
  that a single number in an array and the array itself are both valid
  subsequences of the array.
</p> */}
let array = [5, 1, 22, 25, 6, 1, 8, 10]
let sequence =[1, 6, 1, 10]

function isValidSubsequence(a, s) {
  
  let counter=0
  for(let i=0;i<a.length;i++) {
      if(a[i] === s[counter]) {
        counter++
      }
  }
  return counter === s.length
}

console.log(isValidSubsequence(array,sequence))