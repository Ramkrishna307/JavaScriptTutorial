let catalog=document.getElementById('button');
let close=document.getElementById('close');
let alert=document.querySelector('.alert-msg');
let blur=document.querySelector('blur');


function showcatalog(){
     alert.classList.remove('hidden');
     blur.classList.remove('hidden');

}

function hidecatalog(){
    alert.classList.add('hidden');
   blur.classList.add('hidden');
}

catalog.addEventListener('click',showcatalog);

close.addEventListener('click',hidecatalog);

