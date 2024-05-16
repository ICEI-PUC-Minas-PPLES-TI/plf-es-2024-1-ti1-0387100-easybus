let departamentos = [];
let departamento = {};

const form = document.querySelector("form");
const idInput = document.querySelector("#id-dpto");
const nomeInput = document.querySelector("#nome-dpto");
const descricaoInput = document.querySelector("#descricao-dpto");

/**
 * Carrega os dados de um departamento específico do localStorage para preencher um formulário.
 * Os dados são buscados com base no ID armazenado na sessionStorage.
 * Os campos do formulário são preenchidos com os dados do departamento encontrado.
 */
function carregarDadosFormulario() {

    // Obter o ID do departamento armazenado na sessionStorage
    const id = sessionStorage.getItem("idDepartamento");

    // Obter a lista de departamentos do localStorage; se não houver dados, usar um array vazio
    departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

    // Encontrar o departamento com o ID correspondente ao ID armazenado na sessionStorage
    departamento = departamentos.find((d) => { 
        return d.id == id; 
    });

    // Preencher os campos do formulário com os dados do departamento encontrado
    idInput.value = departamento.id;
    nomeInput.value = departamento.nome;
    descricaoInput.value = departamento.descricao;
}

/**
 * Busca um departamento por ID em um array de departamentos.
 * @param {number} id O ID do departamento a ser buscado.
 * @returns {number} O índice do departamento no array se encontrado, ou -1 se não encontrado.
 */
function buscarDepartamento(id) {

    for (let i = 0; i < departamentos.length; i++) {
        
        if (departamentos[i].id == id)
            return i;
    }

    return -1;
}

/**
 * Atualiza os dados de um departamento existente com base nos valores dos campos de entrada do formulário.
 * Os dados atualizados são salvos no localStorage e o formulário é limpo após a atualização.
 * A página é redirecionada de volta para a página inicial após a atualização.
 */
function atualizar() {

    // Atualiza os dados do objeto 'departamento' com os valores dos campos de entrada do formulário
    departamento.nome = nomeInput.value.trim();
    departamento.descricao = descricaoInput.value.trim();

    // Busca o índice do departamento atualizado no array de departamentos
    let indice = buscarDepartamento(departamento.id);

    // Substitui o departamento antigo pelo departamento atualizado no array 'departamentos'
    departamentos[indice] = departamento;

    // Salva os dados atualizados no localStorage
    localStorage.setItem("departamentos", JSON.stringify(departamentos));

    // Limpa o formulário após a atualização
    form.reset(); 

    // Redireciona (volta) para a página inicial (index.html)
    window.location.href = "index.html";
    
}

window.addEventListener("load", () => {

    carregarDadosFormulario();

});