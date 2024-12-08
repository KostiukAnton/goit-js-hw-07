'use strict';

const categories = document.querySelectorAll(".item");
console.log(`Namber of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);

  const items = category.querySelectorAll('ul li');
  console.log(`Elements: ${items.length}`);
})


