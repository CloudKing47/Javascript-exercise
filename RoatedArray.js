var nums = [1, 2, 3, 4, 5, 6];


var k = 1;

var popValue = [];
for (var i = 0; i < k; i++) {
  popValue = nums.pop();
  nums.unshift(popValue);
}



console.log("tttt", nums);

