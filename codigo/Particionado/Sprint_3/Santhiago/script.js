document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});

document.getElementById('sendButton').addEventListener('click', function() {
    const recipient = document.getElementById('recipient').value;
    const message = document.getElementById('messageInput').value;

    if (recipient && message) {
        addMessage(message);
        document.getElementById('messageInput').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function addMessage(messageContent) {
    const messageTemplate = document.getElementById('message-template');
    const newMessage = messageTemplate.cloneNode(true);
    newMessage.style.display = 'block';
    newMessage.querySelector('.message-content').textContent = messageContent;
    document.querySelector('.messages-section').appendChild(newMessage);
    document.querySelector('.messages-section').scrollTop = document.querySelector('.messages-section').scrollHeight;
}
