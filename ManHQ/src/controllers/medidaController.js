var medidaModel = require("../models/medidaModel");


function buscarUltimasMedidas(req, res) {
    console.log(`Recuperando as últimas medidas agrupadas por gênero`);

    medidaModel.buscarUltimasMedidas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
} 

function buscarMedidasEmTempoReal(req, res) {
    console.log(`Recuperando medidas em tempo real agrupadas por gênero`);

    medidaModel.buscarMedidasEmTempoReal()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as medidas em tempo real.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
};