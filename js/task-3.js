const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryHtmlRef=document.querySelector("#gallery");

  const createGallery=(imagesArr)=>{
    return imagesArr.map((item)=>{
        const {url,alt}=item;
       const imgElem= document.createElement("img");
       imgElem.setAttribute("src",url);
       imgElem.setAttribute("alt",alt);
       const liElem=document.createElement("li");
       liElem.appendChild(imgElem);
       liElem.classList.add("gallery-item");
       return liElem;
    })
  }

  const imagesGallery=createGallery(images);
  galleryHtmlRef.append(...imagesGallery);
  

