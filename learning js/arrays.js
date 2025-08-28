let arr=["apple","mango"];

//push
arr.push("orange");
console.log(arr);

//findIndex
var index1=arr.findIndex((item)=>{return item==="mango"})
var index2=arr.findIndex((item)=> item==="apple")
console.log(index1+" "+index2)

//filer
let newarr=arr.filter((item)=>item!=="apple");
console.log(newarr)

//map
let newarr1=arr.map((name,index)=>{
    if(name==="mango")return "good "+name;
    else return "bad "+name;
})
console.log(newarr1)


//loops
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log()
arr.forEach(element => {
    console.log(element);
});


//destructuring
const nums=[1,2];
const [x,y]=nums;
console.log(x);
console.log(y);

