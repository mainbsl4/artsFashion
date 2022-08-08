
// /* ***************for product types************ */
const ProductsBtn = document.querySelectorAll('.product-btn input');

const AllVisible=document.querySelectorAll('.Visible');
const Men=document.querySelectorAll('#Men');
const Women=document.querySelectorAll('#Women');
const Children=document.querySelectorAll('#Children');


ProductsBtn[0].addEventListener('click',(e)=>{
    AllVisible.forEach(AllVisible=>{
        AllVisible.style.display='block';
    });
});


function ProductBtn(Buttons, ViewProductName,FirstHideProductName,SecundHideProductHideName,THirdHideProductName){
  return  Buttons.addEventListener("click",(e)=>{
        ViewProductName.forEach(ViewProductName=>{
            ViewProductName.style.display='block';
        });
        FirstHideProductName.forEach(FirstHideProductName=>{
            FirstHideProductName.style.display='none';
        });
        SecundHideProductHideName.forEach(SecundHideProductHideName=>{
            SecundHideProductHideName.style.display='none';
        });
        THirdHideProductName.forEach(THirdHideProductName=>{
            THirdHideProductName.style.display='none';
        });
    });
};
// ProductBtn(ProductsBtn[0], All);
ProductBtn(ProductsBtn[1], Men, Women, Children);
ProductBtn(ProductsBtn[2], Women, Men, Children);
ProductBtn(ProductsBtn[3], Children, Men, Women);


// /* ***************for product types************ */
