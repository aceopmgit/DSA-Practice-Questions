let n=23;
let m=n;
let d=0;
let sd=0;
while(n>0){
  d=n%10;
  sd=sd+d;
  n=Math.floor(n/10);
}
console.log(sd,"is the sum of digits of ",m);

/*
Output
5 is the sum of digits of  23
It will not work if 0 is added infront of any number for example
023,019 etc.,
because A literal numeric value that starts with a 0 is 
always interpreted as an octal value
*/