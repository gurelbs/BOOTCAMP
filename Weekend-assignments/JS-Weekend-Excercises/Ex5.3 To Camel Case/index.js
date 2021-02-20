const toCamelCase = str => {
    let newStr = str[0];
    str = str
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map( char => char[0].toUpperCase() + char.slice(1,char.length))
    .join('')

    return newStr + str.slice(1,str.length)
}

// check
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("gurel-ben-shabat-is-my-name"));
console.log(toCamelCase("Camel_case_in_java_script_is_cooool"));
