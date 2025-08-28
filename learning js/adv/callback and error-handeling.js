function greeting(error,name){
    if(error){
        alert("Please provide a name");
    }else{
        alert(`Hey, ${name}`)
    }
}
function processInput(callback){
    const name=prompt("whats your name bud");
    callback(name===null,name);
}
processInput(greeting);