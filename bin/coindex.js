#!/usr/bin/env node

const { Command } = require('commander');
const pkg = require('../package.json');
const program = new Command();



program
.version(pkg.version)
.command('key', 'Manage API key')
.command('check', 'Check coin price information')
.parse(process.argv);

