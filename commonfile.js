// var arr=[1,1,2];
// //create one object to keep track of value reapating 
// //create counter to get the reapating count of number array
// var trackObj={}
// var unique=[]
// var count=0;
// for(let val of arr) {
//     if(trackObj[val]) {
//         trackObj[val] ++
//         count++
//     } else {
//         trackObj[val]=1;
//         unique.push(val)
//     }
// }

// for(let i=0;i<count;i++) {
//     unique.push('_')
// }
// console.log(unique)

// var nums=[1,1,2,3];
// var removeDuplicates = function(nums) {
//     var trackObj={}
// var unique=[]
// var count=0;
//     for(let val of nums) {
//     if(trackObj[val]) {
//         trackObj[val] ++
//         count++
//         nums.splice(0,1)
//     } else {
//         trackObj[val]=1;
//         unique.push(val)
//     }
// }
// console.log("asd",nums)

//     return nums;
// };

// console.log(removeDuplicates(nums))

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// console.log([].concat.apply([],a))


// var isAnagram = function(s, t) {
//     let a=s.split('').sort().join('');
//     let b=t.split('').sort().join('');
//     console.log(a,b)
//     return a===b ? true :false
// };

// console.log(isAnagram("anagram",
// "nagaram"))


// /bind polyfill

// Function.prototype.mybind= function(context,...arg1) {
//     console.log("🚀 ~ file: commonfile.js ~ line 62 ~ arg1", arg1)
//     console.log("🚀 ~ file: commonfile.js ~ line 62 ~ context", context)
//     var fn=this;
//     return function(...arg2) {
//         console.log("🚀 ~ file: commonfile.js ~ line 66 ~ returnfunction ~ arg2", arg2)
//         return fn.apply(context,[...arg1,arg2])
//     }
// }

// var obj={
//     name:'meghraj'
// }

// function callName() {
//     console.log("hi my name is " + this.name + "i lived in " ,arguments[0]  + arguments[1])
// }


// var callie= callName.bind(obj,"belgaum","bangalore")

// console.log(callie())




//polyfill for map


// Array.prototype.mymap=function(callback) {
//     var arr=[];

//     for(var i=0;i<=this.length;i++) {
//             arr.push(callback(this[i],i,this))
//     }
//     return arr;
// }


// function balaceParanthesis(arr) {

//     let stack=[];

//     for(let i=0;i< arr.length;i++) {
//         var x=arr[i];

//         if(x ==='(' || x === '{' || x === '[') {
//             stack.push(arr[i])
//             continue;
//         }

//         if(stack.length === 0) return false;

//         let check;

//         switch(x) {
//             case ')' :
//                 check = stack.pop();
//                 if(check === "{" || check === "[") 
//                     return false
                
//                 break;

//                 case '}' :
//                     check = stack.pop();
//                     if(check === "(" || check === "[") 
//                         return false
//                     break;

//                     case ']' :
//                         check = stack.pop();
//                         if(check === "(" || check === "{")
//                             return false
//                         break;

//     }

   
// }
// return (stack.length === 0)
// }

// console.log(balaceParanthesis("[}]"))



//debounce

// const debound=(fn,delay)=>{
// let debounTimer;

//  return function() {
//      context=this;
//         args=arguments; 

//         clearTimeout(debounTimer);
//         debounTimer = setTimeout(()=> fn.apply(context,delay))
//  }
// }

//even position char

// var str="meghraj";

// function getEvenChar(str) {
// var evenChar=[]
//         for(let i=1;i< str.length;i++) {
//             if(i % 2 !== 0) {
//                     evenChar.push(str[i])
//             }
//         }
//         return evenChar;
// }

// console.log(getEvenChar(str))

//infinte curring

// function infinteCurring(a) {
//     return function(b) {
//         if(b) return infinteCurring(a+b)
//         return a
//     }
// }

// console.log(infinteCurring(1)(1)(3)())


//avg sum

// var arr=[1,2,4,3,5,6];

