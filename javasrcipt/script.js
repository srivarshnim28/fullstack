var a="10";
var b="25";
console.log(a+b)
console.log(typeof a);
console.log(typeof b);
a=true
console.log(typeof a);
var c;
console.log(typeof c);
var c = null;
console.log(c)

console.log(a==b);

console.log(a==b);
console.log(a===b)
console.log(a!=b);
console.log(a!==b);

var num=2;
var result= num%2===0?"Even":"Odd"
console.log(result);

var mark=34;
var result = (mark>=80)?"o":(mark>=60)? "A+":(mark>=35)?"P":"F"
console.log(result);

function sum(a,b){
    console.log(a+b)
}
sum(10,20)

var sum = ()=>{
    var a=10;
    var b=20;
    console.log(a+b)
}
sum();

let arr = [10,20,30,40];
let arr2 = [...arr,50,60,70]
console.log(arr)
console.log(arr2)

var marks =[90,95,96,100,99];
var [m1,m2,m3,m4,m5] = marks;
console.log(m1)
console.log(m2)
console.log(m3)                                                                                                 
console.log(m4)
console.log(m5)
