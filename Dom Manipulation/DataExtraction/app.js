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








// Event and Event Handling in JavaScript

//Event is something which is happen to webpage

// There is two types of event 

//Browser specific event 

//Browser speciifc event happen in javaScript ====> resizing the browser window and scrolling up and down



//DOM specific event 
//Focusing the element    clicking the button     hovering a html element


//Event Handler

let fname2=document.getElementById('fname');

fname2.onfocus=function(){
    fname2.style.backgroundColor='red';
}


fname2.onblur=function(){
    fname2.style.backgroundColor='white';
}



let h2event=document.querySelector('#heading');

h2event.onmouseover=function(){
    h2event.style.color='green'
}

h2event.onmouseleave=function(){
    h2event.style.color='black'
}




// addEentListener

// let button=document.getElementById('button')

// function clickbutton(){
//     button.style.backgroundColor='red';
// }


document.getElementById('button').addEventListener('click',
()=>{
    alert("Clicked the Button ....")

})



document.getElementById('color').addEventListener('focus', function(){
    this.style.background = 'yellow';
});