// const Avg= arr.reduce((prev,curr)=> prev+curr) /(arr.length);
// console.log("🚀 ~ file: commonfile.js ~ line 193 ~ Avg", Avg)


// var str='tanush meghraj patil';

// function CapfirstLetter(str) {
//        let cap=str.split(' ')
//        let updatedStr=[]
//        for(let i=0;i<cap.length;i++) {
            
//         updatedStr.push(cap[i].charAt(0).toUpperCase() + cap[i].substring(1))
//         }
//         return updatedStr;
// }

// console.log(CapfirstLetter(str))

// var  strs = ["eat","tea","tan","ate","nat","bat"];

// function anagram(strs) {
//     let obje={}
//     for(let i=0;i<strs.length;i++) {
//         let sortKey = strs[i].split('').sort().join('');
//         if(!obje[sortKey]) {
//             obje[sortKey] = [sortKey]
//         } else {
//             obje[sortKey].push([sortKey])
//         }
//     }
//     return obje;
// }
// console.log(anagram(strs))

// var str="meghraj";


// function evenPo(str) {
//     for(let i=0;i<str.length;i++) {
//         if(i%2 !== 0) {
//             console.log(str[i])
//         }
//     }
// }

// console.log(evenPo(str))

// var arr=[1,7,3,4,5];

// function findMixMax(arr) {
//    let max= -Infinity;
//    let min = Infinity;

//    for(let i=0;i<arr.length;i++) {
//     if(arr[i] > max) {
//         max=arr[i]
//     }
// }

//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] < min) {
//             min=arr[i]
//         }
//    }
//    return [max ,min]

// }
// console.log(findMixMax(arr))


// var s = "memghraj";

// function findFirstUnique(s){
//     let obj={};

//     for(let i=0;i<s.length;i++) {
//         if(!obj[s[i]]) {
//             obj[s[i]] =1
//         }else {
//             obj[s[i]]++
//         }
//     }
//     console.log(obj)
//     for(let i=0;i<s.length;i++){
//         if(obj[s[i]] === 1) {
//             return i
//         }
        
//     }
//     return -1
// }

// console.log(findFirstUnique(s))

// var arr= [[1, 2],[3, 4],[5, 6, 7, 8, 9],[10, 11, 12, [13, 14]]];
// let flatArray=[]
// function flatArrFun(arr) {
   
//     for(let i=0;i<arr.length;i++) {
//         if(Array.isArray(arr[i]))  
//         {
//             flatArrFun(arr[i])
//         } else{
//             flatArray.push(arr[i])}
//     }
// return flatArray;
// }
// console.log(flatArrFun(arr));

// function infinitCurring(a) {
//     return function(b) {
//         if(b) return infinitCurring(a+b)
//         return a
//     }
// }

// console.log(infinitCurring(1)(2)())


//throtalling

// const throtalling =(func,delay)=>{

//     let prev=0;
//     return function(...args) {
//         let now= new Date().getTime();
//         if(prev-now > delay) 
//         {
//             prev=now;
//             return func(...args)
//         }
//     }
// }


// function reverseInt(n) {
//     let nums = Math.abs(n).toString().split('').reverse().join('')
//     console.log("🚀 ~ file: commonfile.js ~ line 330 ~ reverseInt ~ nums", nums)
    
// }

// reverseInt(-123)


//mergesort


// function mergeFinal(a,b) {
//     let c=[];
//     while(a.length && b.length) {
//         c.push(a[0] > b[0] ? b.shift():a.shift())
//     }

//     while(a.length) {
//         c.push(a.shift())
//     }
//     while(b.length) {
//         c.push(b.shift())
//     }
//     console.log(c)
//     return c;
// }

// function divideMergeSort(arr) {

//     if(arr.length <2 ) return arr;

//     let middle = Math.floor(arr.length/2)
//     let left  = arr.slice(0,middle);
//     let right =arr.slice(middle,arr.length);

//     const sort_ledt = divideMergeSort(left);
//     const sort_right = divideMergeSort(right)

//     return mergeFinal(sort_ledt,sort_right)
 
// }

// console.log(divideMergeSort([4,2,5,6,1]))


