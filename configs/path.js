'use strict';

const fs = require('fs');

module.exports = {
  userConfigFile: 'grunt-sprite-config',
  symlinkDirectoryName: 'grunt-sprite',
  project: fs.realpathSync('../../../'),
  src: fs.realpathSync('')
};
