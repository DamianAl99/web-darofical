let btn = document.querySelector("#btn-menu");
let menu = document.querySelector("#menu-pr");
var menuu = document.querySelector(".btn-menu");
let aboutme = document.querySelector(".btn-aboutme");
let proyects = document.querySelector(".btn-proyect");
let contact = document.querySelector(".btn-contact");


btn.addEventListener("click", function(){
    menu.classList.toggle("show");
});

menuu.addEventListener("click", function(){
    menu.classList.toggle("show");
});
aboutme.addEventListener("click", function(){
    menu.classList.toggle("show");
});
proyects.addEventListener("click", function(){
    menu.classList.toggle("show");
});
contact.addEventListener("click", function(){
    menu.classList.toggle("show");
});

