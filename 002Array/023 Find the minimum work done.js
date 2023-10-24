/*
students are going to give the exams . 
some of them forgot to bring the pen for writing , 
but some students have extra pens .

You have given an array of integers where negative integer 
represents the extra pens the student has .
positive integers shows the need of pens that student has .
assume they are seating horizontally on different benches , 
the work for giving the pen to adjacent bench is 1 unit .
find minimum number of work required to fulfil the needs of 
all students

Note : It is guaranteed that sum of all the elements of the
array will be 0.

Example 1:
Input:
N = 5,
Arr[] = {5, -4, 1, -3, 1}

Output: 9
Explanation:  1th student can give 4 pens to 0th student,
total work needed 4*(1-0) = 4, 
new arr[] = 1,0,1,-3,1 now 3rd student can give pens to 0th, 
2th and 4th.
so total work needed = 1*(3-0)+1*(3-2)+1*(4-3) = 5 
So total work will be 4+5 = 9

Example 2: 
Input:
N = 6,

Arr[]={-1000, -1000, -1000, 1000, 1000, 1000}
Output: 9000
Explanation:  0th student give 1000 pens to 3rd student, 
total work needed 1000*(3-0) = 3000.
1st student give 1000 pens to 4th student, total work needed 
3000 + 1000*(3-0) = 6000.
2nd student give 1000 pens to 5th student, total work 
needed 6000 + 1000*(3-0) = 9000.
So total work will be 9000 unit.

*/

{
    const arr=[2,-2,3,-1,1,-4,1]
    const l=arr.length;
    let work=0;
    let index=0
    
    console.time("runtime");
    
    for(let i=0;i<l;i++){
      if(arr[i]>=0){
        continue
      }
      for(let j=i-1;j>=0;j--){
        
        if(arr[j]>0){
          let diff=arr[j]+arr[i]
          if(diff>=0){
          work=work+(Math.abs(arr[i])*(i-j))
          arr[j]=diff;
          arr[i]=0;
          
        }
        else{
          work=work+(arr[j]*(i-j))
          arr[j]=0
          arr[i]=diff;
          index=i;
        }
        }
        
      }
    }
    console.log(work)
    console.log(arr)
    
    for(let i=index;i<l;i++){
      if(arr[i]>=0){
        continue
      }
      
      for(let j=i+1;j<l;j++){
            if(arr[j]>0){
          let diff=arr[j]+arr[i]
          console.log(arr[i],arr[j])
          if(diff>=0){
          work=work+(Math.abs(arr[i])*(j-i))
          console.log(work)
          arr[j]=diff;
          arr[i]=0;
          
        }
        else{
          work=work+(arr[j]*(j-i))
          arr[j]=0
          arr[i]=diff;
          //index=i;
        }
        }
        
      }
    }
    console.timeEnd("runtime");
    console.log(work)
    
    }
                                            //OR
    const arr=[2,-2,3,-1,1,-4,1]
    
    let sum=0
    console.time("runtime");
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length;j++){
                if(arr[j]<0 && j!==i && arr[i]>=0){
                    if(arr[i]>=Math.abs(arr[j])){
                        arr[i]=arr[j]+arr[i]
                        sum+=Math.abs(i-j)*Math.abs(arr[j]);
                        arr[j]=0
                        
                    }
                    else{
                        arr[j]=arr[j]+arr[i]
                        sum+=Math.abs(i-j)*Math.abs(arr[i])
                        arr[i]=0
                        }
                    
                }
            }
        }
        console.timeEnd("runtime");
        console.log(sum)
    
    
    