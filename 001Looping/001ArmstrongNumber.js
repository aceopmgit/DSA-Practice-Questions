let n=378;
let m=n;
let d=0;
let a=0;
while(n>0){
  d=n%10;
  a=a+Math.pow(d,3);
  n=Math.floor(n/10);
}
if(a===m){
  console.log(m,"is an armstrong number");
}
else{
  console.log(m,"is not an armstrong number");
}