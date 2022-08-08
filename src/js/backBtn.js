// ***************for back btn ********************
const backBtn=document.querySelector(".back_btn #button");
backBtn.style.backgroundColor="#f3a424";
backBtn.style.color="#2f3542";
backBtn.addEventListener("click",(e)=>{
    window.history.back();
});
backBtn.addEventListener("mouseenter",(e)=>{
    backBtn.style.backgroundColor="#442414";
    backBtn.style.color="#dfe4ea";
    backBtn.style.transition=".5s ease-in-out";
});
backBtn.addEventListener("mouseleave",(e)=>{
    backBtn.style.backgroundColor="#f3a424";
    backBtn.style.color="#2f3542";
    backBtn.style.transition=".5s ease-in-out";
});
// ***************for back btn ********************
