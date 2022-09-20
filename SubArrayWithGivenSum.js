
var arr=[1,2,3,7,5]
var target=12;

function subArraySum(arr,sum) {

   let curr_sum=0;
   let arrPush=[]
  
    // Pick a starting point
    for (let i = 0; i < arr.length; i++) 
    {
        curr_sum = arr[i];
  
        // Try all subarrays starting with 'i'
        for (let j = i + 1; j <= arr.length; j++) 
        {
            if (curr_sum == sum) 
            {
                console.log("Sum found between indexes " +
                                i + " and " + (j - 1) + arrPush[i] );
                return;
            }
            if (curr_sum > sum || j == arr.length)
                break;
            curr_sum = curr_sum + arr[j];
            arrPush.push(arr[j])
        }
    }
    console.log("No subarray found");
    return;
}

console.log(subArraySum(arr,target))