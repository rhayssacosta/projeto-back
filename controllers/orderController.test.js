const { getAllOrders, getOrderById } = require("./orderController")
const { Order } = require('../models')

jest.mock('../models', () => ({
  Order: {
    findAll: jest.fn(() => ([])),
    findByPk: jest.fn(() => ({ id: 40 })),
  }
}))


const requestmock = {
  params: {
    id: 40
  }
}

const jsonMock = jest.fn()
const responseMock = {
  status: jest.fn(() => ({
    json: jsonMock
  }))
}

describe('orderController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  describe('getAllOrders', () => {
    it('retorna lista de ordens com sucesso', async () => {
      await getAllOrders(null, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(200)
    })

    it('retorna erro do servidor', async () => {
      Order.findAll.mockImplementation(() => {
        throw new Error('teste error')
      })

      await getAllOrders(null, responseMock)
      
      expect(responseMock.status).toHaveBeenCalledWith(500)
    })

  })

  describe('getOrderById',  () => {
    const setup = async () => {
      await getOrderById(requestmock,responseMock)
    }

    it('retorna um pedido valido', async () => {
      await setup()

      expect(responseMock.status).toHaveBeenCalledWith(200)
      expect(jsonMock).toHaveBeenCalledWith({ id: 40 })
    })

    it('retorna status 404', async () => {
      Order.findByPk.mockImplementation(() => null)
      
      await setup()

      expect(responseMock.status).toHaveBeenCalledWith(404)
      expect(jsonMock).toHaveBeenCalledWith({ message: 'Pedido não encontrado' })
    })

  })
})
