var expect = require('chai').expect;
//var assert = require('assert');
var math = require('../math');

describe('math.js tests', function(){

    describe('math.add() tests', function(){
        it('should return 2', ()=>{
            const result = math.sum(1,1);
            expect(result).to.equal(2);
        });
    
        it('should return 5', ()=>{
            const result = math.sum(2,3);            
            expect(result).to.equal(5);
        })
    });

    describe('math.multiply() tests', function(){
        it('should return 1', ()=>{
            const result = math.multiply(1,1);
            expect(result).to.equal(1);
        });
    
        it('should return 6', ()=>{
            const result = math.multiply(2,3);            
            expect(result).to.equal(6);
        })
    });
    
});