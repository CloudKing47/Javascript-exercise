var nums = [3,2,4]
var target = 6


var twoSum = function(nums, target) {
    var storeObject={} 

    for(let [index , num] of nums.entries() ){
        if(storeObject[num] !== undefined) return [storeObject[num],index]
        storeObject[target -num] = index
    }
    return storeObject;
};


console.log(twoSum(nums,target))


