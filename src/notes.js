#! /usr/bin/env node

var fs = require('fs');
var commands = require('./commands');
var exec = require('./execute');
var parser = require('./parser');

// Get required flags and parameters
var argvs = process.argv.slice(2);

// If enough arguments are not passed
// Execute help
if(!argvs.length){
  exec.execute(commands.help);
  return;
}

// If enough arguments were passed
// Execute given commands
var command = parser.parse(argvs);
if(command){
  exec.execute(command, argvs.slice(1));
} else {
  console.log("Invalid command");
}