// var arr=[3,1,7];


// function missingNumber(arr) {
//     let missNbr=[]
//     // let count=arr.length + 1;
//     for(let i=0;i<arr.length + 1;i++) {
//       if( arr.indexOf(i) === -1)
//       {
//         missNbr.push(i)
//       }
//     }
// return missNbr
// }
// console.log(missingNumber(arr));



// Array.prototype.myMap= function(callback) {
//   var arr=[]; 

//   for(let i=0;i<this.length;i++) {
//     arr.push(callback(this[i],this,i))
//   }

//   return arr;
// }

// var arr=[1,2,3,4];

// arr.myMap((item,i)=> console.log(item))

// var obj={
//     first_name:'meghraj',
//     last_name:'meghraj'
// }
// const sampleObj = {
//     "name": "Juan",
//     "age": 29,
//     "address": {
//        "street": "Street 1",
//        "number": 3
//     }
//  }

// console.log(JSON.stringify(sampleObj))


// const objKey= Object.keys(obj) ;

  

//     for(let i=0;i<objKey.length;i++) {
      
//         const findPosSplit= objKey[i].split('');
//         const findIndexS=findPosSplit.findIndex((item)=> item ==='_')+1
//         console.log("🚀 ~ file: commonfile.js ~ line 419 ~ balaceParanthesis ~ findPos", findPosSplit[findIndexS].toUpperCase())
//     }

//     const objKey1= Object.keys(obj).map((item,index)=>{
//         console.log("asdasdsad",item)
//     }) ;


// console.log(objKey)

// var nums =[2,14,18,22,22]
// var containsDuplicate = function(nums) {
//     let isTwice =false
//    let obj={};
//    for(let i=0;i<nums.length;i++){
//        if(!obj[nums[i]]) {
//            obj[nums[i]] = 1
//        }else {
//         obj[nums[i]]++;
//         isTwice =true
//        }
     
//    }
//    return isTwice

   
// };

// console.log(containsDuplicate(nums))





// function maxSum( arr, n, k){
// 	// Initialize result
// 	let max_sum = Number.MIN_VALUE;

// 	// Consider all blocks starting with i.
// 	for (let i = 0; i < n - k + 1; i++) {
// 		let current_sum = 0;
// 		for (let j = 0; j < k; j++)
// 			current_sum = current_sum + arr[i + j];

// 		// Update result if required.
// 		max_sum = Math.max(current_sum, max_sum);
// 	}

// 	return max_sum;
// }

// // Driver code
// let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
// let k = 4;
// let n = arr.length;
// console.log(maxSum(arr, n, k));



// const promise =new Promise((resolve ,reject)=>{
// 	if(true) {
// 		resolve('suceess')
// 	}
	
// 	else {
// 		reject('failed')
// 	}
	
// })


// promise.then((res)=>{
// 	console.log(res)
// }).catch((err)=>{
// 	console.log(err)
// })

// var isPalindrome = function(x) {
    
//     let stringCon='' + x
//    let reveseVal= parseInt(stringCon.split('').reverse().join(''))
//    console.log("🚀 ~ file: commonfile.js ~ line 511 ~ isPalindrome ~ reveseVal", reveseVal)
//    if(x === reveseVal) return true
//    return false
// };

// console.log(isPalindrome(10))

// var nums = [2,7,11,15]
// var target = 9;


// function twoSum(nums,target) {
// 	let obj={} 

// for(let i=0;i<nums.length;i++){
// 	if(obj[nums[i]] !== undefined) return [obj[nums[i]],i]
// 	 obj[target -nums[i]] = i
// }
// return obj;
// } 

// console.log(twoSum(nums,target))



// const throttal =(func,delay)=>{
// 	 let prev=0
// 	return function(...args) {
// 		let now= new Date.getTime()
// 			prev=now
// 		if(now-prev > delay) {
// 			return func(...agrs)
// 		}
// 	}

// }

// const debounceHandler=(func,dely)=> {

