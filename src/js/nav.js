// ************for header************
const heading=document.querySelector(".fixt");
const navBody=document.querySelector("#listBody");
const navLi=document.querySelectorAll("#listBody li");
const home=document.querySelector(".home");
const about=document.querySelector(".about");
const product=document.querySelector(".product");
const gallery=document.querySelector(".gallery");
const contacts=document.querySelector(".contacts");
const menuBtn=document.querySelector(".menu-btn");
const line1=document.querySelector(".menu-btn .line1");
const line2=document.querySelector(".menu-btn .line2");
const line3=document.querySelector('.menu-btn .line3');

window.addEventListener("scroll",(e)=>{
    if (window.pageYOffset>0) {
        heading.classList.add("styky");
    }else{
        heading.classList.remove("styky");
    };


    if (window.pageYOffset>=70) {
        navLi.forEach(navLi=>{
            navLi.classList.add("while-bottom");
            navBody.classList.add("whileListBodyBottom");
        });
    } else {
        navLi.forEach(navLi=>{
            navLi.classList.remove("while-bottom");
            navBody.classList.remove("whileListBodyBottom");
        });
    };
});

menuBtn.addEventListener("click",(e)=>{
    navBody.classList.toggle("goLeftUl");
    home.classList.toggle("toBottom");
    about.classList.toggle("toBottom");
    product.classList.toggle("toBottom");
    gallery.classList.toggle("toBottom");
    contacts.classList.toggle("toBottom");
    line1.classList.toggle("crose");
    line2.classList.toggle("crose");
    line3.classList.toggle("crose");
});
// **************for header***********




