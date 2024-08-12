const { podeDirigir } = require('./codigoaqui');

describe('Codigo Aqui', () => {
    describe('Pode dirigir?', () => {
        it('pode dirigir acima de 18 anos e com CNH valida', () => {
            const resultado = podeDirigir(true, 30)

            expect(resultado).toBeTruthy()
        })

        it('não pode dirigir abaixo de 18 anos e com CNH invalida', () => {
            const resultado = podeDirigir(false, 17.9)

            expect(resultado).toBeFalsy()
        })

        it('não pode dirigir abaixo de 18 anos e com CNH valida', () => {
            const resultado = podeDirigir(true, 17.9)

            expect(resultado).toBeFalsy()
        })


        it('não pode dirigir acima de 18 anos e com CNH invalida', () => {
            const resultado = podeDirigir(false, 18)

            expect(resultado).toBeFalsy()
        })
    })
})