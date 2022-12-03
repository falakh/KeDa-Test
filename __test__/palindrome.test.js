const reverse = require('../palindrome')
describe('Palindrome Test',()=>{
    test('it return true when keyword stay same after reverse',()=>{
        const array = 'katak'
        const result = reverse(array)
        expect(result).toEqual(true)
    })

    test('it return false when keyword different after reverse',()=>{
        const array = 'kucing'
        const result = reverse(array)
        expect(result).toEqual(false)
    })
})