#!/usr/bin/env node

const { program } = require('commander');
const setupMenu = require('../src/menu');

program
  .name('setup-cli')
  .description('Interactive CLI for selecting and copying setup files')
  .version('1.0.0')
  .action(setupMenu);

program.parse();