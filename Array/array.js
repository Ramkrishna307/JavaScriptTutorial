let arr=[1,2,3];

delete arr[0]; //removing 1 from the array

console.log(arr[0]);


//now the size of array will remain same
// Actually the array is object and we are deleting the value not the key

console.log(arr.length);


//Splice

let arr2=[10,20,30];
//Starting from the index 1 it removed 1 element.
arr2.splice(1,1);

console.log(arr2);

let arr3=[4,5,6,7,8,9];
// first no is starting of deleting 
// second no is no of element to be delete
// third are the elements needs to add after the last delete
arr3.splice(2,2,23,24);
console.log(arr3);