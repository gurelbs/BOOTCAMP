const abbreviate = name => name.split(' ').map(e => e[0].toUpperCase()).join('.')

console.log(abbreviate('ben shabat'));