//Sorting an array using bubble sort algorithm in ascending order.
let nums=[5,1,1,2,0,0] 
let l=nums.length;
    let temp=0;
    for(let i=0;i<l-1;i++)
  {
        for(let j=0;j<l-1-i;j++)
       {
            if(nums[j]>nums[j+1])
           {
                temp=nums[j+1];
                nums[j+1]=nums[j];
                nums[j]=temp;
            }
        }
    }
    console.log(nums);

/*
OUTPUT
[0,0,1,1,2,5]
*/