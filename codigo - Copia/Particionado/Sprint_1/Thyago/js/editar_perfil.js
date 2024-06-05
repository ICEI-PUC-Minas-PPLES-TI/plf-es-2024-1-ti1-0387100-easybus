function salvarDados() {
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var cnpj = document.getElementById('cnpj').value;
    var email = document.getElementById('email').value;
  
    var dados = {
      "nome": nome,
      "cpf": cpf,
      "cnpj": cnpj,
      "email": email
    };
  
    var json = JSON.stringify(dados);
  
    fetch('/salvarDados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
