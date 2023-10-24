/*
Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

*/


                                      //Code
{
const a=[1,2,3,4];
const b=[];
var l=a.length;
for(let i=0;i<=0;i++){
  for(let j=i;j<l;j++){
   var sum =0;
    for(let k=i;k<=j;k++){
      sum=sum+a[k];
     
    }
    b.push(sum);
  }
}
console.log(b);

}


                                          //OR(More Efficient)

{
let nums=[1,2,3,4];
let b=[];
let sum=0

for(let i=0;i<nums.length;i++){
  sum=sum+nums[i];
  b.push(sum);
}
console.log(b)

}
