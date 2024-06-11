const tbody = document.querySelector("tbody");

function carregarTabela() {

    let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

    for (let i = 0; i < departamentos.length; i++) {
        
        const departamento = departamentos[i];

        let tr = document.createElement("tr");
        tr.id = `departamento-${departamento.id}`;
        const celulas = Object.values(departamento);

        for (let j = 0; j < celulas.length; j++) {
            
            const td = document.createElement("td");
            td.innerText = celulas[j];
            tr.appendChild(td);
        }

        let tdAcao = criarBotoesAcao();
        tr.appendChild(tdAcao);

        tbody.appendChild(tr);   
    }
}

function criarBotao(rotulo) {

    const botao = document.createElement("button");

    botao.type = "button";

    botao.innerText = rotulo;

    return botao; 
}

 
function criarBotoesAcao() {

    const td = document.createElement("td");

    const visualizarButton = criarBotao("");
    const editarButton = criarBotao("Detalhes");
    const excluirButton = criarBotao("");

    visualizarButton.addEventListener("click", (event) => {

        const linha = event.target.parentElement.parentElement;
        const celulas = linha.childNodes;
        let id = parseInt(celulas[0].innerText);

        sessionStorage.setItem("idDepartamento", id);

        window.location.href = "visualizar_(joao).html";
    });

    editarButton.addEventListener("click", (event) => {

        const linha = event.target.parentElement.parentElement;
        const celulas = linha.childNodes;
        let id = parseInt(celulas[0].innerText);
        
        sessionStorage.setItem("idDepartamento", id);

        window.location.href = "editar_motoristas.html";
    });

    excluirButton.addEventListener("click", (event) => {

        const linha = event.target.parentElement.parentElement;
        excluir(linha);

    });

    td.appendChild(visualizarButton);
    td.appendChild(editarButton);
    td.appendChild(excluirButton);

    return td;
}

function excluir(linha) {

    const celulas = linha.childNodes;
    let idDpto = parseInt(celulas[0].innerText);

    let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

    let indiceDptoExcluido = buscarDepartamento(idDpto, departamentos);

    let confirmacao = confirm("Deseja excluir um departamento?");

    if (confirmacao) {

        departamentos.splice(indiceDptoExcluido, 1);

        localStorage.setItem("departamentos", JSON.stringify(departamentos));

        linha.remove();
    }
}

function buscarDepartamento(id, departamentos) {

    for (let i = 0; i < departamentos.length; i++) {
        
        if (departamentos[i].id == id)
            return i;
    }

    return -1;
}

window.addEventListener("load", () => {
    carregarTabela();
});

