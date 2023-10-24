/*
write the code to print all the subarrays possible. Note - print in the similar way as given here.

Input:-

[1,2,3,4,5]

Output:-

1
12
123
1234
12345
2
23
234
2345
3
34
345
4
45
5
*/

                  //Code
{

const a=[1,2,3,4,5];
for(let i=0;i<a.length;i++){
  for(let j=i;j<a.length;j++){
    var str="";
    for(let k=i;k<=j;k++){
      str=str+a[k];
    }
    console.log(str)
  }

}

}

                                        //OR

{

let a=[1,2,3,4,5]
let max=0
for(let i=0;i<a.length;i++){
  let str=""
  for(let j=i;j<a.length;j++){
    str=str+a[j];
    console.log(str);
  }
}

}




/*
Program to print the follwing pattern for array   a=[2,4,8,9,6];

24896
 4896
 896
 96
 6
*/


{
let a=[2,4,8,9,6];
l=a.length;
let str=" ";
for(let i=0;i<l;i++){
  for(let j=i;j<l;j++){
     str=" ";
    for(let k=i;k<=j;k++){
      str=str+a[k];
      
    }
    
  }
  console.log(str);
}

}