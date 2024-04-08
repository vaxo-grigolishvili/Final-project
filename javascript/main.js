let button=document.querySelector(".btn");
let nav_box=document.querySelector(".nav_box");
nav_box.style.display="none";
let isopen=false;

button.addEventListener("click", () => {
   if (isopen===false) {
    nav_box.style.display="block";
     isopen=true;
   } else {
    nav_box.style.display="none";
    isopen=false;
   } 

})