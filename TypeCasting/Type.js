var a=undefined;
console.log(typeof(a))

a=a.toString();
console.log(typeof(a)) 


var a='123';
console.log(typeof a)


var b=Number(a); //Converting to Number


console.log(typeof(b)) 


let v=false;
console.log(typeof v);

let c=(Number)(v); //converting boolean to Number
console.log(typeof c);


// boolean to string
// Ture false ----->"   "

var a=true;
console.log(typeof a);

var a=(Number)(a);
console.log(a);



var b=false;


b=Number(b)
console.log(b);
console.log(typeof b);

// String ------> Boolen
// "RAM"-----> 1---->ture

var name="ram"

console.log(typeof name);

name=Boolean(name);
console.log(name);


