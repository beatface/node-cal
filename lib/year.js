"use strict";

var zellers = require('./zellers.js');
var month = require('./month.js');
var _ = require('lodash');

var exports = module.exports = {};

const monthsObj = month.months;

exports.getEachMonth = (y) => {
	var i = _.range(1, 13);
	var allMonths = "";
	i.forEach(function(i) {
		allMonths += `${month.headerLine(i, y)}\n${month.subheaderLine(i, y)}\n${month.numberLines(i, y)}\n`;
	});
	// console.log(allMonths);
	return allMonths;
}

// console.log(getEachMonth(2016));

exports.addSpaces = (yearString) => {
	return yearString.replace(/\n\n/g, '\n                    \n');
};





