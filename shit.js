const limit = 100;
const arr  = new Array(limit+1).fill(new Array(limit+1));
const lis = [];
function getSumSubsets(last_element,expectedSum,sum,depth){
    let ans = 0;
    if(expectedSum==sum)ans = 1;
    else 
    for(let i = last_element+1;i<=expectedSum-sum;i++){
        let temp = arr[i][sum+i][depth];
        if(temp==-1)
        temp = getSumSubsets(i,expectedSum,sum+i,depth+1);
        arr[i][sum+i][depth] = temp;

        //RECORDS CHANGE HISTORY
        lis.push({a:i,b:sum+i,c:depth})
        ans+=temp;
    }
    return ans;
}
function solve(o){
    if(lis.length==0)
   for(let i = 0;i<limit+1;i++){
    for(let j = 0;j<limit+1;j++){
        arr[i][j] = new Array();
        //k for depth
        for(let k = 0;k<30;k++){
            arr[i][j].push(-1);
        }
    }
   }
   else{
    lis.forEach(l=>{
        arr[l.a][l.b][l.c] = -1;
    })
    lis.length = 0;
   }
   const a= getSumSubsets(0,o,0,0)
    console.log(o," :" ,a);
   // console.log(0.2*Math.pow(2,2000))
    //console.log(arr);
    return a;
}
let ans = 0;
for(let i = 0;i<=limit;i+=5)
ans+=solve(i);
console.log(ans);