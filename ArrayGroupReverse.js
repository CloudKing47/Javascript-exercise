function reverse(arr, n, k)
{
    for(let i = 0; i < n; i += k)
    {
        let left = i;
        // 1, 2, 3, 4, 5, 6, 7, 8
        // To handle case when k is not
        // multiple of n
        let right = Math.min(i + k - 1, n - 1);
        let temp;
         
        // Reverse the sub-array [left, right]
        while (left < right)
        {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
    }
    return arr;
}
 
// Driver Code
let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8);
let k = 3;
let n = arr.length;
let arr1 = reverse(arr, n, k);
 
console.log(arr1)

//output
// [3, 2, 1, 6,5, 4, 8, 7]