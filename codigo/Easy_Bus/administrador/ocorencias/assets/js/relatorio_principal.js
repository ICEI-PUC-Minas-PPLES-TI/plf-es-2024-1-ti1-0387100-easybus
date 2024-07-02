function formatarDataHora(dataHora) {
    var data = new Date(dataHora);
    return data.toLocaleDateString() + ' ' + data.toLocaleTimeString();
}

function criarElementoRegistro(motorista) {
    var registro = document.createElement('div');
    registro.className = 'registros';

    var iconPerfil = document.createElement('div');
    iconPerfil.className = 'Iconperfil';
    var img = document.createElement('img');
    img.src = motorista.fotoPerfil;
    img.alt = 'Foto de perfil de ' + motorista.nomeMotorista;
    iconPerfil.appendChild(img);

    var infoDetalhada = document.createElement('div');
    infoDetalhada.className = 'InfoDetalhada';
    infoDetalhada.innerHTML = '<div>Nome do motorista: ' + motorista.nomeMotorista +
        '<br>Chapa: ' + motorista.chapa +
        '<br>Data e hora: ' + formatarDataHora(motorista.dataHora) + '</div>';

    var direcionamento = document.createElement('div');
    direcionamento.className = 'direcionamento botao';
    direcionamento.innerHTML = '<a href="../views/relatorio_detalhado.html">Detalhes</a>';

    var infoPerfil = document.createElement('div');
    infoPerfil.className = 'InfoPerfil';
    infoPerfil.appendChild(infoDetalhada);
    infoPerfil.appendChild(direcionamento);

    registro.appendChild(iconPerfil);
    registro.appendChild(infoPerfil);

    return registro;
}

function carregarDados() {
    fetch('../data/relatorio_principal.json')
        .then(response => response.json())
        .then(dados => {
            var secao = document.querySelector('main section');
            secao.innerHTML = '';

            for (var motorista of dados) {
                var registro = criarElementoRegistro(motorista);
                secao.appendChild(registro);
            }
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
}

window.addEventListener('load', carregarDados);
