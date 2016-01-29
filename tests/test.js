"use strict";
const { expect } = require('chai');
const cp = require('child_process');

const month = require('../lib/month.js');
const year = require('../lib/year.js');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = cp.execSync('cal').toString();
      const output = cp.execSync("./cal.js 1 2016").toString();
      expect(output).to.equal(goal);
    });
    it('should handle feb 2015 month', () => {
      const goal = cp.execSync('cal 2 2015').toString();
      const output = cp.execSync("./cal.js 2 2015").toString();
      expect(output).to.equal(goal);
    });
  });

  describe('CLI individual functions', () => {
    // describe('.validateInputs', () => {
    //   it('return invalid for 0, 2015', () => {
    //     expect(month.validateInputs(0, 2015)).to.equal("invalid input!");
    //   });
    //   it('return invalid for 2, 1744', () => {
    //     expect(month.validateInputs(2, 1744)).to.equal("invalid input!");
    //   });
    //   it('return invalid for 5, 10000', () => {
    //     expect(month.validateInputs(5, 10000)).to.equal("invalid input!");
    //   });
    //   it('return valid for 3, 2016', () => {
    //     expect(month.validateInputs(3, 2016)).to.equal("valid input!")
    //   });
    // });
    describe('.headerLine', () => {
      it('return "    January 2016" for 1, 2016', () => {
        expect(month.headerLine(1, 2016)).to.equal("    January 2016");
      });
      it('return "   February 2016\nSu Mo Tu We Th Fr Sa\n" for 2, 2016', () => {
        expect(month.headerLine(2, 2016)).to.equal("   February 2016");
      });
    });
    describe('.numberLines', () => {
      it('return correct string for for 1, 2016', () => {
        expect(month.numberLines(1, 2016)).to.equal("                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31");
      });
      it('return correct string for 2, 2016', () => {
        expect(month.numberLines(2, 2016)).to.equal("    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29\n");
      });
    });
    describe('.getEachMonth', () => {
      it('return string of ALL MONTHS', () => {
        expect(year.getEachMonth(2016)).to.equal("    January 2016\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31\n   February 2016\nSu Mo Tu We Th Fr Sa\n    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29\n\n     March 2016\nSu Mo Tu We Th Fr Sa\n       1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30 31\n\n     April 2016\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n\n      May 2016\nSu Mo Tu We Th Fr Sa\n 1  2  3  4  5  6  7\n 8  9 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31\n\n     June 2016\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30\n\n     July 2016\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31\n    August 2016\nSu Mo Tu We Th Fr Sa\n    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31\n\n   September 2016\nSu Mo Tu We Th Fr Sa\n             1  2  3\n 4  5  6  7  8  9 10\n11 12 13 14 15 16 17\n18 19 20 21 22 23 24\n25 26 27 28 29 30\n\n    October 2016\nSu Mo Tu We Th Fr Sa\n                   1\n 2  3  4  5  6  7  8\n 9 10 11 12 13 14 15\n16 17 18 19 20 21 22\n23 24 25 26 27 28 29\n30 31\n   November 2016\nSu Mo Tu We Th Fr Sa\n       1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30\n\n   December 2016\nSu Mo Tu We Th Fr Sa\n             1  2  3\n 4  5  6  7  8  9 10\n11 12 13 14 15 16 17\n18 19 20 21 22 23 24\n25 26 27 28 29 30 31\n\n");

      });
      it('should add spaces between multiple line breaks', () => {
        expect(year.addSpaces(year.getEachMonth(2016))).to.equal("    January 2016\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31\n   February 2016\nSu Mo Tu We Th Fr Sa\n    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29\n                    \n     March 2016\nSu Mo Tu We Th Fr Sa\n       1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30 31\n                    \n     April 2016\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n                    \n      May 2016\nSu Mo Tu We Th Fr Sa\n 1  2  3  4  5  6  7\n 8  9 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31\n                    \n     June 2016\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30\n                    \n     July 2016\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31\n    August 2016\nSu Mo Tu We Th Fr Sa\n    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31\n                    \n   September 2016\nSu Mo Tu We Th Fr Sa\n             1  2  3\n 4  5  6  7  8  9 10\n11 12 13 14 15 16 17\n18 19 20 21 22 23 24\n25 26 27 28 29 30\n                    \n    October 2016\nSu Mo Tu We Th Fr Sa\n                   1\n 2  3  4  5  6  7  8\n 9 10 11 12 13 14 15\n16 17 18 19 20 21 22\n23 24 25 26 27 28 29\n30 31\n   November 2016\nSu Mo Tu We Th Fr Sa\n       1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30\n                    \n   December 2016\nSu Mo Tu We Th Fr Sa\n             1  2  3\n 4  5  6  7  8  9 10\n11 12 13 14 15 16 17\n18 19 20 21 22 23 24\n25 26 27 28 29 30 31\n                    \n");
      });
    });
    it('should return an array of each line in each month', () => {
      expect(year.splitLines(year.addSpaces(year.getEachMonth(2016)))).to.eql(["    January 2016", "Su Mo Tu We Th Fr Sa", "                1  2", " 3  4  5  6  7  8  9", "10 11 12 13 14 15 16", "17 18 19 20 21 22 23", "24 25 26 27 28 29 30", "31", "   February 2016", "Su Mo Tu We Th Fr Sa", "    1  2  3  4  5  6", " 7  8  9 10 11 12 13", "14 15 16 17 18 19 20", "21 22 23 24 25 26 27", "28 29", "                    ", "     March 2016", "Su Mo Tu We Th Fr Sa", "       1  2  3  4  5", " 6  7  8  9 10 11 12", "13 14 15 16 17 18 19", "20 21 22 23 24 25 26", "27 28 29 30 31", "                    ", "     April 2016", "Su Mo Tu We Th Fr Sa", "                1  2", " 3  4  5  6  7  8  9", "10 11 12 13 14 15 16", "17 18 19 20 21 22 23", "24 25 26 27 28 29 30", "                    ", "      May 2016", "Su Mo Tu We Th Fr Sa", " 1  2  3  4  5  6  7", " 8  9 10 11 12 13 14", "15 16 17 18 19 20 21", "22 23 24 25 26 27 28", "29 30 31", "                    ", "     June 2016", "Su Mo Tu We Th Fr Sa", "          1  2  3  4", " 5  6  7  8  9 10 11", "12 13 14 15 16 17 18", "19 20 21 22 23 24 25", "26 27 28 29 30", "                    ", "     July 2016", "Su Mo Tu We Th Fr Sa", "                1  2", " 3  4  5  6  7  8  9", "10 11 12 13 14 15 16", "17 18 19 20 21 22 23", "24 25 26 27 28 29 30", "31", "    August 2016", "Su Mo Tu We Th Fr Sa", "    1  2  3  4  5  6", " 7  8  9 10 11 12 13", "14 15 16 17 18 19 20", "21 22 23 24 25 26 27", "28 29 30 31", "                    ", "   September 2016", "Su Mo Tu We Th Fr Sa", "             1  2  3", " 4  5  6  7  8  9 10", "11 12 13 14 15 16 17", "18 19 20 21 22 23 24", "25 26 27 28 29 30", "                    ", "    October 2016", "Su Mo Tu We Th Fr Sa", "                   1", " 2  3  4  5  6  7  8", " 9 10 11 12 13 14 15", "16 17 18 19 20 21 22", "23 24 25 26 27 28 29", "30 31", "   November 2016", "Su Mo Tu We Th Fr Sa", "       1  2  3  4  5", " 6  7  8  9 10 11 12", "13 14 15 16 17 18 19", "20 21 22 23 24 25 26", "27 28 29 30", "                    ", "   December 2016", "Su Mo Tu We Th Fr Sa", "             1  2  3", " 4  5  6  7  8  9 10", "11 12 13 14 15 16 17", "18 19 20 21 22 23 24", "25 26 27 28 29 30 31", "                    "]);
    });
    it('should create an array of month chunks', () => {
      expect(year.monthChunks(year.splitLines(year.addSpaces(year.getEachMonth(2016))))).to.eql([ [['    January 2016','Su Mo Tu We Th Fr Sa','                1  2',' 3  4  5  6  7  8  9','10 11 12 13 14 15 16','17 18 19 20 21 22 23','24 25 26 27 28 29 30','31'],['   February 2016','Su Mo Tu We Th Fr Sa','    1  2  3  4  5  6',' 7  8  9 10 11 12 13','14 15 16 17 18 19 20','21 22 23 24 25 26 27','28 29','                    '],['     March 2016',  'Su Mo Tu We Th Fr Sa',  '       1  2  3  4  5',  ' 6  7  8  9 10 11 12',  '13 14 15 16 17 18 19',  '20 21 22 23 24 25 26',  '27 28 29 30 31',  '                    ']],[['     April 2016',  'Su Mo Tu We Th Fr Sa',  '                1  2',  ' 3  4  5  6  7  8  9',  '10 11 12 13 14 15 16',  '17 18 19 20 21 22 23',  '24 25 26 27 28 29 30',  '                    '],['      May 2016',  'Su Mo Tu We Th Fr Sa',  ' 1  2  3  4  5  6  7',  ' 8  9 10 11 12 13 14',  '15 16 17 18 19 20 21',  '22 23 24 25 26 27 28',  '29 30 31',  '                    '],['     June 2016',  'Su Mo Tu We Th Fr Sa',  '          1  2  3  4',  ' 5  6  7  8  9 10 11',  '12 13 14 15 16 17 18',  '19 20 21 22 23 24 25',  '26 27 28 29 30',  '                    ']],[['     July 2016',  'Su Mo Tu We Th Fr Sa',  '                1  2',  ' 3  4  5  6  7  8  9',  '10 11 12 13 14 15 16',  '17 18 19 20 21 22 23',  '24 25 26 27 28 29 30',  '31'],['    August 2016',  'Su Mo Tu We Th Fr Sa',  '    1  2  3  4  5  6',  ' 7  8  9 10 11 12 13',  '14 15 16 17 18 19 20',  '21 22 23 24 25 26 27',  '28 29 30 31',  '                    '],['   September 2016',  'Su Mo Tu We Th Fr Sa',  '             1  2  3',  ' 4  5  6  7  8  9 10',  '11 12 13 14 15 16 17',  '18 19 20 21 22 23 24',  '25 26 27 28 29 30',  '                    ']],[['    October 2016',  'Su Mo Tu We Th Fr Sa',  '                   1',  ' 2  3  4  5  6  7  8',  ' 9 10 11 12 13 14 15',  '16 17 18 19 20 21 22',  '23 24 25 26 27 28 29',  '30 31'],['   November 2016',  'Su Mo Tu We Th Fr Sa',  '       1  2  3  4  5',  ' 6  7  8  9 10 11 12',  '13 14 15 16 17 18 19',  '20 21 22 23 24 25 26',  '27 28 29 30','                    '],['   December 2016','Su Mo Tu We Th Fr Sa','             1  2  3',' 4  5  6  7  8  9 10','11 12 13 14 15 16 17','18 19 20 21 22 23 24','25 26 27 28 29 30 31','                    ']] ])
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




