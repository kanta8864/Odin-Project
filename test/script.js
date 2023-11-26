const container = document.querySelector('#container');

const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'Hey I am red!';

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = 'Hey I am blue in h3!';

const div = document.createElement('div');
div.classList.add('div');

const h1 = document.createElement('h1');
h1.textContent = 'I am in a div';

const p1 = document.createElement('p');
p1.textContent = 'Me too!';

div.style.border = '1px solid black';

container.appendChild(p);
container.appendChild(h3);
div.appendChild(h1);
div.appendChild(p1);
container.appendChild(div);