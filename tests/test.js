"use strict";
const { expect } = require('chai');
const cp = require('child_process');

const month = require('../lib/month.js');

describe('cal', () => {
  describe('CLI', () => {
    // it('should handle the current month', () => {
    //   const goal = cp.execSync('cal').toString();
    //   const output = cp.execSync("./cal.js 1 2016").toString();
    //   expect(output).to.equal(goal);
    // });
    // it('should handle feb 2015 month', () => {
    //   const goal = cp.execSync('cal 2 2015').toString();
    //   const output = cp.execSync("./cal.js 2 2015").toString();
    //   expect(output).to.equal(goal);
    // });
  });

  describe('CLI individual functions', () => {
    describe('.validateInputs', () => {
      it('return invalid for 0, 2015', () => {
        expect(month.validateInputs(0, 2015)).to.equal("invalid input!");
      });
      it('return invalid for 2, 1744', () => {
        expect(month.validateInputs(2, 1744)).to.equal("invalid input!");
      });
      it('return invalid for 5, 10000', () => {
        expect(month.validateInputs(5, 10000)).to.equal("invalid input!");
      });
      it('return valid for 3, 2016', () => {
        expect(month.validateInputs(3, 2016)).to.equal("valid input!")
      });
    });
    describe('.headerLines', () => {
      it('return "    January 2016\nSu Mo Tu We Th Fr Sa\n" for 1, 2016', () => {
        expect(month.headerLines(1, 2016)).to.equal("    January 2016\nSu Mo Tu We Th Fr Sa\n");
      });
      it('return "   February 2016\nSu Mo Tu We Th Fr Sa\n" for 2, 2016', () => {
        expect(month.headerLines(2, 2016)).to.equal("   February 2016\nSu Mo Tu We Th Fr Sa\n");
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




