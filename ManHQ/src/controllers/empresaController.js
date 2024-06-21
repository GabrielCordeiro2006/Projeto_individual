var empresaModel = require("../models/empresaModel");

function buscarPornome(req, res) {
  var nome = req.query.nome;

  empresaModel.buscarPornome(nome).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var id = req.body.id;
  var nome = req.body.nome;

  empresaModel.buscarPornome(nome).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a escola com o ${nome} já existe` });
    } else {
      empresaModel.cadastrar(id, nome).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPornome,
  buscarPorId,
  cadastrar,
  listar,
};
