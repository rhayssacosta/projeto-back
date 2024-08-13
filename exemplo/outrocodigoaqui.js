const getProducts = () => {
    // varias coisas

    throw new Error('ok');

    return [
        { id: 1, price: 10.50 },
        { id: 2, price: 20.50 },
        { id: 3, price: 30.50 },
        { id: 4, price: 40.50 },
        { id: 5, price: 50.50 },
        { id: 6, price: 60.50 },
        { id: 7, price: 70.50 },
    ]
}


module.exports = {
    getProducts,
}