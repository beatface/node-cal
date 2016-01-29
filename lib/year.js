"use strict";

var zellers = require('./zellers.js');
var month = require('./month.js');
var _ = require('lodash');

var exports = module.exports = {};

const monthsObj = month.months;

exports.yearHeaderLine = (month) => {
	var calMonth = `${monthsObj[month][0]}`;
	// get number of spaces that must precede the first line's text for centering
	var calMonthSpaces = (20 - calMonth.length) / 2;
	const firstline = " ".repeat(calMonthSpaces) + calMonth;
	return `${firstline}`;
}

exports.getEachMonth = (y) => {
	var i = _.range(1, 13);
	var allMonths = "";
	i.forEach(function(i) {
		allMonths += `${exports.yearHeaderLine(i)}\n${month.subheaderLine(i, y)}\n${month.numberLines(i, y)}\n`;
	});
	// console.log(allMonths);
	return allMonths;
}

// console.log(getEachMonth(2016));

exports.addSpaces = (yearString) => {
	return yearString.replace(/\n\n/g, '\n                    \n');
};

exports.splitLines = (spacedString) => {
	let arr = spacedString.split("\n");
	arr.pop();
	return arr;
};

exports.monthChunks = (linesArray) => {
	var eachMonthChunk = _.chunk(linesArray, 8);
	return _.chunk(eachMonthChunk, 3);
};

exports.outputYear = (chunksArray) => {
	var output = "";
	for (var i = 0; i < chunksArray.length; i++) {
		var thischunk = chunksArray[i];
		var zipped = _.zip(thischunk[0], thischunk[1], thischunk[2]);
		// console.log("CHUNK", zipped);

		output += zipped.join("\n");
	}

	// let output = chunksArray.forEach(function(chunk) {
	// 	return chunk.forEach(function(month) {
	// 		return _.zip(month);
	// 	})
	// });
	return output;
};
