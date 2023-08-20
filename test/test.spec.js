const {add, sub} = require('../src/app')
const expect = require('chai').expect

// BDD
describe("Suite 1", ()=>{
    afterEach(()=>{
        console.log('afterEach')
    });

    beforeEach(()=>{
        console.log('beforeEach')
    });

    after(()=>{
        console.log('after')
    });

    before(()=>{
        console.log('before')
    });

    it('add(2,3) should return 5',()=>{
        expect(add(2,3)).to.be.equal(5);
        console.log('Test Passed')
    });
})

