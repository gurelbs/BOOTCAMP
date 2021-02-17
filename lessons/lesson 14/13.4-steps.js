let steps = n => {
    let sign = ''
    for (let i = 0; i <= n; i++) {
        sign += ' \n'
        for (let j = i; j < n; j++){
            sign += '# '
        }
    }
    return console.log(sign.split('').reverse().join(''));
}
steps(10)


