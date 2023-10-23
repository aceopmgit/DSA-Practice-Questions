//For Smallest Digit
let n=1020956;
let m=n;
let d=0;
let a=0;

while(n>0){
  d=n%10;
  if(d<=a){
  a=d;
  }
  n=Math.floor(n/10);
}
console.log(a,"is the smallest digit in ",m);





//For Greatest Digit
{
    let n=659856;
    let m=n;
    let d=0;
    let a=0;
    
    while(n>0){
      d=n%10;
      if(d>=a){
      a=d;
      }
      n=Math.floor(n/10);
    }
    console.log(a,"is the largest digit in ",m);
    
}


