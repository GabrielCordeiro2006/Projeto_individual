var database = require("../database/config");



function buscarUltimasMedidas() {
    const instrucaoSql = `
      SELECT 
        genero,
        COUNT(*) as quantidade
      FROM dados
      GROUP BY genero
      ORDER BY quantidade DESC;
    `;
    return database.executar(instrucaoSql);
  }
  
  function buscarMedidasEmTempoReal() {
    const instrucaoSql = `
      SELECT 
        genero,
        COUNT(*) as quantidade
      FROM (
        SELECT genero
        FROM dados
        ORDER BY idDados DESC
        LIMIT 100 -- Adjust this limit as needed
      ) as recent_data
      GROUP BY genero
      ORDER BY quantidade DESC;
    `;
    return database.executar(instrucaoSql);
  }
  
  module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
  };