const { Command } = require('commander');
const check = require('../commands/check')
const program = new Command();

program 
.command('price')
.description('Check coin price information')
.option('--coin <type>', 'Specify the coin type in CSV format', 'BTC,ETH,XRP')
.option('--currency <type>', 'Specify the currency type in CSV format', 'USD')
.action(cmd => check.price(cmd));

program.parse(process.argv); 