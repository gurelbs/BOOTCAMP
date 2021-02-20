const isogram = str => {
    str = str.toLowerCase().split('').sort().join('')
    let bool = true;
    for (let i = 0; i < str.length; i++){
        str[i] !== str[i+1] ? bool : bool = false;
    }
    return bool;
}

// check
console.log(isogram('nice'));
console.log(isogram('nice its work'));