const podeDirigir = (temCnhAprovada, idade) => {
    if (temCnhAprovada && idade >= 18) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    podeDirigir,
}