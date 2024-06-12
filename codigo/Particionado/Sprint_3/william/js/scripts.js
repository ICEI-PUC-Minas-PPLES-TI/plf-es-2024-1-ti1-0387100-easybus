document.addEventListener('DOMContentLoaded', function() {
    const busInfos = document.querySelectorAll('.bus-info');
    busInfos.forEach(bus => {
        bus.addEventListener('click', function() {
            const details = this.querySelector('.bus-details');
            details.classList.toggle('hidden');
        });
    });


    const map = L.map('map').setView([-19.9167, -43.9345], 12); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);

   
    const buses = [
        { id: 101, latlng: [-19.9173, -43.9346] },
        { id: 102, latlng: [-19.9199, -43.9388] }

    ];

    buses.forEach(bus => {
        L.marker(bus.latlng).addTo(map)
            .bindPopup(`Ônibus ${bus.id}`)
            .openPopup();
    });
});