// let debounceTimer=null;
// return function() {
// 	 context =this;
// 	args=arguments;
// 	clearTimeout(debounceTimer)
// 	debounceTimer=setTimeout(()=> func.apply(context,args),dely)
// }
// }



// function plusOne(digits) {
	
// 	for(let i=digits.length;i--;) {
		
// 		digits[i] =1+digits[i];
// 		console.log("🚀 ~ file: commonfile.js ~ line 566 ~ plusOne ~ digits", digits)
// 		if(digits[i] === 10) {
// 			digits[i] = 0
// 		}else {
// 			return digits
// 		}
// 		digits.unshift(1)
	

// 	}
// 	return digits
// }

// console.log(plusOne([9]))


// function movingZerosToEnd(arr) {
// let allZeros=[]
// 	for(let i=0;i<arr.length;i++) {
// 		if( arr[i] === 0) {
			
// 			allZeros.push(arr[i])
// 			arr.splice(i,1)
		
// 		} 

// 	}
// 	console.log([...arr,...allZeros])
// }


// console.log(movingZerosToEnd([0,1,0,3,12]))

// function firstNonRepeatingCharacter(str) {

// 	let obj={}

// 	for(let i=0;i<str.length;i++) {
		
// 		if(!obj[str[i]]) {
// 			obj[str[i]] =1
// 		} else {
// 			obj[str[i]]++
// 		}
// 	}

// 	console.log(obj)
// 	for(let i=0;i<str.length;i++) {
// 		console.log(obj[str[i]])
// 		if(obj[str[i]]===1) {
// 			return i
// 		}
// 	}

// 	return -1
// }

// var flatA= [[1, 2],[3, 4],[5, 6, 7, 8, 9],[10, 11, 12, [13, 14]]];
// var output=[];

// function flatArray(flatArr){

// 	for(let val of flatArr) {
// 		if(Array.isArray(val)) 
// 		 {flatArray(val)} 
// 		 else {
// 		output.push(val)}
// 	}
// return output;
// }
// console.log(flatArray(flatA))



// function prefix(strs) {
    
//     if(!strs[0] || strs.length == 1) return strs[0] || '' ;
    
//     let i=0;

//     while(strs[0][i] && strs.every((w)=> w[i] === strs[0][i] ) ) {
	
// 		i++;
// 	}

  
    
//     return  strs[0].substring(0,i)
// };

// console.log(prefix(["flower","flow","flight"]))


// Remove Duplicates from Sorted Array
// var nums =[1,1,2]
// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] != nums[i]) 
//             nums[++i] = nums[j];
//     }
//     return ++i;
// };

// function removeDuplicates(arr) {

// 	let obj={}
// 	let count=0

// 	for(let i=0;i<arr.length;i++) {
		
// 		if(!obj[arr[i]]) {
// 			obj[arr[i]] =1
// 			count++
// 		} else {
// 			obj[arr[i]]++;
			
// 		}
// 	}
//  console.log(arr)
// 	return count
// }

// console.log(removeDuplicates(nums))


// var employeeId = 'abc123';
// function foo(){
// 	employeeId = '123bcd';
// 	return;
// }
// foo();
// console.log(employeeId);


// var arrs=[1,2,3,4,5,6,7];

// function pair(arr) {
// 	let pairArr=[]
// 	let mid=Math.floor(arr.length/2);

// 	for(let i=0;i<=mid;i++) {
		
// 		pairArr.push([arr[i],arr.pop()])
		
// 	}

// 	console.log(pairArr)

// }

// console.log(pair(arrs))


// var str="hello how are you";

// function CapFirst(str) {

// 	let splitStr=str.split(' ')
// 	let ff=[]

// 	for(let i=0;i<splitStr.length;i++) {
// 			ff.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1))
		

// 	}
// 	return ff.join(' ')
// }

// console.log(CapFirst(str))


// var str="helloworld";

// function firstHalf(str) {
//     if(str.length <2) return str;
//     len =Math.floor(str.length/2)
   
//     str.splice(0,len)
//     console.log("🚀 ~ file: commonfile.js ~ line 743 ~ firstHalf ~ len", str)
// }

