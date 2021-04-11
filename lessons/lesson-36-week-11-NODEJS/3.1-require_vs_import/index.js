// 1.
// 1a 'import' must be a string and 'require' is dynamic
// 1b with 'import' you can import part of the file, 'require' give you all the file!

// 2.
    // 2a. replace .js with .mjs 
    // 2b. add "type": "module" to package.json

// 3 
    // 3a __filename
    // 3b __dirname

// 4
import {
    getNotes,
    myName,
    randomNumber,
    upper
} from './notes.js'
console.log(getNotes());
upper(`name: ${myName()}\nrandom number: ${randomNumber()}`)

// 5
import fs from 'fs'






// _____________
// extra Just For Fun
// _____________

// const createFile = (filename,content) => fs.writeFileSync(filename,content)
// createFile('name.txt','gurel ben shabat')

// fs.appendFileSync('name.txt',' this is extra text!!')
// fs.appendFileSync('name.txt',' MORE!!')

// const getNotes = require('./notes.js')
// let m = getNotes()
// console.log(m);