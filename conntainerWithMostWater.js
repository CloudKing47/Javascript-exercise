var maxArea = function(height) {
	let left = 0, right = height.length-1, maxWater=0;

	while(left<right){
		let h = Math.min(height[left], height[right]);
		let area = h*(right-left)
		maxWater = Math.max(area, maxWater)
		if(height[left]<= height[right]){
            left++
		}else{
			right--
		}
	}
	return maxWater
};

console.log(maxArea([0, 1, 1, 0, 0]))