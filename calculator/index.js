alert("Now Solve Your  Problem More faster");
let string="";
// let display= document.getElementById(".display");
let divide=document.querySelector(".divide");
let btns=document.querySelectorAll(".btn");


//  let arr=Array.from(
    btns.forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.innerHTML=="="){
        string=eval(string);
        document.querySelector(".display").value=string;
    }
    else if(e.target.innerHTML=="AC"){
        string="";
        document.querySelector(".display").value=string;
    }
     else if(e.target.innerHTML.trim()=="Delete"){
        string= string.slice(0,-1);
        document.querySelector(".display").value=string;
    }
    else{
string=string+e.target.innerHTML;
document.querySelector(".display").value=string;
    }
});
});
