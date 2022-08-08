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
window.addEventListener("scroll",(e)=>{
    const gendersMenu=document.querySelectorAll(".for-genders .gender-menu");
    // const aboutUsBody=document.querySelector(".about-body");
    const aboutUsBody=document.querySelector("#about");
    const aboutUsBodyHeight=aboutUsBody.clientHeight;
    const aboutUsBodyTop=aboutUsBody.offsetTop;

    if (window.pageYOffset>=aboutUsBodyTop-(aboutUsBodyHeight)/7) {
        gendersMenu.forEach(gendersMenu=>{
            gendersMenu.classList.add("genderMenuAnimation");
        });
    }else{
        gendersMenu.forEach(gendersMenu=>{
            gendersMenu.classList.remove("genderMenuAnimation");
        });
    };
// *********************for counter body*****************
const FeedbackBody=document.querySelector("#feedback");
const FeedbackBodyTop= FeedbackBody.offsetTop;
const FeedbackBodyHeight=FeedbackBody.clientHeight;


if (window.pageYOffset>FeedbackBodyTop-(FeedbackBodyHeight)/2) {
    const counter=document.querySelectorAll(".counter-body .count .value-body p");
    const speed=200;

    counter.forEach(counter=>{
        const updateCount = ()=> {
            const target= +counter.getAttribute("data-target");
            const count= +counter.innerText;
            const inc= target / speed;
    
            if (count < target) {
                counter.innerText= count + inc;
                setTimeout(updateCount, 3);
            }
        }
        updateCount();
    });

};

// *********************for counter body*****************
});













// ********************for about card************


const about_card=document.querySelectorAll(".about-card .card");
const aboutUsPath=document.querySelectorAll(".about-card .card .for-path");

about_card[0].style.width="18%";
about_card[1].style.width="60%";
about_card[2].style.width="18%";


about_card.forEach(about_card=>{
    about_card.style.position="relative";
    about_card.style.transition=".5s";
});

aboutUsPath.forEach(aboutUsPath=>{
    aboutUsPath.style.width="100%";
    aboutUsPath.style.transition=".8s";
});


about_card[0].addEventListener("mouseenter",()=>{
    about_card[0].style.width="60%";
    about_card[1].style.width="18%";
    about_card[2].style.width="18%";
    aboutUsPath[0].style.width="0%";
    aboutUsPath[1].style.width="100%";
    aboutUsPath[2].style.width="100%";
    aboutUsPath[0].innerText="";
    aboutUsPath[1].innerText="Our products";
    aboutUsPath[2].innerText="Our services";

});

about_card[1].addEventListener("mouseenter",()=>{
    about_card[0].style.width="18%";
    about_card[1].style.width="60%";
    about_card[2].style.width="18%";
    aboutUsPath[0].style.width="100%";
    aboutUsPath[1].style.width="0%";
    aboutUsPath[2].style.width="100%";
    aboutUsPath[0].innerText="Our policy";
    aboutUsPath[1].innerText="";
    aboutUsPath[2].innerText="Our services";

});

about_card[2].addEventListener("mouseenter",()=>{
    about_card[0].style.width="18%";
    about_card[1].style.width="18%";
    about_card[2].style.width="60%";
    aboutUsPath[0].style.width="100%";
    aboutUsPath[1].style.width="100%";
    aboutUsPath[2].style.width="0%";
    aboutUsPath[0].innerText="Our policy";
    aboutUsPath[1].innerText="Our products";
    aboutUsPath[2].innerText="";

});

let mediaScreenSize900px= window.matchMedia('(max-width:900px)')

function ScreenSize900px(mediaScreenSize900px){
    if (mediaScreenSize900px.matches) {
        about_card[0].style.width="22%";
        about_card[1].style.width="56%";
        about_card[2].style.width="22%";

        about_card.forEach(about_card=>{
            about_card.style.height="460px";
        })


        about_card[0].addEventListener("mouseenter",()=>{
            about_card[0].style.width="56%";
            about_card[1].style.width="22%";
            about_card[2].style.width="22%";
            aboutUsPath[0].style.width="0%";
            aboutUsPath[1].style.width="100%";
            aboutUsPath[2].style.width="100%";
            aboutUsPath[0].innerText="";
            aboutUsPath[1].innerText="Our products";
            aboutUsPath[2].innerText="Our services";
        });
        about_card[1].addEventListener("mouseenter",()=>{
            about_card[0].style.width="22%";
            about_card[1].style.width="56%";
            about_card[2].style.width="22%";
            aboutUsPath[0].style.width="100%";
            aboutUsPath[1].style.width="0%";
            aboutUsPath[2].style.width="100%";
            aboutUsPath[0].innerText="Our policy";
            aboutUsPath[1].innerText="";
            aboutUsPath[2].innerText="Our services";        
        });        
        about_card[2].addEventListener("mouseenter",()=>{
            about_card[0].style.width="22%";
            about_card[1].style.width="22%";
            about_card[2].style.width="56%";
            aboutUsPath[0].style.width="100%";
            aboutUsPath[1].style.width="100%";
            aboutUsPath[2].style.width="0%";
            aboutUsPath[0].innerText="Our policy";
            aboutUsPath[1].innerText="Our products";
            aboutUsPath[2].innerText="";
        });

    }
}

ScreenSize900px(mediaScreenSize900px);



let mediaScreenSize768px=window.matchMedia("(max-width:768px)");

