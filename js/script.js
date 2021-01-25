var authors = document.querySelectorAll('.special h3');
for (let index = 0; index < authors.length; index++) {
    const element = authors[index];
    element.style.backgroundColor = 'yellow';
    element.style.marginLeft = '10px';
    element.innerHTML = 'Lekhok-' + (index + 1);
}

const article = document.getElementById('first-article');
const newParagraph = document.createElement('p');
newParagraph.innerHTML = "This is created by JS";
article.appendChild(newParagraph);

const ul = document.getElementById('gift-list');
const li = document.createElement('li');
li.innerHTML = 'Brand New Gift Added by JS';
ul.appendChild(li);

var elem = document.querySelector('#gift-list');
// elem.style.display = 'none';
// elem.parentNode.removeChild(elem);