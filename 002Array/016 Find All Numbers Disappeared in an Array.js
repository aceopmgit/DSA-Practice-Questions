//Program using another array (Best Solution)
{
    let nums= [4,3,2,7,8,2,3,1];
    let n=nums.length;
    let b=[]
    
    
    for(let i=0;i<n;i++){
      let ind=Math.abs(nums[i])-1
      if(nums[ind]>0){
        nums[ind]=nums[ind]*-1
      }
      
    }
    
     for(let i=0;i<n;i++)
    {
      if(nums[i]>0){
        b.push(i+1)
      }
    }
    
    }
    //                                OR(Good Solution)
    
    {
    let n=nums.length;
    let b=new Array(n+1).fill(0)
    console.log(b)
    
    for(let i=0;i<n;i++){
      if(nums[i]>=1 && nums[i]<=n){
        b[nums[i]]=-1
      }
    }
    console.log(b)
     nums=[]
    
    for(let i=1;i<b.length;i++){
      if(b[i]===0){
        nums.push(i)
      }
    }
    return nums
    }
    
    
    //                                       OR
    {
    let l=nums.length;
        let b=[];
        let index=0;
        for(let i=1;i<=l;i++){
            b.push(i);
            }
    
        console.log(b);
    
        for(let j=1;j<=l;j++){
            for(let i=0;i<l;i++){
                if(nums[i]==j){
                    index=b.indexOf(j);
                   if(index>-1){
                      b.splice(index,1);
                   }
    
                }
            }
        }
        console.log(b);
    }
    
    /*
    Output
    [
      1, 2, 3, 4,
      5, 6, 7, 8
    ]
    
    [ 5, 6 ]
    */
    
    //Without using second array
    
    //let a=[2,3,7,8];
    {
    let a=[6,6,6,6,6];
    let l=a.length;
    
    for(let i=1;i<=l;i++){
      let count=0;
      for(let j=0;j<a.length;j++){
        if(a[j]==i){
          count+=1;
          
          if(j>-1){
            a.splice(j,1);
          }
          j-=1;
          
        }
      }
      if(count==0){
        a.push(i);
      }
    }
    console.log(a);
    
    
    for(let i=0;i<a.length;i++){
      
      count=0;
      for(let j=1;j<=l;j++){
        if(a[i]==j){
          count+=1;
          i+=1;
        }
      }
      if(count==0){
        if(i>-1){
          a.splice(i,1);
        }
        i=i-1;
      }
    }
    console.log(a)
    
    
    }
    
                                                //OR(Not Ideal) 
    
    {
    let nums=[1,2,4,5,6,7,9,10];
    let n=nums.length;
    let b=new Array(n+1).fill(0);
    
    for(let i=0;i<nums.length;i++){
      if(nums[i]>n)
      
      for(let j=1;j<b.length;j++){
        if(b[j]!=1){
          if(nums[i]==j){
            b[j]=1;
            break
          }
        }
      }
      
      }
    //console.log(b)
    //var ans=""
    var c=[]
    for(let i=1;i<b.length;i++){
      if(b[i]==0){
        c.push(i)
      }
    }
    console.log(c)
    
    }
                                  //OR(leetcode run successfully)
    
    {
    let nums=[0,0,0,0,0,0,0,0,0]
    let n=nums.length;
    let b=new Array(n+1).fill(0);
    let s=new Set();
    
    for(let i=nums.length-1;i>=0;i--){
      //if(s.has(nums[i]))
      if(nums[i]>n ||nums[i]<1){
        nums.pop()
      }
      if(s.has(nums[i])){
        continue
      }
      else{
        s.add(nums[i]);
      }
      if(nums[i]>0){
        b[nums[i]]=1;
      }
    }
    //console.log(b);
    
    let c=[];
    for(let i=1;i<b.length;i++){
      if(b[i]==0){
        c.push(i);
      }
    }
    //console.log(c)
    
    }
    
    