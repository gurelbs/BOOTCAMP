const yargs = require('yargs');
const { createUser, readUser, updateUser, deleteUser, } = require('./userCrud.js')

yargs.command({
    command: 'create',
    describe: '--name=<X> --email=<Y>',
    handler: argv => createUser(argv)
})
yargs.command({
    command: 'read',
    describe: '--id=<X>',
    handler: argv => readUser(argv)
})
yargs.command({
    command: 'update',
    describe: '--id=<X> --name=<Y> --email=<Z>',
    handler: argv => updateUser(argv)
})
yargs.command({
    command: 'delete',
    describe: '--id=<X>',
    handler: argv => deleteUser(argv)
})

yargs.parse()

