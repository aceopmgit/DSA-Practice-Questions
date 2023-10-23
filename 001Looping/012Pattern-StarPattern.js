/*

Q.)Print the following pattern using for loops

*****

****

***

**

*

*/


for(let i=1;i<=5;i++){
    let str="";
    for(let j=10;j<=15-i;j++){
        str=str+"*";
    }
    console.log(str);
}


/*
Q.)Print the following pattern using while loops

*****

****

***

**

*

*/


{
let i=1;

while(i<=5){
    let str="";
    let j=10;
    while(j<=15-i){
        str=str+"*";
        j++;
    }
    console.log(str);
    i++;
}
}    


/*
Q.)Print the following pattern using for loop

*****

****

***

**

*

*

**

***

****

*****

*/

for(let i=1;i<=10;i++){
   let str="";
   for(let j=10;j<=15-i;j++){
     str=str+"*";
   }
   for(let k=10;k<=i+4;k++){
     str=str+"*";
   }
   console.log(str);
}


/*

Q.)Print the following pattern using for loop
*    *
**   **
***  ***
**** ****
**********

*/

for(let i=1;i<=5;i++){
   let str="";
   for(let j=1;j<=i;j++){
       str=str+"*";
   }
   for(let k=10;k<=14-i;k++){
       str=str+" ";
   }
   for(let j=1;j<=i;j++){
       str=str+"*";
   }
   console.log(str);
}



/*
Q.)Print the following pattern using while loop

*****

****

***

**

*

*

**

***

****

*****

*/


let i=1;
while(i<=10){
  let str="";
  let j=10;
  while(j<=15-i){
    str=str+"*";
    j++;
  }
  let k=10;
  while(k<=i+4){
    str=str+"*";
    k++
  }
  console.log(str);
  i++;
}


/*
Q.)How many times the highlighted text (bold and underlined) is being checked . Analyze and just print the answer
*/
for(let i=1;i<=5;i++)

{

for(let j=1;j<=5;j++)

{

System.out.println(j);

}

}


console.log(30);