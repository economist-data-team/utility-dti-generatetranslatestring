import 'babel-polyfill';
import generateTranslateString from '../src';
import chai from 'chai';
chai.should();

describe('generateTranslateString', () => {
  it('should generate a valid SVG translate string', () => {
    const expectedOutput = 'translate(30, 50)';
    generateTranslateString(30, 50).should.equal(expectedOutput);
    generateTranslateString([ 30, 50 ]).should.equal(expectedOutput);
  });
  it('should generate valid CSS translate strings', () => {
    const expectedOutput = 'translate(30px, 50px)';
    generateTranslateString(30, 50, true).should.equal(expectedOutput);
    generateTranslateString([ 30, 50 ], true).should.equal(expectedOutput);
  });
});
