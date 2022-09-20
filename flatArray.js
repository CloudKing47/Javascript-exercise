var flatArray= [[1, 2],[3, 4],[5, 6, 7, 8, 9],[10, 11, 12, [13, 14]]];
var output=[];

function flattenArray(flatArr) {
for(let i=0;i<flatArr.length;i++) {
    if(Array.isArray(flatArr[i])) {
        flattenArray(flatArr[i])
    }
    else {
        // console.log(flatArr[i])
        output.push(flatArr[i])
    }
}
return output;
}

console.log(flattenArray(flatArray))