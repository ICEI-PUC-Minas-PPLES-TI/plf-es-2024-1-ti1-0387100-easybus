document.addEventListener('DOMContentLoaded', function() {
    const busInfos = document.querySelectorAll('.bus-info');
    busInfos.forEach(bus => {
        bus.addEventListener('click', function() {
            const details = this.querySelector('.bus-details');
            details.classList.toggle('hidden');
        });
    });

    const map = L.map('map').setView([-23.5505, -46.6333], 12); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);


    const buses = [
        { id: 101, latlng: [-23.5605, -46.6503] },
        { id: 102, latlng: [-23.5402, -46.6201] }
 
    ];

    buses.forEach(bus => {
        L.marker(bus.latlng).addTo(map)
            .bindPopup(`Ônibus ${bus.id}`)
            .openPopup();
    });
});
