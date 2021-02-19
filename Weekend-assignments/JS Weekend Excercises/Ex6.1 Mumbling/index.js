const mumbling = str => {
    str = str.toLowerCase()
    let newStr = ''
    for (let i = 0; i < str.length; i++){
        newStr += str.charAt(i).toUpperCase() + str[i].repeat(i) + '-' 
    }

    return newStr.slice(0,-1)
}


console.log(mumbling('cwAt'));
console.log(mumbling('gurel'));