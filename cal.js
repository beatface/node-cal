#!/usr/bin/env node
"use strict";

var monthView = require('./lib/month.js').generateMonthView;

const [,, ...args] = process.argv;

monthView(args[0], args[1]);



// if args.length === 2 {
// 	const [month, year] = args;
// 	// run getmonthView
// 	console.log(`monthView(${month}, ${year})`);
// } else if args.length === 1 {
// 	const [year] = args;
// 	// run getyearView
// } else {
// 	log an error
// process.exit(64);
// }
