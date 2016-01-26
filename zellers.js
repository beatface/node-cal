#!/usr/bin/env node
"use strict";

var exports = module.exports = {};

exports.modifiedMonth = (month) => {
	return month < 3 ? month += 12 : month;
}



exports.modifiedYear = (year, month) => {
	return month <= 2 ? year -= 1 : year;
}


exports.getDay = (year, month, day) => {
	if (month < 3) {
		month += 12; year -= 1;
	}
    var h = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + (6 * parseInt(year / 100)) + parseInt(year / 400) - 1) % 7;
    return h;
}

