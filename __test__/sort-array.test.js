const sort = require('../02-sort-array')
describe('sort array test',()=>{
    test('it shoud sorted',()=>{
        const array = [1,3,4,7,3,4,2,1]
        const result = sort(array)
        expect(result).toEqual([1,1,2,3,3,4,4,7])
    })
})