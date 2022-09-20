//out sample


var findMedianSortedArrays = function(nums1, nums2) {


    let nums3 = nums1.concat(nums2).sort((a,b) => a - b)
   

    if(nums3.length % 2 !== 0) return nums3[(nums3.length-1)/2]

    return (nums3[nums3.length/2] + nums3[nums3.length/2 - 1])/2

  };


//   var findMedianSortedArrays = function(nums1, nums2) {
//     var concat = nums1.concat(nums2);
//    var length =concat.length;
//    var sortArray= concat.sort((a,b)=>{
//        return a-b
//    })
//    if(length%2 ==1) {
//        //odd
//        return concat[(length/2)-0.5]
//    } else {
//        //even
//        return (concat[length/2] + concat[(length/2)-1])/2
//    }
// };


var arr1=[1,3];
var arr2=[2]

console.log(findMedianSortedArrays(arr1,arr2))