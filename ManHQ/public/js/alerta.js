


var alertas = [];

function alertar(resposta, idDados) {
    // Processamento dos dados para determinar o gênero mais popular
    var generos = resposta.map(item => item.genero);
    var generoMaisPopular = encontrarGeneroMaisPopular(generos);

    console.log(`${generoMaisPopular} está com o gênero mais popular!`);

    // Exibição da mensagem de gênero mais popular (substitua ou ajuste conforme necessário)
    console.log(`Verifique os detalhes no sistema.`);
}

function encontrarGeneroMaisPopular(generos) {
    // Lógica para encontrar o gênero mais popular
    if (generos.length === 0) {
        return 'Nenhum gênero encontrado';
    }

    var contador = {};
    generos.forEach(genero => {
        contador[genero] = (contador[genero] || 0) + 1;
    });

    var generoMaisPopular = Object.keys(contador).reduce((a, b) => contador[a] > contador[b] ? a : b);

    return generoMaisPopular;
}
function exibirMensagemAlerta(generoMaisPopular, idadeDoGeneroMaisPopular) {
    // Exemplo de exibição na console
    console.log(`O gênero mais popular é ${generoMaisPopular} com idade representativa de ${idadeDoGeneroMaisPopular} anos.`);
    // Você pode ajustar essa função para exibir a mensagem na interface conforme necessário
}


function obterdados(idDados) {
    fetch(`/medidas/tempo-real/${idDados}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idDados);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idDados} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquário para gráfico: ${error.message}`);
        });
}

function alertar(resposta, idDados) {
    var generoMaisPopular = determinarGeneroMaisPopular(resposta);

    var alerta = {
        idAquario: idDados,
        generoMaisPopular: generoMaisPopular
    };

    var indice = alertas.findIndex(item => item.idAquario == idDados);

    if (indice >= 0) {
        alertas[indice] = alerta;
    } else {
        alertas.push(alerta);
    }

    exibirCards();
}

function determinarGeneroMaisPopular(resposta) {
    // Contagem dos gêneros
    var contagemGeneros = {};
    resposta.forEach(item => {
        var genero = item.genero.toLowerCase(); // Considerando que o gênero esteja em minúsculas
        contagemGeneros[genero] = contagemGeneros[genero] ? contagemGeneros[genero] + 1 : 1;
    });

    // Encontrar o gênero mais popular
    var generoMaisPopular = null;
    var maxContagem = 0;

    for (var genero in contagemGeneros) {
        if (contagemGeneros[genero] > maxContagem) {
            maxContagem = contagemGeneros[genero];
            generoMaisPopular = genero;
        }
    }

    return generoMaisPopular;
}

function exibirCards() {
    var alertaDiv = document.getElementById('alerta');
    alertaDiv.innerHTML = '';

    alertas.forEach(alerta => {
        var descricao = JSON.parse(sessionStorage.AQUARIOS).find(item => item.id == alerta.idAquario).descricao;
        var genero = alerta.generoMaisPopular;
        alertaDiv.innerHTML += transformarEmDiv(descricao, genero);
    });
}

function transformarEmDiv(descricao, genero) {
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="cor-alerta">&#12644;</div> 
            <h3 class = "#ffff">${descricao} está com o gênero ${genero} mais popular!</h3>
            <small class = "#fff">Verifique os detalhes no sistema.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.AQUARIOS).forEach(item => {
        obterdados(item.id);
    });
    setTimeout(atualizacaoPeriodica, 5000); // Atualização a cada 5 segundos
}

// Início da atualização periódica ao carregar a página
atualizacaoPeriodica();
