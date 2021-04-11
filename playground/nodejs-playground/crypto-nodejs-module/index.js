const fs = require('fs');


fs.writeFile('sometext.txt','new text !!',(err,data) => {
    return err ? err : data
})