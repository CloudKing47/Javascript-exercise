//method 1
// function singleNumber(nums) {
// 	return nums.reduce((prev, curr) => prev ^ curr);
// }


var nums = [1];
function singleNumber(nums) {
	let obj={};
	for(let val of nums) {
		if(obj[val]) {
			obj[val]++
		}else {
			obj[val] =1
		}
	}
	
	for(let i=0;i<nums.length;i++) {
		let singleNumer=nums[i];
		if(obj[singleNumer] === 1) {
			return singleNumer
		}
	}
}
console.log(singleNumber(nums))