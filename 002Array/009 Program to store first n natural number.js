{
    let n=10;
    const a=[];
    for(let i=1;i<=n;i++){
      a.push(i);
    }
    console.log(a);
    
    }
    
                                               //OR
    
    {
    let n=10;
    const a=[];
    for(let i=1;a.length<n;i++){
      a.push(i);
    }
    console.log(a);
    
    }
    
                                           //OR
    
    {
    let a=new Array(10);
    let b=1;
    
    for(let i=0;i<a.length;i++){
      a[i]=b;
      b+=1
    }
    console.log(a)
    
    }
    
    
    /*
    Output:
    
    [
      1, 2, 3, 4,  5,
      6, 7, 8, 9, 10
    ]
    */