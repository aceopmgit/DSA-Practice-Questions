{
    let a=[4,3,2,5,1];
    for(let i=1;i<=a.length-1;i++){
      var key=a[i];
      var j=i-1;
      while(j>=0 && a[j]>key){
        a[j+1]=a[j];
        j--;
      }
      a[j+1]=key;
    }
    console.log(a);
    }
    
    //OUTPUT :[1,2,3,4,5]
    
                                              //OR
    
    
    for(let i=1;i<a.length;i++){
      var key=a[i];
      var j=i-1;
      while(j>=0 && a[j]>key){
        key=a[j+1];
        a[j+1]=a[j];
        a[j]=key;
        j--;
        
      }
      a[j+1]=key;
      
      
    }
    console.log(a);
    
    //OUTPUT :[1,2,3,4,5]