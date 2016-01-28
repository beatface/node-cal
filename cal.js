#!/usr/bin/env node --harmony_destructuring
"use strict";

var monthView = require('./lib/month.js').generateMonthView;

const [,, ...args] = process.argv;

if (args.length === 2) {
	console.log(monthView(args[0], args[1]));
} else if (args.length === 1) {
	// run getyearView
	console.log("Slow down, I haven't made the year view yet.");
} else {
	// log an error
	console.log("You fucked it, bro.");
	process.exit(64);
}
