"use strict";

const month = require('./month.js');
const year = require('./year.js');

var exports = module.exports = {};




exports.monthDirect = (platform) => {

};





exports.yearDirect = (platform) => {


	var headerYear = `${" ".repeat(29)}${args[0]}\n`;
	// run getyearView
	var em = year.getEachMonth(args[0]);
	// console.log("em", em);
	var as = year.addSpaces(em);
	// console.log("as", as);
	var sl = year.splitLines(as);
	// console.log("sl", sl);
	var cl = year.checkLength(sl)
	var mc = year.monthChunks(cl);
	var output = year.outputYear(mc);
	console.log(`${headerYear}${output}`);


};

