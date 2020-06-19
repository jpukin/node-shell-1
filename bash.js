const pwdFunc = require('./pwd.js')
const lsFunc = require('./ls.js')
const catFunc = require('./cat.js')
const curlFunc = require('./curl.js')

process.stdout.write('prompt > ');
const done = (output) => {
  process.stdout.write(output)
  process.stdout.write('\nprompt > ')
}
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');

  if (cmd.length === 1) {
    if (cmd[0] === 'pwd') {
      pwdFunc(done);
    }
    if(cmd[0] === 'ls'){
      lsFunc(done);
    }
  }

  else if (cmd.length === 2) {
    if (cmd[0] === 'cat') {
      catFunc(cmd[1], done);
    }
    else if (cmd[0] === 'curl') {
      curlFunc(cmd[1], done);
    }
  }
  });
