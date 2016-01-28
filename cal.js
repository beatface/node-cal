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
	// run getyearView
	// console.log(year.stuff());
	console.log("Slow down, I haven't made the year view yet.");
} else {
	// log an error
	console.log("You fucked it, bro.");
	process.exit(64);
}
