const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};

console.log(`${name} is ${height} inches tall`);
const { name, height, message } = require("../index.js");
/*
describe('what-is-a-test',() => {
    describe('name', () => {
        it('returns "Susan"', () =>{
            expect(name).toEqual('Susan')
        })
    })

describe('Height', () =>{
    it('is less than 40', () => {
        expect(height).toBeLessThan(40)
    })
})
decribe('message', () => {
    it('gives the name and height', () => {
        expect(message).toInclude(name)
        expect(message).toInclude(height)
    })
})
})
*/

