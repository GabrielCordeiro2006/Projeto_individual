var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM escola WHERE idEscola = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM escola`;

  return database.executar(instrucaoSql);
}

function buscarPornome(nome) {
  var instrucaoSql = `SELECT * FROM usuario WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(id, nome) {
  var instrucaoSql = `INSERT INTO escola (idEscola, nome) VALUES ('${id}', '${nome}')`;

  return database.executar(instrucaoSql);
}

function pesquisa(genero,idade,leitura,email_two,tipoescola) {
  var instrucaoSql = `INSERT INTO dados(genero,idade,leitura,email,tipoescola) VALUES ('${genero}','${idade}','${leitura}','${email_two}','${tipoescola});`;

  return database.executar(instrucaoSql);
}


module.exports = { buscarPornome, buscarPorId, cadastrar, listar, pesquisa };
