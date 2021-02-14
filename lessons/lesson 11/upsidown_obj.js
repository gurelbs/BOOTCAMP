let obj = {
    a: 'alpha',
    b: 'beta',
    c: 'gama'
}
let upsideDown = obj => {
    let newObj = {};
    Object.entries(obj).forEach(entry => {
        let key = entry[0], value = entry[1];
        newObj[value] = key;
    });
    return console.log(newObj);
}
    
upsideDown(obj)