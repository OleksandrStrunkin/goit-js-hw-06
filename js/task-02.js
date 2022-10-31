const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector(`#ingredients`)

const list1 = ingredients.map(ingredient => {
const list = document.createElement(`li`);
list.textContent = ingredient;
  list.classList.add(`item`)
  return list
})
ingredientList.append(...list1)
