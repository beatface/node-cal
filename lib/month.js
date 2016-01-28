#!/usr/bin/env node
"use strict";

var zellers = require('./zellers.js');
var _ = require('lodash');
var exports = module.exports = {};


const months = {
	1: ["January", 31],
	2: ["February", 28],
	3: ["March", 31],
	4: ["April", 30],
	5: ["May", 31],
	6: ["June", 30],
	7: ["July", 31],
	8: ["August", 31],
	9: ["September", 30],
	10: ["October", 31],
	11: ["November", 30],
	12: ["December", 31]
};

exports.isLeapYear = (year) => {
	if (year % 4 !== 0) {
		// then (it is a common year)
		return false;
	} else if (year % 100 !== 0) {
		// then (it is a leap year)
		return true;
	} else if (year % 400 !== 0) {
		// then (it is a common year)
		return false;
	} else {
		// (it is a leap year)
		return true;
	}
};

const monthView = (m, y) => {
	const month = parseInt(m);
	const year = parseInt(y);
	// get first line's text (month and year)
	var calMonth = `${months[month][0]} ${year}`;
	// get number of spaces that must precede the first line's text for centering
	var calMonthSpaces = (20 - calMonth.length) / 2;

	const firstline = " ".repeat(calMonthSpaces) + calMonth;
	const secondline = "Su Mo Tu We Th Fr Sa";
	// get day of week that month starts on
	let monthStarts = zellers.getDay(year, month, 1);
	// get correct number of spaces
	let line3spaces = " ".repeat(monthStarts * 3);

	// concat the correct day numbers for the given month
	var monthNums = [];
	var monthLength;
	if (month === 2) {
		monthLength = exports.isLeapYear(year) ? months[month][1] + 1 : months[month][1];
	} else {
		monthLength = months[month][1];
	}

	for (var i = 1; i <= monthLength; i++) {
		i < 10 ? monthNums.push(` ${i}`) : monthNums.push(i);
	}

	let calDays = `${line3spaces}${monthNums.join(" ")}`;
	calDays = calDays.split("");
	for (var i = 20; i < calDays.length; i += 21) {
		calDays[i] = "\n";
	};

	// var lineDaysStr = calDays.join("");
	// var lineDaysArray = lineDaysStr.split("\n");
	// console.log(":::", lineDaysArray);

	// if (lineDaysArray.length < 6) {
	// 	lineDaysArray.push('\n');
	// } else {

	// }

	let cal = `${firstline}\n${secondline}\n${calDays.join("")}`;
	return cal;
}

exports.generateMonthView = (month, year) => {
	return month < 1 || year < 1753 || year > 9999 ? console.log("invalid input!") : monthView(month, year);
};

