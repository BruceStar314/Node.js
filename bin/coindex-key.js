#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const key = require('../commands/key');

program
  .command('set')
  .description('Set API key')
  .action(key.set);

program
  .command('show')
  .description('Show API key')
  .action(key.show);

  program
  .command(' remove')
  .description('Remove API key')
  .action(key.remove);



program.parse(process.argv);
 