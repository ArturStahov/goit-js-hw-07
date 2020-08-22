const inputRangeRef=document.querySelector("#font-size-control");
const chengeTextRef=document.querySelector("#text");

// inputRangeRef.value=0; как сделать что бы ползунок начинал с 0 и при этом текст начинался с font-size 24px
 inputRangeRef.value=24;
chengeTextRef.style.fontSize="24px"

const handleTextsize=(event)=>{
    chengeTextRef.style.fontSize=event.target.value+"px";
    // let chendgeInt;
    // if(Number.parseInt(chengeTextRef.style.fontSize)>Number(event.target.value)) {
    //     chengeTextRef.style.fontSize=Number.parseInt(chengeTextRef.style.fontSize)+Number(event.target.value)+"px";
    // }else
    // if(Number.parseInt(chengeTextRef.style.fontSize)<Number(event.target.value)){
    //      chendgeInt=Number.parseInt(chengeTextRef.style.fontSize)-Number(event.target.value);
    //     chengeTextRef.style.fontSize=Number.parseInt(chengeTextRef.style.fontSize)-chendgeInt+"px"
    // }
}


inputRangeRef.addEventListener("input",handleTextsize);

