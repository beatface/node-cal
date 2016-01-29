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
	// console.log(firstline);
	return `${firstline}`;
}

exports.getEachMonth = (y) => {
	var i = _.range(1, 13);
	var allMonths = "";
	i.forEach(function(i) {
		allMonths += `${exports.yearHeaderLine(i)}\n${month.subheaderLine(i, y)}\n${month.numberLines(i, y)}\n`;
	});
	// console.log(">>>>>>>>", exports.yearHeaderLine(1));
	return allMonths;
}


exports.addSpaces = (yearString) => {
	return yearString.replace(/\n\n/g, '\n                    \n');
};

exports.splitLines = (spacedString) => {
	let arr = spacedString.split("\n");
	arr.pop();
	return arr;
};

exports.checkLength = (linesArray) => {
	for (var i = 0; i <  linesArray.length; i++) {
		if (linesArray[i].length < 20) {
			var num = (20 - linesArray[i].length);
			linesArray[i] = linesArray[i] + " ".repeat(num);
		}
	}
	return linesArray;
};

exports.monthChunks = (linesArray) => {
	var eachMonthChunk = _.chunk(linesArray, 8);
	return _.chunk(eachMonthChunk, 3);
};

exports.outputYear = (chunksArray) => {
	var output = "";
	for (var i = 0; i < chunksArray.length; i++) {
		var thischunk = chunksArray[i];
		// console.log("this chunk is >>>", thischunk);
		var zipped = _.zip(thischunk[0], thischunk[1], thischunk[2]);
		// console.log("zipped CHUNK", zipped);
		var joinedLines = [];
		zipped.forEach(function(arr) {
			joinedLines.push(arr.join("  "));
		});
		// console.log("joinedLines:::", joinedLines);
		output += joinedLines.join("\n") + "\n";
	}
	return output;
};
