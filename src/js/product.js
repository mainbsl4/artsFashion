const ImageVisibleBtn=document.querySelectorAll('.Product-card .img-visible-btn');
const CloseBtn=document.querySelectorAll('.Product-card .image-blank .close-btn');
const ProductBlankImage=document.querySelectorAll('.Product-card .image-blank');



ImageVisibleBtn.forEach(ImageVisibleBtn=>{
    ImageVisibleBtn.addEventListener("click",()=>{
        ProductBlankImage.forEach(ProductBlankImage=>{
            ProductBlankImage.style.display='block';
        });
    });
});


CloseBtn.forEach(CloseBtn=>{
    CloseBtn.addEventListener("click",()=>{
        ProductBlankImage.forEach(ProductBlankImage=>{
            ProductBlankImage.style.display='none';
        });
    });
});
