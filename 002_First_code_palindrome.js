let n=122
let p=n
let d=0
let r=0
while(n>0){
  d=n%10;
  r=r*10 +d;
  n=Math.floor(n/10);
}
if(r===p){
  console.log(p," is palendrome Number ");
}
else{
  console.log(p, "is not a palendrome number");
}
