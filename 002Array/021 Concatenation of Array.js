var nums=[1,2,1];
var l=nums.length;
var ans=nums;

for(let i=0;ans.length<2*l;i++){
  ans.push(nums[i]);
  }

console.log(ans)

//OUTPUT
//[1,2,1,1,2,1]
