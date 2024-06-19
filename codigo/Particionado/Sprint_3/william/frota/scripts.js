function showBusInfo(busId) {
    const busInfo = document.getElementById(`busInfo${busId}`);
    const busDetails = document.getElementById(`busDetails${busId}`);

    const busData = {
        1: `
            <strong>Capacidade:</strong> 50 passageiros<br>
            <strong>Piloto:</strong> João da Silva<br>
            <strong>Número do Ônibus:</strong> 12345<br>
            <strong>Placa:</strong> ABC-1234<br>
            <strong>Horário:</strong> 06:00 - 22:00<br>
            <strong>Outras Informações:</strong> Ar condicionado, Wi-Fi, Acessibilidade
        `,
        2: `
            <strong>Capacidade:</strong> 45 passageiros<br>
            <strong>Piloto:</strong> Maria Oliveira<br>
            <strong>Número do Ônibus:</strong> 54321<br>
            <strong>Placa:</strong> XYZ-5678<br>
            <strong>Horário:</strong> 07:00 - 23:00<br>
            <strong>Outras Informações:</strong> Ar condicionado, Wi-Fi, Acessibilidade
        `
    };

    busDetails.innerHTML = busData[busId] || 'Informações não disponíveis';
    busInfo.style.display = 'block';
}

function closeBusInfo(busId) {
    const busInfo = document.getElementById(`busInfo${busId}`);
    busInfo.style.display = 'none';
}

document.getElementById('busSearch').addEventListener('input', function(e) {
    const filter = e.target.value.toLowerCase();
    const buses = document.querySelectorAll('.bus');

    buses.forEach(bus => {
        const busText = bus.innerText.toLowerCase();
        if (busText.includes(filter)) {
            bus.style.display = '';
        } else {
            bus.style.display = 'none';
        }
    });
});
