const nomeH2 = document.querySelector("#nome-dpto");
const descricaoP = document.querySelector("#descricao-dpto");

function exibirDetalhesDepartamento() {
    const id = sessionStorage.getItem("idDepartamento");

    let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
    let departamento = departamentos.find(d => d.id == id);

    if (departamento) {
        nomeH2.innerText = departamento.nome;
        descricaoP.innerText = departamento.descricao;
    }
}

window.addEventListener("load", exibirDetalhesDepartamento);
