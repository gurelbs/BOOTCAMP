const { number } = require('yargs');
const yargs = require('yargs')
const argv = yargs.argv
const [cmd,x,y] = argv._
// option 1
const calc = () => {
    if (cmd && x && y){
        switch (cmd) {
            case 'add':
                console.log(x + y);
                break;
            case 'sub':
                console.log(x - y);
                break;
            case 'mult':
                console.log(x * y);
                break;
            default:
                console.log(`can't calc ${cmd} ${x} ${y}`);
                break;
        }
    } else {
        if (cmd && x){
            cmd === 'pow' 
            ? console.log(Math.pow(x,2)) 
            : console.log(`can't calc ${cmd} ${x}`);
        }
    }
}

calc()

// option 2

// yargs.command({
//     command: 'add',
//     describe: 'add number1 to number2',
//     handler: argv => console.log(argv.num1 + argv.num2)
// })
// yargs.parse()
// ...