const nomeH2 = document.querySelector("h2");
const descricaoP = document.querySelector("p");

/**
 * Exibe os detalhes de um departamento com base no ID armazenado na sessionStorage.
 * Os detalhes do departamento (nome e descrição) são obtidos do localStorage.
 */
function exibirDetalhesDepartamento() {

    // Obter o ID do departamento armazenado na sessionStorage
    const id = sessionStorage.getItem("idDepartamento");

    // Obter a lista de departamentos do localStorage; se não houver dados, usar um array vazio
    let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

    // Encontrar o departamento com o ID correspondente ao ID armazenado
    let departamento = departamentos.find((d) => { return d.id == id; } );

    // Exibir o nome do departamento em um elemento <h2> com id "nomeH2"
    nomeH2.innerText = departamento.nome;

    // Exibir a descrição do departamento em um elemento <p> com id "descricaoP"
    descricaoP.innerText = departamento.descricao;
}

window.addEventListener("load", () => {

    exibirDetalhesDepartamento();

});