//doing same things with both of em
function temp(){
    return new Promise((resolve,reject)=>{
        var num=Math.floor(Math.random()*10);
        if(num>3) resolve(num);
        else reject("number too small");
    })
}

//then-catch, call back hell
temp()
    .then((x)=>console.log(x))
    .catch((x)=>console.log(x))


//asycn await, async/await is better when you want to handle multiple async steps in sequence
async function run(){
    try{
        const x=await temp();
        console.log(x);
    }
    catch(err){
        console.log(err);
    }
}
run();