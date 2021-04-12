const fs = require('fs');
const yargs = require('yargs');
const { v4: id } = require('uuid');

if (!fs.existsSync('data.json')){
    fs.writeFileSync('data.json','[]')
}
const data = JSON.parse(fs.readFileSync('data.json').toString())

const createUser = argv => {
    let dup = data.filter( user => user.email === argv.email || user.id === argv.id)
    if (dup.length === 0){
        data.push({
            name: argv.name,
            email: argv.email,
            id: id(),
        })
        fs.writeFileSync('data.json', JSON.stringify(data))
    } else {
        console.log(`${argv.email} already exists...`);
    }
}
const readUser = argv => {
    const i = data.findIndex( user => user.id === argv.id)
    if (data[i]){
        console.log(data[i]);
    } else {
        console.log('user Not found');
    }
}
const updateUser = argv => {
    const i = data.findIndex( user => user.id === argv.id)
    const updatedObj = {
        ...data[i],
        name: argv.name,
        email: argv.email,
    }
    if (data[i]){
        data.splice(i,1,updatedObj)
        fs.writeFileSync('data.json',JSON.stringify(data))
        console.log(`${argv.name} updated`);
    } else {
        console.log(`error... cant update.`);
    }
}
const deleteUser = argv => {
    const i = data.findIndex( user => user.id === argv.id)
    if (i > -1){
        data.splice(i,1)
        fs.writeFileSync('data.json',JSON.stringify(data))
        console.log(`user deleted`);
    }
}

module.exports = {
    createUser: createUser,
    readUser: readUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
}