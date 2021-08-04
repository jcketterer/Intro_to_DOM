// 1. Select the section with an id of container without using querySelector.

const cont = document.getElementById('container');

// 2. Select the section with an id of container using querySelector.

const contain = document.querySelector('#container');

// 3. Select all of the list items with a class of “second”.

const list = document.getElementsByClassName('second');

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.

const olTag = document.querySelector('ol .third');

// 5. Give the section with an id of container the text “Hello!”.
    //Using cont variable from #1

cont.innerText = 'Hello!'

// 6. Add the class main to the div with a class of footer.

const newDiv = document.querySelector('.footer');
newDiv.classList.add('main');

// 7. Remove the class main on the div with a class of footer.

const removeFooter = document.querySelector('.footer');
removeFooter.classList.remove('main');

// 8. Create a new li element.

const newLi = document.createElement('li');

// 9. Give the li the text “four”.

newLi.innerText = 'four'

// 10. Append the li to the ul element.

const ul = document.querySelector('ul');
ul.appendChild(newLi);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.

const olLoop = document.querySelectorAll('ol > li');

for (let li of olLoop) {
    li.style.backgroundColor = 'green';
}

// 12. Remove the div with a class of footer
    //Using the same variable from #7

removeFooter.remove();