const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const createDOMElementFromArray=(itemArray)=>{
      return itemArray.map((item)=>{
        const elements=document.createElement("li");
        elements.textContent=item;
        return elements;
      })
  }
 const domElementArray=createDOMElementFromArray(ingredients)
 const ingredientsHtmlRef= document.querySelector("#ingredients");
 
 ingredientsHtmlRef.append(...domElementArray);