let states = require('./index');

var abbr = require( 'datasets-us-states-abbr' );
var _ = require('lodash');

console.log(states.name['MA']);
console.log(states.abbrev['Washington']);

console.log(states.name[_.sample(abbr)]);
