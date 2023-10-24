//                                 (Best Solution)
{
    let arr=[1,4,2,5,3];
    
    let sum=0
    
    for(let i=0;i<arr.length;i++){
      let temp=0;
      let count=0;
      for(let j=i;j<arr.length;j++){
        count+=1;
        if(count%2===0){
          temp+=arr[j];
        }
        else{
          temp+=arr[j];
          sum+=temp
        }
      }
    }
    console.log(sum)
    
    }
    
                                           //OR
    
    {
    let a=[1,4,2,5,3];
    let l=a.length;
    let sum=0;
    for(let i=0;i<l;i++){
      for(let j=i;j<l;j=j+2){
        for(let k=i;k<=j;k++){
          sum=sum+a[k]
        }
      }
    }
    console.log(sum);
    }
    
    
                                                //OR
    {
    let a=[1,4,2,5,3];
    let l=a.length;
    let sum=0
    for(let i=0;i<l;i++){
      for(let j=i;j<l;j++){
        let b=[];
        for(let k=i;k<=j;k++){
          b.push(a[k]);
        }
        if(b.length %2!=0){
          for(let c=0;c<b.length;c++){
            sum=sum+b[c];
          }
        }
      }
    }
    console.log(sum)
    }
    
    
                                          //OR
    
    {
    
    let a=[1,4,2,5,3];
    let l=a.length;
    let sum=0
    
    for(let i=0;i<l;i++){
      let b=[];
      for(let j=i;j<l;j++){
        
        b.push(a[j]);
       // console.log(b)
        if(b.length %2!=0){
          for(let k=0;k<b.length;k++){
            sum=sum+b[k];
          }
        }
    
    
      }
    }
    console.log(sum)
    }
    
    
    /*
    OUTPUT
    58
    
    
    Explanation: The odd-length subarrays of arr and their sums are:
    [1] = 1
    [4] = 4
    [2] = 2
    [5] = 5
    [3] = 3
    [1,4,2] = 7
    [4,2,5] = 11
    [2,5,3] = 10
    [1,4,2,5,3] = 15
    If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
    */