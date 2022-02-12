
const fs = require('fs').writeFileSync;
const app =require('./app');
const colors = require('colors');

var a =10;
var b=20;

const arr=[1,2,3,4,5,3,3]
console.log(a+b);

console.log(app.x +' and '+ app.y);

console.log(app.z());

arr.filter((item)=>{
    console.log(item)
})

let result=
arr.filter((item)=>{
    return item===3
})
console.log(result);
console.log("colors".red)

//fs.writeFileSync("demo.txt","demo text")
console.log(__dirname);
fs("demo2.txt","global")

console.log("colors".green)