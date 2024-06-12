document.addEventListener('DOMContentLoaded', function() {
    const busInfos = [
        { 
            id: 101,
            linha: "Rota A",
            horario: "08:00 - 10:00",
            motorista: "João Silva",
            capacidade: "40 passageiros",
            ultimaManutencao: "2023-05-15",
            latlng: [-19.9173, -43.9346] 
        },
        { 
            id: 102,
            linha: "Rota B",
            horario: "09:00 - 11:00",
            motorista: "Maria Souza",
            capacidade: "35 passageiros",
            ultimaManutencao: "2023-06-01",
            latlng: [-19.9199, -43.9388] 
        }
       
    ];

    let lastClickedBus = null; 

    const map = L.map('map').setView([-19.9167, -43.9345], 12); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);

    busInfos.forEach(bus => {
        const marker = L.marker(bus.latlng).addTo(map)
            .bindPopup(`Ônibus ${bus.id}`)
            .on('click', function() {
                if (lastClickedBus && lastClickedBus.id === bus.id) {
                    showBusInfo(lastClickedBus); 
                } else {
                    showBusInfo(bus); 
                    lastClickedBus = bus; 
                }
            });
    });

    function showBusInfo(bus) {
        const fleetInfo = document.getElementById('fleet-info');
        fleetInfo.innerHTML = `
            <h2>Informações do Ônibus ${bus.id}</h2>
            <div class="bus-info">
                <h3>Número do Ônibus: ${bus.id}</h3>
                <p>Linha: ${bus.linha}</p>
                <p>Horário: ${bus.horario}</p>
                <p>Motorista: ${bus.motorista}</p>
                <div class="bus-details">
                    <p>Capacidade: ${bus.capacidade}</p>
                    <p>Última manutenção: ${bus.ultimaManutencao}</p>
                </div>
            </div>
        `;
    }
});
