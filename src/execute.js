
module.exports = (function(){
  return {
    execute: function(command, argvs){
      command.execute(argvs);
    }
  }
}());
