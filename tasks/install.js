var path = require('path');
var utils = require('shipit-utils');

module.exports = function(shipit) {
  utils.registerTask(shipit, 'npm:install', task);
  function task() {
    shipit.config = shipit.config || {};
    shipit.config.npm = shipit.config.npm || {};
    shipit.config.npm.flags = shipit.config.npm.flags || '';
    if(!shipit.config.workspace){
      throw new Error('you need to config workspace');
    }

    return shipit.local('npm install ' + shipit.config.npm.flags, {
      cwd: shipit.config.workspace
    })
  }
}
