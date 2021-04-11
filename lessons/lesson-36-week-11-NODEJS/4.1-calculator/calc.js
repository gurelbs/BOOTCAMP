const yargs = require('yargs')
const argv = yargs.argv
const [cmd,x,y] = argv._

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