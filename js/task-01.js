const list = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${list.length}`)

list.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});

// const ffff = list[0].querySelector(`h2`)
// console.log(ffff.textContent)
// const fffd = list[0].querySelectorAll(`li`)
// console.log(fffd.length)

// const fff1 = list[1].querySelector(`h2`)
// console.log(fff1.textContent)
// const fff2 = list[1].querySelectorAll(`li`)
// console.log(fff2.length)

// const fff3 = list[2].querySelector(`h2`)
// console.log(fff3.textContent)
// const fff4 = list[2].querySelectorAll(`li`)
// console.log(fff4.length)