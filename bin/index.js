#!/usr/bin/env node
'use strict';

var program = require('commander');
const { prompt } = require('inquirer');

const { makeMove } = require('./logic');
 
program
  .version('0.1.0')
  .description('Tic Tac Toe');

program
  .command('makeMove <y-position> <x-position>')
  .alias('m')
  .description('Make a move')
  .action((position) => {
    makeMove([y-position, x-position]);
  });
 
program.parse(process.argv);