const secLarg=(arr)=>{
    let sec=-Infinity;
    let max=-Infinity;
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>max){
            sec=max;
            max=arr[i];}

        else if(max>arr[i] && arr[i]>sec){
            sec=arr[i];
        }
            
        
    }return sec 
}
let marks=[20,4,5,2,1]
console.log(secLarg(marks))