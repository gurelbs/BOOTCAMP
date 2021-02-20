const shortest = str => {
    str = str
    .trim()
    .split(' ')
    .sort((a,b) => a.length - b.length)
    return str[0].length
}

console.log(shortest('longest word'));
console.log(shortest('    ab bbb bccc   '));

//------- another way-------//

// const short = s => s
    // .trim()
    // .split(' ')
    // .sort((a,b) => b.length - a.length)
    // .pop().length

// console.log(short('fgdfgd gdt hytyh yhgfgfgyh fgyhy hxsxsxsxsxsx'));