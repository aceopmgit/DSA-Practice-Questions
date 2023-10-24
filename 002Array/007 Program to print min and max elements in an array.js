const a=[-13,-87,-17,-83,-12,-88,-93,-7,-26,-740,-35,-65,-62,-38,-100]
console.log(a);
let max=a[1];
let min=a[1];
for(let i=0;i<a.length;i++){
  if(a[i]>max){
    max=a[i];
  }
  if(a[i]<min){
    min=a[i];
  }
  
}
console.log('Max element in Array '+max);
console.log('Min element in Array '+min);

/*OUTPUT
[
  -13,  -87,  -17, -83,
  -12,  -88,  -93,  -7,
  -26, -740,  -35, -65,
  -62,  -38, -100
]
Max element in Array -7
Min element in Array -740
*/