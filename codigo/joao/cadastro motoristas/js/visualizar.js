const nomeH2 = document.querySelector("h2");
const descricaoP = document.querySelector("p");

function exibirDetalhesDepartamento() {
    const id = sessionStorage.getItem("idDepartamento");

    let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

    let departamento = departamentos.find((d) => { return d.id == id; } );

    nomeH2.innerText = departamento.nome;

    descricaoP.innerText = departamento.descricao;
}

window.addEventListener("load", () => {

    exibirDetalhesDepartamento();

});