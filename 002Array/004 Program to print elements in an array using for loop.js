const actors=[{name:'Actor 1',payment:100},{name:'Actor 2',payment:200},{name:'Actor 3',payament:150}];
for(let i=0;i<actors.length;i++){
  console.log(actors[i]);
}

/*
output
{ name: 'Actor 1', payment: 100 }
{ name: 'Actor 2', payment: 200 }
{ name: 'Actor 3', payament: 150 }

*/

//Program to reduce the payment of each actor by 10 and print the array using for loop

{
    const actors=[{name:'Actor 1',payment:100},{name:'Actor 2',payment:200},{name:'Actor 3',payment:150}];
for(let i=0;i<actors.length;i++){
  actors[i].payment=actors[i].payment-10;
}
console.log(actors);

}

/*
output
[
  { name: 'Actor 1', payment: 90 },
  { name: 'Actor 2', payment: 190 },
  { name: 'Actor 3', payment: 140 }
]
*/