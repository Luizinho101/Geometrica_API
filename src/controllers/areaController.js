const areaService = require('../services/areaService');

function calcularQuadrado(req, res) {

    const { lado } = req.body;

    if (!lado || typeof lado !== 'number' || lado <= 0) {
        return res.status(400).json({
            error: "O campo 'lado' é obrigatório e deve ser um número positivo."
        });
    }

    const resultado = areaService.calcularQuadrado(lado);

    return res.status(200).json({
        resultado
    });

}

module.exports = {
    calcularQuadrado
};