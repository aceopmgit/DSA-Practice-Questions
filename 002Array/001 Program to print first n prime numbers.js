{
    let n =5;
          let arr = [];
          for (let i = 2; arr.length < n; i++) {
            var flag = 0;
            for (let k = 2; k <= i; k++) {
              if (i % k == 0 && i > k) {
                flag = 1; //if i is divisible by any small number than it is not prime number
              } else if (i % k == 0 && flag != 1) {
                arr.push(i);
              }
            }
          }
        
        
      
        for(let i=0;i<=n-1;i++){
          console.log(arr[i]);
        }
    }
    
    
                                           // OR
    
    {
    let n=5;
    let arr=[];
    for(let i=2;arr.length<n;i++){
      var flag=0;
      for(let k=2;k<=i;k++){
        if(i%k==0 && i>k){
          flag=1;
        }
        else if(i%k==0 && flag !=1){
          arr.push(i);
        }
      }
    }
    for(let i=0;i<arr.length;i++){
      console.log(arr[i]);
    }
    
    }
    
    /*
    Output:
    
    2
    3
    5
    7
    11
    */
    
    
                                          // OR
    
    {
    let n=20;
    let a=[];
    
    for(let i=2;a.length<n;i++){
      let flag=0;
      for(let j=2;j<=i;j++){
        if(i%j==0 && j<i){
          //flag=1;
          break;
        }
        if(i%j==0 ){
          a.push(i);
        }
      }
    }
    
    for(let i=0;i<a.length;i++){
      console.log(a[i])
    }
    
    }
    
                                               //OR
    {
    let n=10;
    let a=[];
    
    for(let i=2;a.length<n;i++){
      let flag=0;
      for(let k=2;k<=i;k++){
        if(i%k===0 && k<i){
          flag=1;
          break;
        }
      }
      if(flag==0){
        a.push(i)
      }
    }
    console.log(a)
    
    }
                                           //OR
    {
    let a=[]
    let n=10;
    for(let i=2;a.length<n;i++){
      for(let j=2;j<=i;j++){
        if(i%j===0 && j<i){
          break;
        }
        if(i%j===0){
          a.push(i)
        }
      }
    }
    console.log(a)
    
    }    