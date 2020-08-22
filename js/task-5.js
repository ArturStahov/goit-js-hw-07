
const outputSpanRef=document.querySelector("#name-output");
const inputRef=document.querySelector("#name-input");


const handleInput=event=>{
    event.target.value===""
    ?outputSpanRef.textContent="незнакомец"
    :outputSpanRef.textContent=event.target.value;
}
    
inputRef.addEventListener("input",handleInput);
