#!/usr/bin/env node
"use strict";

var zellers = require('./zellers.js');

var exports = module.exports = {};


function generateMonthView(month, year) {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	var line1 = `${months[month-1]} ${year}`;
	var line1Array = line1.split("");
	var line1spaces = line1Array.length / 2;
	console.log("line 1 array pre while", line1Array);
	var num = parseInt(line1Array.length + line1spaces)

	while (line1Array.length < num) {
		line1Array.unshift(" ");
	}
	console.log("line 1 array post while", line1Array.join(""));
}

generateMonthView(1, 2016);
