const fs = require('fs');
// const { readdir } = require('fs/promises')


// 1
fs.writeFileSync('hellowrld.txt','i am new txt file')
fs.writeFileSync('hellowrld2.txt','i am new txt file 2')

// 2
fs.copyFile('hellowrld.txt','hellowrld-copy.txt', err => {
    if (err) throw err
    // console.log(`copied`);
})

// 3
fs.rename('./hellowrld.txt','./new-hellowrld.txt', err => {
    if (err) throw err
    // console.log('file name changed.');
})

// 4
// const fNames = async () => {
//     try {
//         const dir = await readdir('./')
//         for await (const file of dir) console.log(file);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fNames()
fs.readdir('./' , (err,files) => {
    if (err) throw err
    for (const file of files) console.log(file) 
})

// 5
// unlinkSync
fs.unlinkSync(__dirname + '/hellowrld2.txt')
