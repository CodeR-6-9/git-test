function createCount(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}
let counter=createCount();
counter();
counter();

function func(x){
    let count=0;
    return function(y){
        count++;
        console.log(x+"this is "+count+" "+y);
    }
}
let temp=func("hey bruh ");
temp("call");
temp("call");
temp("call");
temp("call");
