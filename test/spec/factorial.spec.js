import chai from 'chai'
const Factorial = require('../../app/factorial')
const expect = chai.expect


describe('Fatorial 0', () => {
    context('quando computo o fatorial', () => {
            let fat = new Factorial(0);
        it('devo receber o resultado 1', function () {
            expect(fat.fatorial()[0]).to.eql(1)
        });
    })
})

describe('Calcular lista de fatorias', () => {
    context('quando computo os fatoriais 1, 5 e 7', () => {
        let fat = new Factorial(1, 5, 7);
        it('devo receber o resultado 1, 120 e 5040 respectivamente', function () {
            expect(fat.fatorial()[0]).to.eql(1)
            expect(fat.fatorial()[1]).to.eql(120)
            expect(fat.fatorial()[2]).to.eql(5040)
        });
    })
})
