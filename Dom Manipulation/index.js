 // The getElementById() method returns a webpage element that has the id attribute 
 //same as the id value specified in getElementById() method


 //Accessing the element 
 // only access the element with id 

 //Point-2
 // getElemntByid() method returns null if no webpage element is present with specified Id 
 let h=document.getElementById('h1ele');
 console.log(h);

 let x=document.getElementById('xyz')
 console.log(x);

 //point--3
 //If more than one element with ame id present in the webpage,then only first element will be retuned

 // The querySelector() method returns the first webpage element that matches a specified css selector in the document


 //point 2
 // querySeector method retuns null if no webpage element is present with specifed id class or tag

 //point--3
 //If more than one element with ame id present in the webpage,then only first element will be retuned

 // The querySelector() method returns the first webpage element that matches a specified css selector in the document

 let div=document.querySelector('.newdiv');
console.log(div);


// select an id using id attribute

let p=document.querySelector('#page');
console.log(p);

//select an element with tag name
let tag=document.querySelector('img')
console.log(tag);




// ****************Manupulating the DOm element************

let content=p.textContent;
console.log(content);

//Reading HTML content

let 