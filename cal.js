#!/usr/bin/env node --harmony_destructuring
"use strict";

const month = require('./lib/month.js');
const year = require('./lib/year.js');

const [,, ...args] = process.argv;

if (args.length === 2) {
	const m = parseInt(args[0]);
	const y = parseInt(args[1]);
	if (m < 1 || y < 1753 || y > 9999 ) {
		console.log("invalid input!");
	} else {
		console.log(`${month.headerLine(m, y)}\n${month.subheaderLine(m, y)}\n${month.numberLines(m, y)}`);
	}
} else if (args.length === 1) {
	// console.log("the arg is:", args[0]);
	// run getyearView
	var em = year.getEachMonth(args[0]);
	// console.log("em", em);
	var as = year.addSpaces(em);
	// console.log("as", as);
	var sl = year.splitLines(as);
	// console.log("sl", sl);
	var mc = year.monthChunks(sl);
	var output = year.outputYear(mc);
	console.log(output);
	// console.log("Slow down, I haven't made the year view yet.");
} else {
	// log an error
	console.log("You fucked it, bro.");
	process.exit(64);
}
