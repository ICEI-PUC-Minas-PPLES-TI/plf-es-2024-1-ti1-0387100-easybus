let departamentos = [];
let departamento = {};

const form = document.querySelector("form");
const idInput = document.querySelector("#id-dpto");
const nomeInput = document.querySelector("#nome-dpto");
const descricaoInput = document.querySelector("#descricao-dpto");

function carregarDadosFormulario() {

    const id = sessionStorage.getItem("idDepartamento");

    departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

    departamento = departamentos.find((d) => { 
        return d.id == id; 
    });

    idInput.value = departamento.id;
    nomeInput.value = departamento.nome;
    descricaoInput.value = departamento.descricao;
}

function buscarDepartamento(id) {

    for (let i = 0; i < departamentos.length; i++) {
        
        if (departamentos[i].id == id)
            return i;
    }

    return -1;
}

function atualizar() {

    departamento.nome = nomeInput.value.trim();
    departamento.descricao = descricaoInput.value.trim();

    let indice = buscarDepartamento(departamento.id);

    departamentos[indice] = departamento;

    localStorage.setItem("departamentos", JSON.stringify(departamentos));

    form.reset(); 

    window.location.href = "mostrar_motoristas.html";
    
}

window.addEventListener("load", () => {

    carregarDadosFormulario();

});