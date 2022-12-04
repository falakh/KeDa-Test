const fish = require('../01-fish')
describe('Run Fish Test',()=>{
    afterEach(() => {    
        jest.clearAllMocks();
      });
    it('Should call console.log equal with parameters',()=>{
        const spy = jest.spyOn(global.console, 'log')
        fish(3)
        expect(spy).toBeCalledTimes(3)
    })
    it('Should call console.log with parameters fish in 3rd and 6th call',()=>{
            const spy = jest.spyOn(global.console, 'log')
            fish(6)
            expect(spy).toHaveBeenCalledWith('fish')
            expect(spy).toHaveBeenNthCalledWith(3,'fish')
            expect(spy).toHaveBeenNthCalledWith(6,'fish')

    })
    
    it('Should call console.log with parameters fish bash on 15th and 30th',()=>{
        const spy = jest.spyOn(global.console, 'log')
        fish(30)
        expect(spy).toHaveBeenCalledWith('fish bash')
        expect(spy).toHaveBeenNthCalledWith(15,'fish bash')
        expect(spy).toHaveBeenNthCalledWith(30,'fish bash')
    })

    it('Should call console.log with parameters fish bash on 5th, 10th, 20th',()=>{
        const spy = jest.spyOn(global.console, 'log')
        fish(20)
        expect(spy).toHaveBeenCalledWith('bash')
        expect(spy).toHaveBeenNthCalledWith(5,'bash')
        expect(spy).toHaveBeenNthCalledWith(10,'bash')
        expect(spy).toHaveBeenNthCalledWith(20,'bash')

    })
})