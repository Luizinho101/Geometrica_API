
const helloService = require('../services/helloService');

function exibirHello(req, res) {

    const resposta = helloService.exibirHello();

    return res.status(200).json(resposta);

}

module.exports = {
    exibirHello
};