"use strict";

const month = require('./month.js');
const year = require('./year.js');

const [,, ...args] = process.argv;
const env = process.platform;

if (args.length === 2) {
	const m = parseInt(args[0]);
	const y = parseInt(args[1]);
	if (m < 1 || y < 1753 || y > 9999 ) {
		console.log("invalid input!");
	} else {
		console.log(`${month.headerLine(m, y, env)}\n${month.subheaderLine(m, y, env)}\n${month.numberLines(m, y, env)}`);
	}
} else if (args.length === 1) {
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
} else {
	// log an error
	console.log("You fucked it, bro.");
	process.exit(64);
}
