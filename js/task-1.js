
const categoriesArrayRef=document.querySelectorAll(".item");
const qualityCategoriesMessage=categoriesArray=>`В списке ${categoriesArray.length} категории`;
console.log(qualityCategoriesMessage(categoriesArrayRef));

const categoriesInfo=(categoriesArray)=>{
     categoriesArray.forEach((item)=>{
         const message= 
         `Категория: "${item.firstElementChild.textContent}" включает в себя - ${item.querySelectorAll("li").length} елементов`
         console.log(message)   
    })
    
}
categoriesInfo(categoriesArrayRef);



