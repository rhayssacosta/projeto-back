const { podeDirigir, getMaxProductPrice } = require('./codigoaqui');
const { getProducts } = require('./outrocodigoaqui');

jest.mock('./outrocodigoaqui', () => ({
    getProducts: jest.fn().mockReturnValue([]),
}))

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

    describe('Get max product price', () => {
        it('retorna 0 se não houver produtos na lista', () => {
            const maxPrice = getMaxProductPrice();

            expect(maxPrice).toBe(0)
        })

        it('retorna o maior preço da lista corretamente', () => {
            // getProducts.mockImplementation(() => [{ id: 1, price: 10 }])
            getProducts.mockReturnValue([{ id: 1, price: 10 }])
            const maxPrice = getMaxProductPrice();

            expect(maxPrice).toBe(0)
        })
    })
})