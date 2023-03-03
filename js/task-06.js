const textInput = document.querySelector("#validation-input");
const textLength = Number(textInput.getAttribute("data-length"));
//console.log(textLength);
textInput.addEventListener("blur",(event)=>{
  if(event.currentTarget.value.length===textLength){
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");}
    else {
      textInput.classList.add("invalid");
       textInput.classList.remove("valid");
    }
});