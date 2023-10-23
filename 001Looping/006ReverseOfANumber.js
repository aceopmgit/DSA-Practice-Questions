let n=122;
let d=0;
let r=0;
while(n>0){
  d=n%10;
  r=r*10 +d;
  n=Math.floor(n/10);
}
console.log(r);


