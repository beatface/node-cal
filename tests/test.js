"use strict";
const { expect } = require('chai');
const cp = require('child_process');

const month = require('../lib/month.js');
const year = require('../lib/year.js');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = cp.execSync('cal').toString();
      const output = cp.execSync("./loader.js 2 2016").toString();
      expect(output).to.equal(goal);
    });
    it('should handle feb 2015 month', () => {
      const goal = cp.execSync('cal 2 2015').toString();
      const output = cp.execSync("./loader.js 2 2015").toString();
      expect(output).to.equal(goal);
    });
    xit('should handle 2016 year', () => {
      const goal = cp.execSync('cal 2016').toString();
      const output = cp.execSync("./loader.js 2016").toString();
      expect(output).to.equal(goal);
    });
    xit('should handle a full year 1886', () => {
      const goal = cp.execSync('cal 1886').toString().split("\n");
      const output = cp.execSync('./loader.js 1886').toString().split("\n");
      expect(output[0]).to.equal(goal[0]);
    });
  });

  describe('CLI individual functions', () => {
    describe('.headerLine', () => {
      it('return "    January 2016" for 1, 2016', () => {
        expect(month.headerLine(1, 2016, "darwin")).to.equal("    January 2016");
      });
      it('return "   February 2016', () => {
        expect(month.headerLine(2, 2016, "darwin")).to.equal("   February 2016");
      });
      it('return "   February 2016      \n" for 2, 2016', () => {
        expect(month.headerLine(2, 2016, "linux")).to.equal("   February 2016      ");
      });
    });
    describe('.numberLines', () => {
      it('return correct string for for 1, 2016', () => {
        expect(month.numberLines(1, 2016, "darwin")).to.equal("                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31");
      });
      it('return correct string for 2, 2016', () => {
        expect(month.numberLines(2, 2016, "darwin")).to.equal("    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29\n");
      });
    });
    describe('.getEachMonth', () => {
      xit('return string of ALL MONTHS', () => {
        expect(year.getEachMonth(2016)).to.equal("      January\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31\n      February\nSu Mo Tu We Th Fr Sa\n    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29\n\n       March\nSu Mo Tu We Th Fr Sa\n       1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30 31\n\n       April\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n\n        May\nSu Mo Tu We Th Fr Sa\n 1  2  3  4  5  6  7\n 8  9 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31\n\n        June\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30\n\n        July\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31\n       August\nSu Mo Tu We Th Fr Sa\n    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31\n\n     September\nSu Mo Tu We Th Fr Sa\n             1  2  3\n 4  5  6  7  8  9 10\n11 12 13 14 15 16 17\n18 19 20 21 22 23 24\n25 26 27 28 29 30\n\n      October\nSu Mo Tu We Th Fr Sa\n                   1\n 2  3  4  5  6  7  8\n 9 10 11 12 13 14 15\n16 17 18 19 20 21 22\n23 24 25 26 27 28 29\n30 31\n      November\nSu Mo Tu We Th Fr Sa\n       1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30\n\n      December\nSu Mo Tu We Th Fr Sa\n             1  2  3\n 4  5  6  7  8  9 10\n11 12 13 14 15 16 17\n18 19 20 21 22 23 24\n25 26 27 28 29 30 31\n\n");

      });
      xit('should add spaces between multiple line breaks', () => {
        expect(year.addSpaces(year.getEachMonth(2016))).to.equal("      January\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31\n      February\nSu Mo Tu We Th Fr Sa\n    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29\n                    \n       March\nSu Mo Tu We Th Fr Sa\n       1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30 31\n                    \n       April\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n                    \n        May\nSu Mo Tu We Th Fr Sa\n 1  2  3  4  5  6  7\n 8  9 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31\n                    \n        June\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30\n                    \n        July\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31\n       August\nSu Mo Tu We Th Fr Sa\n    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31\n                    \n     September\nSu Mo Tu We Th Fr Sa\n             1  2  3\n 4  5  6  7  8  9 10\n11 12 13 14 15 16 17\n18 19 20 21 22 23 24\n25 26 27 28 29 30\n                    \n      October\nSu Mo Tu We Th Fr Sa\n                   1\n 2  3  4  5  6  7  8\n 9 10 11 12 13 14 15\n16 17 18 19 20 21 22\n23 24 25 26 27 28 29\n30 31\n      November\nSu Mo Tu We Th Fr Sa\n       1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30\n                    \n      December\nSu Mo Tu We Th Fr Sa\n             1  2  3\n 4  5  6  7  8  9 10\n11 12 13 14 15 16 17\n18 19 20 21 22 23 24\n25 26 27 28 29 30 31\n                    \n");
      });
      xit('should return an array of each line in each month', () => {
        expect(year.splitLines(year.addSpaces(year.getEachMonth(2016)))).to.eql(["      January", "Su Mo Tu We Th Fr Sa", "                1  2", " 3  4  5  6  7  8  9", "10 11 12 13 14 15 16", "17 18 19 20 21 22 23", "24 25 26 27 28 29 30", "31", "      February", "Su Mo Tu We Th Fr Sa", "    1  2  3  4  5  6", " 7  8  9 10 11 12 13", "14 15 16 17 18 19 20", "21 22 23 24 25 26 27", "28 29", "                    ", "       March", "Su Mo Tu We Th Fr Sa", "       1  2  3  4  5", " 6  7  8  9 10 11 12", "13 14 15 16 17 18 19", "20 21 22 23 24 25 26", "27 28 29 30 31", "                    ", "       April", "Su Mo Tu We Th Fr Sa", "                1  2", " 3  4  5  6  7  8  9", "10 11 12 13 14 15 16", "17 18 19 20 21 22 23", "24 25 26 27 28 29 30", "                    ", "        May", "Su Mo Tu We Th Fr Sa", " 1  2  3  4  5  6  7", " 8  9 10 11 12 13 14", "15 16 17 18 19 20 21", "22 23 24 25 26 27 28", "29 30 31", "                    ", "        June", "Su Mo Tu We Th Fr Sa", "          1  2  3  4", " 5  6  7  8  9 10 11", "12 13 14 15 16 17 18", "19 20 21 22 23 24 25", "26 27 28 29 30", "                    ", "        July", "Su Mo Tu We Th Fr Sa", "                1  2", " 3  4  5  6  7  8  9", "10 11 12 13 14 15 16", "17 18 19 20 21 22 23", "24 25 26 27 28 29 30", "31", "       August", "Su Mo Tu We Th Fr Sa", "    1  2  3  4  5  6", " 7  8  9 10 11 12 13", "14 15 16 17 18 19 20", "21 22 23 24 25 26 27", "28 29 30 31", "                    ", "     September", "Su Mo Tu We Th Fr Sa", "             1  2  3", " 4  5  6  7  8  9 10", "11 12 13 14 15 16 17", "18 19 20 21 22 23 24", "25 26 27 28 29 30", "                    ", "      October", "Su Mo Tu We Th Fr Sa", "                   1", " 2  3  4  5  6  7  8", " 9 10 11 12 13 14 15", "16 17 18 19 20 21 22", "23 24 25 26 27 28 29", "30 31", "      November", "Su Mo Tu We Th Fr Sa", "       1  2  3  4  5", " 6  7  8  9 10 11 12", "13 14 15 16 17 18 19", "20 21 22 23 24 25 26", "27 28 29 30", "                    ", "      December", "Su Mo Tu We Th Fr Sa", "             1  2  3", " 4  5  6  7  8  9 10", "11 12 13 14 15 16 17", "18 19 20 21 22 23 24", "25 26 27 28 29 30 31", "                    "]);
      });
      xit('should create an array of month chunks', () => {
        expect(year.monthChunks(year.splitLines(year.addSpaces(year.getEachMonth(2016))))).to.eql([ [['      January','Su Mo Tu We Th Fr Sa','                1  2',' 3  4  5  6  7  8  9','10 11 12 13 14 15 16','17 18 19 20 21 22 23','24 25 26 27 28 29 30','31'],['      February','Su Mo Tu We Th Fr Sa','    1  2  3  4  5  6',' 7  8  9 10 11 12 13','14 15 16 17 18 19 20','21 22 23 24 25 26 27','28 29','                    '],['       March',  'Su Mo Tu We Th Fr Sa',  '       1  2  3  4  5',  ' 6  7  8  9 10 11 12',  '13 14 15 16 17 18 19',  '20 21 22 23 24 25 26',  '27 28 29 30 31',  '                    ']],[['       April',  'Su Mo Tu We Th Fr Sa',  '                1  2',  ' 3  4  5  6  7  8  9',  '10 11 12 13 14 15 16',  '17 18 19 20 21 22 23',  '24 25 26 27 28 29 30',  '                    '],['        May',  'Su Mo Tu We Th Fr Sa',  ' 1  2  3  4  5  6  7',  ' 8  9 10 11 12 13 14',  '15 16 17 18 19 20 21',  '22 23 24 25 26 27 28',  '29 30 31',  '                    '],['        June',  'Su Mo Tu We Th Fr Sa',  '          1  2  3  4',  ' 5  6  7  8  9 10 11',  '12 13 14 15 16 17 18',  '19 20 21 22 23 24 25',  '26 27 28 29 30',  '                    ']],[['        July',  'Su Mo Tu We Th Fr Sa',  '                1  2',  ' 3  4  5  6  7  8  9',  '10 11 12 13 14 15 16',  '17 18 19 20 21 22 23',  '24 25 26 27 28 29 30',  '31'],['       August',  'Su Mo Tu We Th Fr Sa',  '    1  2  3  4  5  6',  ' 7  8  9 10 11 12 13',  '14 15 16 17 18 19 20',  '21 22 23 24 25 26 27',  '28 29 30 31',  '                    '],['     September',  'Su Mo Tu We Th Fr Sa',  '             1  2  3',  ' 4  5  6  7  8  9 10',  '11 12 13 14 15 16 17',  '18 19 20 21 22 23 24',  '25 26 27 28 29 30',  '                    ']],[['      October',  'Su Mo Tu We Th Fr Sa',  '                   1',  ' 2  3  4  5  6  7  8',  ' 9 10 11 12 13 14 15',  '16 17 18 19 20 21 22',  '23 24 25 26 27 28 29',  '30 31'],['      November',  'Su Mo Tu We Th Fr Sa',  '       1  2  3  4  5',  ' 6  7  8  9 10 11 12',  '13 14 15 16 17 18 19',  '20 21 22 23 24 25 26',  '27 28 29 30','                    '],['      December','Su Mo Tu We Th Fr Sa','             1  2  3',' 4  5  6  7  8  9 10','11 12 13 14 15 16 17','18 19 20 21 22 23 24','25 26 27 28 29 30 31','                    ']] ])
      });
      it('should make each line 20 characters long', () => {
        const arr = year.checkLength(year.splitLines(year.addSpaces(year.getEachMonth(2016))));
        expect(arr[1].length).to.equal(20);
        expect(arr[2].length).to.equal(20);
        expect(arr[0].length).to.equal(20);
        expect(arr[14].length).to.equal(20);
      });
      it('should create year header line', () => {
        expect(year.yearHeaderLine(1)).to.equal('      January');
        expect(year.yearHeaderLine(5)).to.equal('        May');
      });
    });
  });

  describe("Zeller's congruence", () => {
    const zellers = require('../lib/zellers.js');

    describe('.modifiedMonth', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });
      it('return 14 for February', () => {
        expect(zellers.modifiedMonth(2)).to.equal(14);
      });
      it('return 3 for March', () => {
        expect(zellers.modifiedMonth(3)).to.equal(3);
      });
    });

    describe('.modifiedYear', () => {
      it('returns 2015 for Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
      it('returns 2015 for Feb 2016', () => {
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      });
      it('returns 2017 for March 2017', () => {
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
    });

    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });
      it('returns 3 (Wednesday) for March 1, 2000', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      });
      it('returns 1 (Monday) for March 1, 2100', () => {
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
      });
      it('returns 0 (Sunday) for March 2, 2200', () => {
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
      });
      it('returns 4 (Thursday) for March 1, 2300', () => {
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });
      it('returns 2 (Tuesday) for February 2, 2016', () => {
        expect(zellers.getDay(2016, 2, 2)).to.equal(2);
      });
    });

  });
});




