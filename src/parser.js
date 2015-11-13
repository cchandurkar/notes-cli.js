
var commands = require('./commands');

module.exports = (function(){
  return {
    parse: function(argv){
      var found = null;
      Object.keys(commands).forEach(function(cmd){
        if(argv[0] === cmd){
          found = commands[cmd];
        }
      });
      return found;
    }
  }

}());
