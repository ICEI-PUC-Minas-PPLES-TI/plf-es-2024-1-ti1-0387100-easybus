const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome-dpto");
const descricaoInput = document.querySelector("#descricao-dpto");

function salvar() {
    let departamento = {};
    departamento.id = obterID();
    departamento.nome = nomeInput.value.trim();
    departamento.descricao = descricaoInput.value.trim();

    let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
    departamentos.push(departamento);  
    localStorage.setItem("departamentos", JSON.stringify(departamentos));

    form.reset();
    window.location.href = "index.html";
}

function obterID() {
    let id = parseInt(localStorage.getItem("id")) || 0;
    id += 1;
    localStorage.setItem("id", id);
    return id;
}
