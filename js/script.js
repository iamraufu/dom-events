var authors = document.getElementsByClassName('author');
for (let index = 0; index < authors.length; index++) {
    const element = authors[index];
    element.style.backgroundColor = 'yellow';
    element.style.marginLeft = '10px';
    element.innerHTML = 'Lekhok-' + (index + 1);
}