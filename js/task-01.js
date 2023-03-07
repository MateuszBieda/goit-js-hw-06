//1. 
//version 1
const categories = document.querySelector('#categories');
categories.children.length;
//console.log('Number of categories: ',categories.children.length);

//version 2
const items = document.querySelectorAll('li.item');
[...items].length;
//console.log('Number of categories: ',[...items].length);

//2
const list = document.querySelectorAll('.item >h2');
//console.log (categories.children.length);
//console.log([...list]);

for (let i=0; i<categories.children.length;i++){
  console.log('Category: ', list[i].innerText);
  console.log('Elements: ',list[i].nextElementSibling.children.length)}