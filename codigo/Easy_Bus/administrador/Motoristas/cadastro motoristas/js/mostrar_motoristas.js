const tbody = document.querySelector("tbody");

function carregarTabela() {
    let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

    departamentos.forEach(departamento => {
        let tr = document.createElement("tr");
        tr.id = `departamento-${departamento.id}`;

        Object.values(departamento).forEach(celula => {
            let td = document.createElement("td");
            td.innerText = celula;
            tr.appendChild(td);
        });

        let tdAcao = criarBotoesAcao();
        tr.appendChild(tdAcao);

        tbody.appendChild(tr);
    });
}

function criarBotao(rotulo) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.innerText = rotulo;
    return botao;
}

function criarBotoesAcao() {
    const td = document.createElement("td");

    const visualizarButton = criarBotao("Visualizar");
    const editarButton = criarBotao("Detalhes");
    const excluirButton = criarBotao("Excluir");

    visualizarButton.addEventListener("click", (event) => {
        const linha = event.target.parentElement.parentElement;
        const id = parseInt(linha.childNodes[0].innerText);
        sessionStorage.setItem("idDepartamento", id);
        window.location.href = "visualizar.html";
    });

    editarButton.addEventListener("click", (event) => {
        const linha = event.target.parentElement.parentElement;
        const id = parseInt(linha.childNodes[0].innerText);
        sessionStorage.setItem("idDepartamento", id);
        window.location.href = "editar.html";
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
    const idDpto = parseInt(linha.childNodes[0].innerText);
    let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
    const indiceDptoExcluido = buscarDepartamento(idDpto, departamentos);

    if (confirm("Deseja excluir um departamento?")) {
        departamentos.splice(indiceDptoExcluido, 1);
        localStorage.setItem("departamentos", JSON.stringify(departamentos));
        linha.remove();
    }
}

function buscarDepartamento(id, departamentos) {
    return departamentos.findIndex(departamento => departamento.id == id);
}

window.addEventListener("load", carregarTabela);
