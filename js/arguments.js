function getFullName(firstName, lastName) {
    console.log(arguments);
    let fullName = " ";
    for (let i = 0; i < arguments.length; i++) {
        const partialName = arguments[i];
        fullName = fullName + ' ' + partialName;
    }
    return fullName;
}

const name = getFullName('Eftykhar', 'Rahman', 'Raufu', 'Prezens');
console.log(name);