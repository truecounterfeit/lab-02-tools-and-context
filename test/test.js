'use strict';

const fp = require('../lib/fp.js');

const expect = require('expect');

//Concat Module Tests

//call
//true
describe( 'concat', function(){
  describe('concat arrays', function() {
    it('should return combined array of array parameters', function(){
      let result = fp.concat1.first([1, 2, 3], [4, 5, 6]);
      expect(result).toBe([1, 2, 3, 4, 5, 6]);
    });
  });
});

//false
describe( 'concat', function(){
  describe('concat arrays', function() {
    it('should return undefined', function(){
      let result = fp.concat1.first('string', [4, 5, 6]);
      expect(result).toBe(undefined);
    });
  });
});
