/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.
  

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


function menucreator (array){
  let menubtn = document.querySelector(".menu-button")
  let newdiv = document.createElement('div')
  newdiv.classList.add('menu')

  let listitems = document.createElement('ul')
  newdiv.appendChild(listitems)

  array.forEach((item)=>{
    let items = document.createElement('li')
    item.textContent = item
    listitems.appendChild(items)
  });

  menubtn.addEventListener('click', ()=>{
    newdiv.classList.toggle('menu--open')
  });

  return newdiv;
}

let header = document.querySelector('.header')
header.appendChild(menucreator(menuItems))







// const div = document.createElement('div');
// div.classList.add('menu');

// const ul = document.createElement('ul');
// const mbutton = document.querySelector('.menu-button')
// // const menu = document.querySelectorAll('.menu ')


// const body = document.querySelector('.header');
// body.appendChild(div);
// div.appendChild(ul);

// function listCreator(text){
//   const list = document.createElement('li');
//   list.textContent = text;
//   return list;
// };

// menuItems.forEach((item)=>{
//   let list = listCreator(item);
//   ul.appendChild(list);
// })

// mbutton.addEventListener('click',()=>{
//   menu.classList.toggle('menu--open'); 
//  })


// console.log(body)