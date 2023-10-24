let a=[1,3,7,3,1,7,2,4,6,4,6];
for(let i=0;i<a.length;i++){
  let temp=0;
  for(let j=0;j<a.length;j++){
    if(a[i]==a[j]){
      temp++;
    }
  }
  if(temp==1){
    console.log(a[i]);
  }
  
}

