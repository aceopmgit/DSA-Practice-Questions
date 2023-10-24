{
    a=[8,0,1,7,3];
    for(let i=0;i<a.length;i++){
      let min=a[i];
      let j=i+1;
      while(j<a.length){
        if(a[j]<min){
          let key=min;
          min=a[j];
          a[j]=key;
          
        }
        j++;
            
      }
      
        a[i]=min;
    }
    console.log(a);
    
    }
    //OUTPUT :[0,1,3,7,8]
    
                                              // OR
    {
    let a=[7,1,6,5,3,0];
    let l=a.length;
    let temp=0;
    
    for(let i=0;i<l;i++){
      let min=a[i];
      
      let key=i
      for(let j=i+1;j<l;j++){
        //console.log(j)
        if(a[j]<min){
          min=a[j];
          key=j;
        }
        
        //console.log(j)
      }
      temp=a[i];
      a[i]=a[key];
      a[key]=temp;
      //console.log(a)
    }
    console.log(a)
    
    }
    
                                             //OR
    
    {
    let a=[-6,5,-4,3,-2,1];
    let l=a.length;
    
    for(let i=0;i<l;i++){
      let min=a[i];
      j=i+1;
      while(j<l){
        if(a[j]<min){
          min=a[j];
          var temp=a[i];
          a[i]=a[j];
          a[j]=temp;
          
        }
        j++;
      }
     // a[key]=a[i];
      //a[i]=min;
    }
    console.log(a)
    }