var database = require("../database/config");

function buscarescolaPornome(idUsuario) {

  var instrucaoSql = `SELECT * from usuario a WHERE fk_escola = ${idUsuario} `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(EscolaId, nome) {
  
  var instrucaoSql = `INSERT INTO (nome,idEscola) escola VALUES (${nome},${EscolaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



module.exports = {
  buscarescolaPornome,
  cadastrar
}
