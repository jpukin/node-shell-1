const cwdFunc = () => {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
}

  module.exports = cwdFunc