 function add(a,b){
    return a+b;
}
const addfun=function add(a,b){
    return a+b;
}
console.log(add(5,4))
console.log("sum",addfun(3,4))
//arrow function
const sum=(a,b)=>a+b;
console.log("sum is",sum(5,7))
import square,{div,mul}from"./utils.js";
console.log( "your divided num is",div(10,5))
console.log( "here is your multipy",mul(3,2))
console.log("square is",square(2))



//higher order method

//for each

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number,index,Array) => {
  console.log(number,index,Array);
});

//map
const nums = [1, 2, 3, 4, 5];
const squared = nums.map(num => num * num);

console.log(squared);

//filter

const marks=[45,34,56,32,45];
const select =marks.filter(mark=> mark>=40);
console.log(select);






//callback function
function callme(){
  console.log("can you call me");
}
function manjit(tharu){
  console.log("establishing connection");
  tharu();
  console.log("call declined");
}
manjit(callme);
console.log(manjit);



//promise& async function

async function fetchdata(){
let tharu=new Promise((resolve, reject) => {
  setTimeout(()=>{ 
     let age=19;
    if(age>18)
      resolve('you can enter on flight');
    else
    reject("you don't have any permission more");

  },4000);
});

return tharu;

// tharu.then(data=>console.log(data,"i am here"));
// tharu.catch(error=>console.log("i am not here"));
}
async function getdata(){
  let data= await fetchdata();
  console.log("flight run away",data);
}
getdata();
console.log(getdata);