// console.log(firstHalf(str))


// var arr=[5, 1, 22, 25, 6, -1, 8, 10];
// var arr1=[4, 5, 1, 22, 25, 6, -1, 8, 10]

// function findSubset(arr,arr1) {
//     var main = arr.length >= arr1.length ? arr : arr1;
//     console.log("🚀 ~ file: commonfile.js ~ line 756 ~ findSubset ~ main", main)
//     var sec  = arr.length < arr1.length ?  arr:arr1;
//     console.log("🚀 ~ file: commonfile.js ~ line 758 ~ findSubset ~ sec", sec)
//     return arr1.every((item)=>arr.includes(item))
// }

// console.log(findSubset(arr,arr1))



// var arr= [100, 50, 40, 20, 10] ;


// function finalMergeSort(a,b) { 
   
// 	let c=[];
	 
// 	 while(a.length && b.length) {
// 	 	c.push(a[0] < b[0] ? b.shift() : a.shift()) 
// 	 }
	 
// 	 while(a.length) {
// 	 	c.push(a.shift())
// 	 }
	 
// 	 while(b.length) {
// 	 c.push(b.shift())
// 	 }
	 
// 	 return c;
// }

//  function mergS(arr) {
      
//       if(arr.length <2 ) return arr;
      
//       let mid = Math.floor(arr.length /2);
//       let left = arr.slice( 0 , mid);
//       let right= arr.slice(mid ,arr.length) 
      
//       let  a_l = mergS(left);
//       let b_l = mergS(right)
      
//       return finalMergeSort(a_l,b_l)
//   }
  
//   console.log(mergS(arr))

// var a = [1000000001 ,1000000002 ,1000000003 ,1000000004 ,1000000005]

// function aVeryBigSum(arr) {
// 	var sum= arr.reduce((acc,ele)=>{
// 		return acc+ele
// 	},0)

// 	return sum
// 	}
	

    // Write your code here
// 	console.log(aVeryBigSum(a))
// var strings=['ab','ab','abc'];
// let queries=['ab','abc','bc'];

// function lonelyinteger(strings,queries) {
    // Write your code here
	// const cc= [...strings,...queries]

    // let obj={}
    // for(let i=0;i<cc.length;i++) {
    //     if(!obj[cc[i]]) {
    //         obj[cc[i]]=1
    //     } else {
    //         obj[cc[i]]++
    //     }
    // }
	// console.log(obj)

// 	let results = [];
    
//     queries.forEach((query) => {
//         results.push(strings.filter((string) => string === query).length);
//     })
    
//     return results;
	


// }

// console.log(lonelyinteger(strings,queries))


// let arr=[1 ,2 ,3 ,4 ,5];
// let arr=[7 ,69 ,2 ,221 ,8974];

// function miniMaxSum(arr) {
//     // Write your code here
// let sum=0
// let sum1=0
// for(let i=0;i<arr.length-1;i++){
//     sum+=arr[i]
// }
// for(let i=1;i<arr.length;i++){
//     sum1+=arr[i]
// }

// return console.log(sum ,sum1)
// }

// console.log(miniMaxSum(arr))
// "(123) 456-7890"

// function createPhoneNumber(numbers){
// 	let firtThree=numbers.splice(0,3);
// 	let nextThree=numbers.splice(0,3);

// 	let remaining=numbers
//   console.log("🚀 ~ file: commonfile.js ~ line 874 ~ createPhoneNumber ~ remaining", remaining)
//   console.log("("+firtThree.join('').toString() + ")" +' ' + nextThree.join('').toString() +'-'+ remaining.join('').toString())
 
// }
//  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))



// var str="How can mirrors be real if our eyes aren't real";


// function capitlizeFirst(str){
// 		let splitStr=str.split(' ')
// 		let capStr;
// 		let jordanString=[]
//   for(let i=0;i<splitStr.length;i++) {

// 		 capStr= splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
		
// 		 jordanString.push(capStr)
	
//   }
//    return jordanString.join(' ');

