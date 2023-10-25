//Extracting data from HTML Form


let fname=document.getElementById('fname').value;
console.log(fname);


let adress=document.getElementById('adress').value;
console.log(adress);


let email=document.getElementById('email').value;
console.log(email);


//geting value from dropdown

let car=document.querySelector('#cars').value;
console.log(car);


//extracting from Radio button
let radio = document.querySelector('input[name="subject"]:checked').value;
console.log(radio);

let arr=[];
let cheakbox=document.getElementsByName('skill')
console.log(cheakbox);

for(let i=0;i<cheakbox.length;i++){
    if(cheakbox[i].checked){
       arr.push(cheakbox[i].value)
    }
}

console.log(arr);
