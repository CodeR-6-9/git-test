var temp=1;

//single instance of promise

// const promise=new Promise(function(resolve,reject){
//     if(temp)resolve({status:"success",});
//     else reject({status:"Failed"});
// })
// promise
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(value){
//         console.log("hell nah")
//         console.log(value);
//     })



//using return from a function to use it multiple times
function promise(){
    return new Promise((resolve,reject)=>{
        if(temp)resolve({status:"success",});
        else reject({status:"Failed"});
    })
}
promise()
    .then(function(value){
        console.log(value);
    })
    .catch(function(value){
        console.log("hell nah")
        console.log(value);
    })

