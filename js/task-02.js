const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

for (i=0;i<ingredients.length;i++){
 const list = document.createElement("li");
  list.classList.add('item');
 list.textContent = ingredients[i]; 
 ingredientsList.appendChild(list);
  
}
const finalList = document.querySelector('ul#ingredients');
//console.log(finalList);