// }
//  console.log(capitlizeFirst(str))

// var str = "How can mirrors be real if our eyes aren't real";
// String.prototype.toJadenCase = function () {
// 	console.log(this)
// 	let splitStr=this.split(' ')
// 		let capStr;
// 		let jordanString=[]
//   for(let i=0;i<splitStr.length;i++) {

// 		 capStr= splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
		
// 		 jordanString.push(capStr)
	
//   }
//    return jordanString.join(' ');

// };

// console.log(str.toJadenCase())

// var reverse = function(x) {
//     let xStr= '' + Math.abs(x);
//     let str = xStr.split('');
//     let reverse = str.reverse().join('');
//     let number =+reverse;
//     if (number > 2**31) return 0;
//     return (x < 0 ? -1 : 1) * number;
// };

// console.log(reverse(-123))


// function twoSun(arr,target) {

//     let obj={};

//     for(let i=0;i<arr.length;i++) {
//         if(obj[arr[i]] !== undefined) return [obj[arr[i]],i]
//         obj[target-arr[i]] =i
//      }
// }

// var nums = [3,2,4]
// var target = 6
// console.log(twoSun(nums,target))
// "use strict"
// var a="hi"

// if(true) {
    
//     var a="bye"
//     console.log(a)
// }

// console.log(a)


// function arrayDiff(a,b) {
//     return a.filter((item,i)=> !b.includes(item))
// }
// console.log(arrayDiff([1,2,3],[1,2]))


//even number first then followed by odd number
// let arr=[7 ,69 ,2 ,221 ,8974];

// function evenOddMerge() {

//     let oddArr=[];
//     let evenArr=[];
//     if (arr.length < 2) return arr;

//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] % 2 === 0) {
//             evenArr.push(arr[i])
//         } else {
//             oddArr.push(arr[i])
//         }
//     }
   
//     return [...evenArr,...oddArr]
// }
// console.log(evenOddMerge(arr))


// let str="megh@123)*&";

// for(let i=0;i<str.length;i++) {
//             if(str.indexOf(str[i]) > -1) {
//                 return console.log("valid")
//             } else {
//                 return console.log("invalid")
//             }
//         }


//        let arr=[1,0,2,3,0,4,5,0]
// var duplicateZeros = function(arr) {
   

//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] === 0) {
         
//           arr.splice(++i,0,0)
//           arr.pop();
//         }
//     }
  
//   console.log(arr)

// };

// console.log(duplicateZeros(arr))

// let array = [-7, -3, 1, 9, 22, 30]
// let targetSum = 10
// function twoNumberSum(array, targetSum) {
//     // Write your code here.
//     let obj={};
//     for(let i=0;i<array.length;i++) {
//       let a=array[i]
//       console.log("kk",obj)
//       if(obj[a] !== undefined) return [array[obj[a]],array[i]]
//        obj[targetSum - a] = i
//     }
  

//   }


//   function sortedSquaredArray(array) {
//     // Write your code here.
//     let sqrArr=[]
//     array.sort((a,b)=> Math.abs(a) - Math.abs(b)).reduce((acc,curr)=>{
//       return sqrArr.push(curr*curr);
//     },0)
 
//     return sqrArr;
//   }
//   console.log(sortedSquaredArray(array))


// let characters = "Bste!hetsi ogEAxpelrt x "
// let document = "AlgoExpert is the Best!"



// function isDocument(characters, document) {

//     let cObj={};
//     let dObj={};
    

//     for(let i=0;i<characters.length;i++) {
//         let char=characters[i]
//         if(cObj[char] === undefined) 
//         {
//             cObj[char] = 1
//         } else {
//             cObj[char]++
//         }
//     }
//     for(let i=0;i<document.length;i++) {
//         let doc=document[i]
//         dObj[doc]=dObj[doc] +1 || 1
//         if(cObj[doc] ===undefined) 
//         {
//            return false
//         } 
//         if(dObj[doc] > cObj[doc]) {
//             return false
//         }
//     }
//   return true

   
// }

// console.log(isDocument(characters,document))


