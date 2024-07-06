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

  function buscarMedidasEmTempoReal_l() {
    const instrucaoSql = `
  // -- Selecionar o usuário com a maior quantidade de leitura
SELECT * FROM dados 
WHERE leitura = (SELECT MAX(leitura) FROM dados);
    `;
    return database.executar(instrucaoSql);
  }


  function buscarMedidasEmTempoReal_t() {
    const instrucaoSql = `
// -- Selecionar o usuário com a menor quantidade de leitura
SELECT * FROM dados 
WHERE leitura = (SELECT MIN(leitura) FROM dados);
    `;
    return database.executar(instrucaoSql);
  }



  
  module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidasEmTempoReal_l,
    buscarMedidasEmTempoReal_t   
  };