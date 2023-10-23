/*Q.)Print The following pattern
1
12
123
1234
12345
*/


for(let i=1;i<=5;i++){
    let a=1;
    let b="";
    for(let j=1;j<=i;j++){
      b=b+a;
      a++;
    }
    
    console.log(b);
    
    }
    
    /*
    Q.)Print the Pattern
    1
    21
    321
    4321
    54321
    */
    
    
    
    for(let i=1;i<=5;i++){
    let a=1;
    let b="";
    for(let j=1;j<=i;j++){
        b=a++ +b;
        
      
    }
    
    console.log(b);
    
    }
    
    
    /*
    Q.)Print the following pattern
    2
    22
    222
    2222
    22222
    */
    
    
    
    for(let i=1;i<=5;i++){
    let a=2;
    let b="";
    for(let j=1;j<=i;j++){
        b=b+ a;
        
      
    }
    a++;
    console.log(b);
    
    }