
{
    let nums=[2,5,1,3];
    l=nums.length
    let ans=[];
    let n=Math.floor(nums.length/2);    
    let a=-n;
    let b=-(n-1);
    //console.log(a+" "+b)
    let i=0;
    let j=n;
    while(i<n){
      ans[n+a]=nums[i];
      a=a+2;
      i=i+1;
      ans[n+b]=nums[j];
      b=b+2;
      j=j+1;
    }
    console.log(ans);
    
    }
    
    
    //OUTPUT
    //[2,1,5,3]
    
    
                                            //OR
    {
    let nums=[2,5,1,0,0,0];
    l=nums.length
    let ans=[];
    ans[0]=nums[0];
    let n=Math.floor(nums.length/2);
    let j=1;
    for(let i=1;i<l;i++){
      if(i%2==0){
        ans[i]=nums[j];
        j+=1;
      }
      else{
        ans[i]=nums[n];
        n=n+1
      }
    }
    console.log(ans)
    
    }
    
    //OUTPUT
    //[2,0,5,0,1,0]