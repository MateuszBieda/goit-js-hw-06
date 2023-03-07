const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

/* const elements = ingredients.map((ingredient) => 
  {const list = document.createElement("li");
  list.textContent= ingredient;
  list.classList.add("item");
  return list;
});
ingredientsList.append(...elements);
 */
const elements =[];

for (let i=0; i<ingredients.length; i++){
 // const element = ingredients[i];
  const list = document.createElement("li");
  list.textContent= ingredients[i];
  list.classList.add("item");
  elements.push(list);

}
ingredientsList.append(...elements);