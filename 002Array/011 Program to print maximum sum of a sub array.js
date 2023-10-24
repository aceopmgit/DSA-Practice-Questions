/*
Given an array find the maximum sum subarray. Return the maximum sum of the subarray.

Input:-

[5,2,-4,-5, 3,-1,2,3,1]

Output:-

8

Reason :- 3,-1,2,3,1 is the maximum subarray possible.
*/

                                     

                                     //Code

{
const a=[5,2,-4,-5, 3,-1,2,3,1];
let max=a[0];
for(let i=0;i<a.length;i++){
  let sum=0;
  for(let j=i;j<a.length;j++){
    sum=sum+a[j];
    if(sum>max){
      max=sum;
    }
  }
}
console.log(max);
}

                                           // Or
{
const a=[5,2,-4,-5, 3,-1,2,3,1];
let max=a[0];
let l=a.length;
for(let i=0;i<l;i++){
  for(let j=i;j<l;j++){
    let sum =0;
    for(let k=i;k<=j;k++){
      sum=sum+a[k];
    }
    if(sum>max){
      max=sum;
    }
  }
}
console.log(max);
}


