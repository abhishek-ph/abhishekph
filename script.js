a=5;
var a=9;
var sum;
console.log(a);
let b=20;

console.log(b);
{
    let b=90;
    console.log(b)
}
console.log(typeof(b));
var st='I am a st';
var d=true;
var m;
console.log(typeof(m))
var arr1=['orange','apple',10]
console.log(arr1[0])
console.log(arr1.length)
arr1.push('pineapple')
console.log(arr1)
// object
let person={
    name:'maya',
    age:20,
    location:'tvm'
}
console.log(person.age)
let arr2=[{
    name:'mythili',
    age:30,
    location:'sasthamangalam'

},{ name:'maya',
    age:20,
    location:'tvm'
    
}]
console.log(arr2[1].name);
function add(x,y)
{
    sum=x+y;
    return sum;
    
}
add(2,3);
var s1=sum;
console.log(s1);
let j=1;
let c=++j;
console.log(j);
console.log(c);
if (a>b) {
    console.log('a is greater')
    
} else {
    console.log('b is greater')
    
}
var e=10;
var s='10';
if(e>s)
{
    console.log('a is greater')

}
else if (e===s) {
    console.log('e is equal to s')
    
} else {
    console.log('e is less')
    
}
//Looping Statements
var array=[1,2,3,4,5]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
for (const key in person) {
console.log(person[key])
}
for (const i of array) {
    console.log(i)
}
   