function ScreenSize768px(mediaScreenSize768px){

    if (mediaScreenSize768px.matches) {
        about_card[0].style.width="80%";
        about_card[1].style.width="80%";
        about_card[2].style.width="80%";

        
        about_card.forEach(about_card=>{
            about_card.style.height="460px";
        })


        about_card[0].addEventListener("mouseenter",()=>{
            about_card[0].style.width="80%";
            about_card[1].style.width="80%";
            about_card[2].style.width="80%";
            aboutUsPath[0].style.width="0%";
            aboutUsPath[1].style.width="100%";
            aboutUsPath[2].style.width="100%";
            aboutUsPath[0].innerText="";
            aboutUsPath[1].innerText="Our products";
            aboutUsPath[2].innerText="Our services";
        
        });

        about_card[1].addEventListener("mouseenter",()=>{
            about_card[0].style.width="80%";
            about_card[1].style.width="80%";
            about_card[2].style.width="80%";
            aboutUsPath[0].style.width="100%";
            aboutUsPath[1].style.width="0%";
            aboutUsPath[2].style.width="100%";
            aboutUsPath[0].innerText="Our policy";
            aboutUsPath[1].innerText="";
            aboutUsPath[2].innerText="Our services";
        
        });
        
        about_card[2].addEventListener("mouseenter",()=>{
            about_card[0].style.width="80%";
            about_card[1].style.width="80%";
            about_card[2].style.width="80%";
            aboutUsPath[0].style.width="100%";
            aboutUsPath[1].style.width="100%";
            aboutUsPath[2].style.width="0%";
            aboutUsPath[0].innerText="Our policy";
            aboutUsPath[1].innerText="Our products";
            aboutUsPath[2].innerText="";
        });
    }
}
ScreenSize768px(mediaScreenSize768px)





let mediaScreenSize576px=matchMedia("(max-width:576px)");

function ScreenSize576px(mediaScreenSize576px){
    if (mediaScreenSize576px.matches) {

        about_card[0].style.width="90%";
        about_card[1].style.width="90%";
        about_card[2].style.width="90%";


        about_card.forEach(about_card=>{
            about_card.style.height="480px";
        })
        
        about_card[0].addEventListener("mouseenter",()=>{
            about_card[0].style.width="90%";
            about_card[1].style.width="90%";
            about_card[2].style.width="90%";
            aboutUsPath[0].style.width="0%";
            aboutUsPath[1].style.width="100%";
            aboutUsPath[2].style.width="100%";
            aboutUsPath[0].innerText="";
            aboutUsPath[1].innerText="Our products";
            aboutUsPath[2].innerText="Our services";
        
        });

        about_card[1].addEventListener("mouseenter",()=>{
            about_card[0].style.width="90%";
            about_card[1].style.width="90%";
            about_card[2].style.width="90%";
            aboutUsPath[0].style.width="100%";
            aboutUsPath[1].style.width="0%";
            aboutUsPath[2].style.width="100%";
            aboutUsPath[0].innerText="Our policy";
            aboutUsPath[1].innerText="";
            aboutUsPath[2].innerText="Our services";
        
        });
        
        about_card[2].addEventListener("mouseenter",()=>{
            about_card[0].style.width="90%";
            about_card[1].style.width="90%";
            about_card[2].style.width="90%";
            aboutUsPath[0].style.width="100%";
            aboutUsPath[1].style.width="100%";
            aboutUsPath[2].style.width="0%";
            aboutUsPath[0].innerText="Our policy";
            aboutUsPath[1].innerText="Our products";
            aboutUsPath[2].innerText="";
        });
    }
}

ScreenSize576px(mediaScreenSize576px)










let mediaScreenSize500px=matchMedia("(max-width:500px)");

function ScreenSize500px(mediaScreenSize500px){
    if (mediaScreenSize500px.matches) {

            about_card[1].style.height="580px";

    }
}

ScreenSize500px(mediaScreenSize500px)



let mediaScreenSize400px=matchMedia("(max-width:400px)");

function ScreenSize400px(mediaScreenSize400px){
    if (mediaScreenSize400px.matches) {

            about_card[1].style.height="700px";
            

            about_card[0].style.width="95%";
            about_card[1].style.width="95%";
            about_card[2].style.width="95%";
    
            
            about_card[0].addEventListener("mouseenter",()=>{
                about_card[0].style.width="95%";
                about_card[1].style.width="95%";
                about_card[2].style.width="95%";
                aboutUsPath[0].style.width="0%";
                aboutUsPath[1].style.width="100%";
                aboutUsPath[2].style.width="100%";
                aboutUsPath[0].innerText="";
                aboutUsPath[1].innerText="Our products";
                aboutUsPath[2].innerText="Our services";
            
            });
    
            about_card[1].addEventListener("mouseenter",()=>{
                about_card[0].style.width="95%";
                about_card[1].style.width="95%";
                about_card[2].style.width="95%";
                aboutUsPath[0].style.width="100%";
                aboutUsPath[1].style.width="0%";
                aboutUsPath[2].style.width="100%";
                aboutUsPath[0].innerText="Our policy";
                aboutUsPath[1].innerText="";
                aboutUsPath[2].innerText="Our services";
            
            });
            
            about_card[2].addEventListener("mouseenter",()=>{
                about_card[0].style.width="95%";
                about_card[1].style.width="95%";
                about_card[2].style.width="95%";
                aboutUsPath[0].style.width="100%";
                aboutUsPath[1].style.width="100%";
                aboutUsPath[2].style.width="0%";
                aboutUsPath[0].innerText="Our policy";
                aboutUsPath[1].innerText="Our products";
                aboutUsPath[2].innerText="";
            });

    }
}

ScreenSize400px(mediaScreenSize400px)







// ********************for about card************





