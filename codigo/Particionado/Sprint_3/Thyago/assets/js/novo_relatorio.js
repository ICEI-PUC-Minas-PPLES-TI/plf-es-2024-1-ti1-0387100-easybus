function salvarTexto() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        var texto = document.getElementById('texto').value.trim();
        var de = document.getElementById('de').value.trim();
        var para = document.getElementById('para').value.trim();
        var dataHora = new Date().toISOString();

        if (texto === '' || de === '') {
            alert('Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        var relatorio = {
            texto: texto,
            de: de,
            para: para,
            dataHora: dataHora
        };

        fetch('http://localhost:3000/relatorios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(relatorio),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta do servidor');
            }
            return response.json();
        })
        .then(data => {
            console.log('Relatório salvo com sucesso:', data);
            window.location.href = '../views/mensagem_relatorio.html';
        })
        .catch((error) => {
            console.error('Ocorreu um erro:', error);
        });
    });
}

function redirecionarParaOutraPagina() {
    window.location.href = "../views/mensagem_relatorio.html";
  }
  function salvarTexto() {
    // ... seu código ...
}

// Chama a função salvarTexto quando a página é carregada
salvarTexto();
