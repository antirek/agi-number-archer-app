var config = require('./config');
var AgiNumberArcher = require('agi-number-archer');

var archer = new AgiNumberArcher(config);
archer.start();