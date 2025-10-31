const program = require('commander');

program
.command('set')
.description('Set API key')
.action(() =>  console.log('Hello from set'))

program.parse(process.argv);