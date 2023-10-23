let n=20;
let m=1;
let o=0;
while(m<=n)
{
  if(n%m===0)
 {
    o=o+1;
  }
  m++;
}
if(o===2){
  console.log(n,"is a Prime Number");
}
else{
  console.log(n,"is not a Prime Number");
}


/*Output
20 is not a Prime Number
*/


                                       // OR



let checkPrime=(a)=>{
  let d=2;
  while(d<a){
  if(a%d===0){
    console.log("Not prime")
    return
  }
  d++
}
console.log("Prime Number")
  
  
}

checkPrime(103)
