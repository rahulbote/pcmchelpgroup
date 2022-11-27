var Menu = document.querySelector(".menu");
var navlist = document.querySelector("nav .nav-list");
var link = document.querySelector(".menu");


Menu.addEventListener("click",function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open")
    
    
   
});