// function firstDuplicateValue(array) {
//     // Write your code here.
//       var obj={};
      
//       for(let i=0;i<array.length;i++) {
//           if(obj[array[i]] === undefined) {
//                obj[array[i]] =1;
              
       
//           }else {
//               obj[array[i]]++
//               return array[i]
//           }
//       }
   
     
//    return -1
//   }

//   console.log(firstDuplicateValue([6, 15, 7, 10, 9, 14, 10, 1, 10, 1, 2, 11, 1, 6, 8]))



// function moveElementToEnd(array, toMove) {
//     // Write your code here.
//     let movedArr=[]
//     let i=0
//     while(array.length) {
//         ++i
//         let arr=array[i];
//         if(arr === toMove) {
//             movedArr.push(...array.splice(i,1))
//             --i;
//         }
        
//     }
//    return [...array,...movedArr];
//   }
//   console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2],2))


// let str="AlgoExpert is the best!"
// function reverseWordsInString(str) {
//     let reverseStr=[]
//     for(let i=str.length;i--;) {
//          console.log(str[i])
//             reverseStr.push(str[i])
//     }
//    return reverseStr.join('')
//   }

//   console.log(reverseWordsInString(str))  //best! the is AlgoExpert
// function arrayDiff(a,b){
//     return a.filter((item,i)=> !b.includes(item))
// }

// console.log(arrayDiff([1,2,3],[1,2]))


// Get the nth Fibonacci number in O(n) time and O(1) space complexity.
//Javascript
// function fib(n){
//   let [x, y] = [0, 1]
//   while (n > 0){
//     [x, y] = [y, x + y]
//     n -= 1
//   }
//   return x
// }
// let a = [1,2,3,4]
// a[1.2] = 1.5
// console.log(a)

// var megh={}

// var shiv={key:'shivali'}
// var shiv2={key:'shivali2'}

// megh[shiv]='patil';
// megh[shiv2]='patil2';


// console.log(megh[shiv])

// var a;
// if (a = (1+1==2)) {
//     console.log(a);
// } else {
//     console.log('false');
// }

// setTimeout(function() {
//   setTimeout(function() {
//     console.log('foo');
//   }, 50);
// }, 100);
// setTimeout(function() {
//   setTimeout(function() {
//     console.log('baz');
//   }, 100);
// }, 50);

// function a() {
//   console.log(this);
// }
// a.call(null);

// var myArr = ['foo', 'bar', 'baz'];
// myArr[2];
// console.log('2' in myArr);

// console.log("1" - - "1")

// var person={
//   name:'abc',
//   address:{
//     location:'belgaum',
//     lat:'120'
//   },
//   lastName:'patil'
// }

// console.log(JSON.stringify(person))

//{"name":"abc","address":{"location":"belgaum","lat":"120"},"lastName":"patil"}

// function a(){
//   console.log('asd')
// }
// const x=a()

// console.log(x)

// function a() {
//   let a = "ABC";
//   return function() {
//       let b = "def";
//       console.log(a, b);
//   }
// }

// //  const x = a()();           


//  const x = a();
//  console.log("🚀 ~ file: commonfile.js ~ line 1224 ~ x", x())

// var str="xyab";
// var str1="xzca";

// function coo(str,str1) {
//   let cmnStr=[]
//   for(let i=0;i<str.length;i++) {
//     if(str.includes(str1[i])) {
//         cmnStr.push(str1[i])
//     }
//   }
//   return cmnStr.join('')
// }

// console.log(coo(str,str1))

// let findPermutations = (string) => {
//   if (!string || typeof string !== "string"){
//     return "Please enter a string"
//   } else if (string.length < 2 ){
//     return string
//   }

//   let permutationsArray = [] 
   
//   for (let i = 0; i < string.length; i++){
//     let char = string[i]

//     if (string.indexOf(char) != i)
//     continue

//     let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

//     for (let permutation of findPermutations(remainingChars)){
//       permutationsArray.push(char + permutation) }
//   }
//   return permutationsArray
// }

// console.log(findPermutations('abc'))
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