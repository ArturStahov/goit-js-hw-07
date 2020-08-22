

const counterValueRef=document.querySelector("#value");

const buttonDecrementRef=document.querySelector("#counter button[data-action='decrement']");
const buttonIncrementRef=document.querySelector("#counter button[data-action='increment']");

// let counterValue=0;


const handleIncrement=()=>{
    const value=Number(counterValueRef.textContent)+1;
    counterValueRef.textContent=value;
// counterValue+=1;
// counterValueRef.textContent=counterValue; как правильней?
}

const handleDecrement=()=>{
    const value=Number(counterValueRef.textContent)-1;
    counterValueRef.textContent=value;
    // counterValue-=1;
    // counterValueRef.textContent=counterValue;
    }

buttonDecrementRef.addEventListener("click", handleDecrement);
buttonIncrementRef.addEventListener("click", handleIncrement);

