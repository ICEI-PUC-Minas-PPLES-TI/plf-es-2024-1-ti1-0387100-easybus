document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const homeLink = document.getElementById('home-link');
    const fleetLink = document.getElementById('fleet-link');
    const manageLink = document.getElementById('manage-link');
    const chatSection = document.getElementById('chat-section');
    const panel = document.getElementById('panel');
    const panelSections = document.querySelectorAll('.panel-section');
    
    const toggleSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section.classList.contains('hidden')) {
            panel.classList.remove('hidden');
            panelSections.forEach(sec => sec.classList.add('hidden'));
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
            panel.classList.add('hidden');
        }
    };

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection('home-panel');
    });

    fleetLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection('fleet-panel');
    });

    manageLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection('manage-panel');
    });

    chatToggle.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection('chat-panel');
    });

    const sendButton = document.getElementById('send-button');
    const chatInput = document.getElementById('chat-input');
    const messages = document.querySelector('.messages');

    sendButton.addEventListener('click', () => {
        const messageText = chatInput.value;
        if (messageText.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = messageText;
            messages.appendChild(messageElement);
            chatInput.value = '';
            messages.scrollTop = messages.scrollHeight;
        }
    });

 
    const map = L.map('map').setView([-23.5505, -46.6333], 12); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});
