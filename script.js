window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1800)

}

const words=[
"Python Full Stack Developer",
"Python Developer"
];

let i=0;

let j=0;

let current="";

let isDeleting=false;

function type(){

current=words[i];

if(!isDeleting){

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1000);

return;

}

}else{

document.getElementById("typing").textContent=current.substring(0,j--);

if(j==0){

isDeleting=false;

i++;

if(i==words.length){

i=0;

}

}

}

setTimeout(type,isDeleting?60:120);

}

type();



const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(r=>{

const top=r.getBoundingClientRect().top;

if(top<window.innerHeight-100){

r.classList.add("active");

}

})

});