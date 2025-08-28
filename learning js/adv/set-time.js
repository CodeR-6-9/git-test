//setTimeout(function, milliseconds);
setTimeout(()=>console.log("hey bro"),3000);

// setInterval(function, milliseconds);
let count=0;
const interval=setInterval(()=>{
    console.log("this is in interval");
    count++;
    if(count>=2){
        clearInterval(interval);
    }
},4000);
var arr=[1,2,3]
arr.forEach((element) => {
    console.log(element);
});