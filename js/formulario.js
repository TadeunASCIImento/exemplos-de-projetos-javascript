// formulario.js


// evento do botão de confirmação
const confirmar = document.querySelector("#confirmar");
confirmar.addEventListener('click',function(event){
    event.preventDefault();
    console.log('Evento click do botão capturado.');

    const formulario = document.querySelector(".form-agendamento");    
    const propietario = obterProprietario(formulario);
    const veiculo = obterVeiculo(formulario);
    const servico = obterServico(formulario);
    let trServico = novaTr(veiculo,servico);
    let tabela = document.querySelector("#servicos-agendados");
    tabela.appendChild(trServico);
    formulario.request();
    
    console.log(propietario);
    console.log(veiculo);
    console.log(servico); 


});
// monta linha do novo serviço na tabela.
function novaTr(veiculo,servico){
    let trServico = document.createElement("tr");
    trServico.appendChild(novaTd(veiculo.marca,"td-marca"));
    trServico.appendChild(novaTd(veiculo.modelo,"td-modelo"));
    trServico.appendChild(novaTd(veiculo.placa,"td-placa"));
    trServico.appendChild(novaTd(veiculo.quilometros,"td-quilometros"));
    trServico.appendChild(novaTd(veiculo.cor,"td-cor"));
    trServico.appendChild(novaTd(veiculo.ano,"td-ano"));
    trServico.appendChild(novaTd(veiculo.observacoes,"td-obs-veiculo"));
    trServico.appendChild(novaTd(servico.tipo,"td-tipo"));
    trServico.appendChild(novaTd(servico.descricao,"td-descricao"));
    trServico.appendChild(novaTd(servico.inicio,"td-inicio"));
    trServico.appendChild(novaTd(servico.fim,"td-fim"));
    trServico.appendChild(novaTd(servico.observacoes,"td-obs-servico"));
    return trServico;

}

function novaTd(dado,classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;

}

// obtem dados do proprietário.
function obterProprietario(formulario){
    let propietario = {
        nome:formulario.nome.value,
        sobrenome:formulario.sobrenome.value,
        endereco:formulario.endereco.value,
        telefone:formulario.telefone.value,
        email:formulario.email.value
    }
    return propietario;
}

// obtem dados do veículo.
function obterVeiculo(formulario){
     let veiculo = {
        marca:formulario.marca.value,
        modelo:formulario.modelo.value,
        placa:formulario.placa.value,
        quilometros:formulario.quilometros.value,
        cor:formulario.cor.value,
        ano:formulario.ano.value,
        observacoes:formulario.observacoes.value,
     }
     return veiculo;
}

// obtem os dados do serviço.
function obterServico(formulario){
    let servico = {
        tipo:formulario.servico.value,
        inicio:formulario.inicio.value,
        fim:formulario.fim.value,
        descricao:formulario.descricao.value
    }
    return servico;

}