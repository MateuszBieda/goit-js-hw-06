const value = document.querySelector('#value');

let counterValue=0;

const decrementFunction = ()=>{
  counterValue--;
  value.textContent=counterValue;
}
const incrementFunction = ()=>{
  counterValue++;
  value.textContent=counterValue;
}
const incrementButton=document.querySelector('button[data-action="increment"]');
const decrementButton=document.querySelector('button[data-action="decrement"]');

incrementButton.addEventListener("click", incrementFunction);
decrementButton.addEventListener("click", decrementFunction);