const pwdFunc = (doneFunc) => {
    doneFunc(process.cwd());
}
module.exports = pwdFunc
