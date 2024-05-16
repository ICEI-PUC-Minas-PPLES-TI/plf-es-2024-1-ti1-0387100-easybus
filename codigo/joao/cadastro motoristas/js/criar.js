const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome-dpto");
const descricaoInput = document.querySelector("#descricao-dpto");

/**
 * Salva os dados no Local Storage do navegador.
 */
function salvar() {

    let departamento = new Object();
    departamento.id = obterID();
    departamento.nome = nomeInput.value.trim();
    departamento.descricao = descricaoInput.value.trim();

    let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
    departamentos.push(departamento);  
    localStorage.setItem("departamentos", JSON.stringify(departamentos));

    form.reset(); // Limpa o Formulário
    window.location.href = "index.html"; // Redireciona (Volta) para página inicial
}

/**
 * Função para obter um identificador único (ID) à partir do armazenamento local (localStorage) do navegador.
 * A função lê o último ID armazenado no localStorage, incrementa-o em 1 e, em seguida,
 * armazena o novo ID de volta no localStorage para uso futuro.
 * @returns {number} um identificador único no formato de número inteiro.
 */
function obterID() {

    // Obter o último ID armazenado no localStorage; 
    // se nenhum ID estiver armazenado, usar 0 como padrão
    let id = parseInt(localStorage.getItem("id")) || 0;

    // Incrementar o ID em 1 para gerar um novo ID 
    id += 1;
    
    // Armazenar o novo ID de volta no localStorage 
    // para ser usado na próxima chamada desta função
    localStorage.setItem("id", id);

    return id;
}