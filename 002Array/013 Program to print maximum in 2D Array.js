/*
Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
*/


                                         //Code
const a=[[1,2,3],[7,2,1],[8,8,8]];
var l=a.length
let max=-99999999999999999999999999999999999999999999999999999999999999;
/*for(let j=0;j<a[0].length;j++){
  max=max+a[0][j];
}*/
for(let i=0;i<l;i++){
  let sum=0;
  for(let j=0;j<a[i].length;j++){
    sum=sum+a[i][j];
  }
  if(sum>max){
    max=sum;
  }
}

console.log(max);

