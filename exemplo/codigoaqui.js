const { getProducts } = require("./outrocodigoaqui");

const podeDirigir = (temCnhAprovada, idade) => {
    if (temCnhAprovada && idade >= 18) {
        return true;
    } else {
        return false;
    }
}

const getMaxProductPrice = () => {
    const products = getProducts();

    if (products.length === 0) {
        return 0
    }

    return products[0].price
}



module.exports = {
    podeDirigir,
    getMaxProductPrice,
}