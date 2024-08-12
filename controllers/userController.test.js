const userController = require('./userController')

jest.mock('../models', () => {
  const userModelMock = {
    findByPk: (id) => {
      if (id === 1) {
        return {
          id: 1,
        }
      } else if (id === 2) {
        return null
      } else {
        throw new Error('Mock Test Error')
      }
    },
    create: (data) =>  {
      return {
        id: 1234,
        name: data.name
      }
    }
  }

  return {
    User: userModelMock,
  }
})


const requestMock = {
  params: {
    id: 100
  },
  body: {}
}


const jsonMock = jest.fn()
const responseMock = {
  status: () => {
    return {
      json: jsonMock,
    }
  }
}


describe('userController', () => {
  describe('getUserById', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    })


    it('returns an user', async () => {
      requestMock.params.id = 1

      await userController.getUserById(requestMock, responseMock)

      expect(jsonMock).toHaveBeenCalledWith({ id: 1 });
    })

    it('doesn\'t found an user', async () => {
      requestMock.params.id = 2

      await userController.getUserById(requestMock, responseMock)

      expect(jsonMock).toHaveBeenCalledWith({ message : 'Usuário não encontrado' });
    })


    it('handles server error', async () => {
      requestMock.params.id = 3

      await userController.getUserById(requestMock, responseMock)

      expect(jsonMock).toHaveBeenCalledWith({ error : 'Mock Test Error' });
    })
  })

  describe('createUser', () => {
    it('creates an user with success', async () => {
      requestMock.body = {
        name: 'Carlos Test Mock',
        cpf: '111.111.111-11'
      }

      await userController.createUser(requestMock, responseMock);

      expect(jsonMock).toHaveBeenCalledWith({ id: 1234, name: 'Carlos Test Mock' });
    })

    it.skip('handles an user creation with server error', () => {

    })
  })
})