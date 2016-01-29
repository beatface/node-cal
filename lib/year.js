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
		if (linesArray[i].length < 20 && linesArray[i] !== "       March" && linesArray[i] !== "        June" && linesArray[i] !== "     September" && linesArray[i] !== "      December") {
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
		var zipped = _.zip(thischunk[0], thischunk[1], thischunk[2]);
		var joinedLines = [];
		zipped.forEach(function(arr) {
			joinedLines.push(arr.join("  "));
		});
		if (joinedLines[7] === " ".repeat(64)) {
			joinedLines[7] = " ".repeat(44);
		} else if (joinedLines[7].length > 44) {
			joinedLines[7] = _.trimEnd(joinedLines[7]);
		}
		if (joinedLines[7].length < 44) {
			let num = 44 - joinedLines[7].length;
			joinedLines[7] = joinedLines[7] + " ".repeat(num);
		}
		joinedLines[6].length > 44 ? joinedLines[6] = _.trimEnd(joinedLines[6]) : joinedLines[6];


		output += "\n" + joinedLines.join("\n");
	}
	return output;
};
