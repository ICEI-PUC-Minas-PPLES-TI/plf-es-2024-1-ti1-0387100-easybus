document.addEventListener('DOMContentLoaded', () => {
    const incidentList = document.getElementById('incidentList');
    const sendButton = document.getElementById('sendButton');
    const recipientInput = document.getElementById('recipient');

    // JSON com incidentes
    const incidentes = [
        {
            "titulo": "Incidente 1",
            "descricao": "Descrição detalhada do incidente 1.",
            "data": "2024-06-01",
            "local": "Terminal Central",
            "motorista": "João Silva",
            "status": "Pendente"
        },
        {
            "titulo": "Incidente 2",
            "descricao": "Descrição detalhada do incidente 2.",
            "data": "2024-06-02",
            "local": "Rua das Flores",
            "motorista": "Maria Souza",
            "status": "Em Andamento"
        },
        {
            "titulo": "Incidente 3",
            "descricao": "Descrição detalhada do incidente 3.",
            "data": "2024-06-03",
            "local": "Avenida Brasil",
            "motorista": "Carlos Santos",
            "status": "Resolvido"
        },
        {
            "titulo": "Incidente 4",
            "descricao": "Descrição detalhada do incidente 4.",
            "data": "2024-06-04",
            "local": "Praça da Sé",
            "motorista": "Ana Oliveira",
            "status": "Em Andamento"
        },
        {
            "titulo": "Incidente 5",
            "descricao": "Descrição detalhada do incidente 5.",
            "data": "2024-06-05",
            "local": "Av. Paulista",
            "motorista": "Ricardo Mendes",
            "status": "Pendente"
        },
        {
            "titulo": "Incidente 6",
            "descricao": "Descrição detalhada do incidente 6.",
            "data": "2024-06-06",
            "local": "Terminal Rodoviário",
            "motorista": "Fernanda Lima",
            "status": "Resolvido"
        },
        {
            "titulo": "Incidente 7",
            "descricao": "Descrição detalhada do incidente 7.",
            "data": "2024-06-07",
            "local": "Ponte Estaiada",
            "motorista": "Pedro Santos",
            "status": "Pendente"
        }
    ];

    // Função para carregar a lista de incidentes
    function carregarIncidentes() {
        incidentes.forEach(incidente => {
            const item = document.createElement('div');
            item.classList.add('incident-item');
            item.innerHTML = `
                <h3>${incidente.titulo}</h3>
                <p>${incidente.descricao}</p>
                <p><strong>Data:</strong> ${incidente.data}</p>
                <p><strong>Local:</strong> ${incidente.local}</p>
                <p><strong>Motorista:</strong> ${incidente.motorista}</p>
                <p><strong>Status:</strong> ${incidente.status}</p>
            `;
            // Adiciona evento de clique para exibir modal com detalhes do incidente
            item.addEventListener('click', () => {
                exibirDetalhesIncidente(incidente);
                preencherCampoPara(incidente.motorista);
            });
            incidentList.appendChild(item);
        });
    }

    // Exibir detalhes do incidente em um modal
    function exibirDetalhesIncidente(incidente) {
        const modalContent = `
            <div class="modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h2>${incidente.titulo}</h2>
                    <p>${incidente.descricao}</p>
                    <p><strong>Data:</strong> ${incidente.data}</p>
                    <p><strong>Local:</strong> ${incidente.local}</p>
                    <p><strong>Motorista:</strong> ${incidente.motorista}</p>
                    <p><strong>Status:</strong> ${incidente.status}</p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalContent);

        const modal = document.querySelector('.modal');
        const closeButton = document.querySelector('.close-button');

        // Fechar modal ao clicar no botão de fechar ou fora do modal
        closeButton.addEventListener('click', () => modal.remove());
        window.addEventListener('click', event => {
            if (event.target === modal) {
                modal.remove();
            }
        });
    }

    // Preencher automaticamente o campo "Para"
    function preencherCampoPara(valor) {
        recipientInput.value = valor;
    }

    // Carregar incidentes ao iniciar a página
    carregarIncidentes();

    // Evento de clique no botão enviar
    sendButton.addEventListener('click', () => {
        const recipient = recipientInput.value;
        const response = document.getElementById('response').value;

        if (recipient && response) {
            alert('Sua mensagem foi enviada com sucesso!');
            // Redirecionar para uma página de confirmação (opcional)
            // window.location.href = 'confirmation.html';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Evento de clique no botão voltar
    document.getElementById('backButton').addEventListener('click', () => {
        window.history.back();
    });
});
