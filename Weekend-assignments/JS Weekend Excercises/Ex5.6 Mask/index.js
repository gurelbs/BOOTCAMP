const mask = str => {
    str = str.trim()
    return str.length >= 4 
        ? '#'.repeat(str.length - 4) + str.slice(str.length-4,str.length) 
        : str
}
console.log(mask('       gurel ben shabat         '));
console.log(mask("Nananananananananananananananana Batman!"));
console.log(mask("   123456   "));