const fs = require('fs')
const lsFunc = (doneFunc) =>{
    fs.readdir('./', 'utf8', (err, files) => {
        if(err){doneFunc(err)}
        else{doneFunc(files.join('\n'))}
    })
}
module.exports  = lsFunc