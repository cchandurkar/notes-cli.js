
module.exports = (function(){
  return {
    command: 'help',
    flags: '-h',
    alias: ['help', ''],
    execute: function(){
      console.log("help");
    }
  }
}());
