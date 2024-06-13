fetch('../data/novo_relatorio.json')
    .then(response => response.json())
    .then(data => {
        const conteudo = `
        <p><strong>Texto:</strong> ${data.texto}</p>
        <p><strong>De:</strong> ${data.de}</p>
        <p><strong>Para:</strong> ${data.para}</p>
        <p><strong>Horário:</strong> ${new Date(data.horario).toLocaleString()}</p>
    `;
        document.getElementById('dadosRelatorio').innerHTML = conteudo;
    })
    .catch(error => console.error('Erro ao carregar dados:', error));