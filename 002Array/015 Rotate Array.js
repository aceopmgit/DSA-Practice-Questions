//Rotating array with the use of another array.
{
    let a=[1,2,3,4,5,6];
    let k=3;
    let c=0;
    let b=new Array(a.length);
    for(let i=0;i<a.length;i++){
      c=(i+k)%a.length;
      b[c]=a[i];
    }
    console.log(b);
    }
    
    
                                             //OR
    
    //Rotating array without using other array
    
    {
    let a=[1,2,3,4,5,6];
    let k=3;
    for(let i=0;i<k;i++){
      let val=a[0];
      for(let j=1;j<a.length;j++){
        let temp=a[j];
        a[j]=val;
        val=temp;
        a[0]=temp;
      }
    }
    console.log(a);
    
    }
    
    //OUTPUT
    //[4,5,6,1,2,3]
    
                                            // OR
    let a=[1,2,3,4,5,6];
    let l=a.length;
    let count=0;
    let i=0;
    let val=a[0];
    let rep=0;
    var k=3;
    
    
    while(count<l){
      let pos=(i+k)%l;
      let temp=a[pos];
      a[pos]=val;
      i=pos;
    
      
      if(pos==rep){
        rep=(i+1)%l;
        val=a[rep];
        i=rep;
        count++;
        continue;
      }
        val=temp;
        count++
    }
      
      console.log(a);
    
    
    
    //                                          OR
    
    {
    let a=[1,2,3,4,5,6];
    let k=3;
    
    let pos=0;
    let i=0;
    let rep=0;
    let count=0;
    let val=a[0];
    
    while(count<a.length){
      pos=(i+k)%a.length;
      let temp=a[pos];
      a[pos]=val;
      i=pos;
      val=temp;
      count++;
      
      if(rep==pos){
        rep=(i+1)%a.length;
        val=a[rep];
        i=rep;
        //count++;
        //continue
      }
      //val=temp;
      //count++;
      
    }
    console.log(a)
    }