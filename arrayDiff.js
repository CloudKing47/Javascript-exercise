function arrayDiff(a, b) {
    let intersection=a.filter((item,index)=> !b.includes(item))
    console.log("🚀 ~ file: commonfile.js ~ line 871 ~ arrayDiff ~ intersection", intersection)
 }
 console.log(arrayDiff([1,2,3],[1,2]))