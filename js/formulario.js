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

    let row= document.querySelector(".row");

    row.appendChild(montaCard(servico));


});

function montaCard(servico){    

    let col = document.createElement("div");
    col.classList.add("col-sm-4");    

    let card = document.createElement("div");
    card.classList.add("card");

    card.appendChild(montaBody(servico));
    col.appendChild(card);

    return col;

}


function montaBody(servico){  
    let body = document.createElement("div");
        body.classList.add("card-body")

    let title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = servico.tipo;

    let p = document.createElement("p");
      p.classList.add("card-text");
      p.textContent = servico.descricao;

     let a1 = document.createElement("a");
      a1.classList.add("btn");
      a1.classList.add("btn-success");
      a1.textContent = "Iniciar"; 

    let a2 = document.createElement("a");
      a2.classList.add("btn");
      a2.classList.add("btn-danger");
      a2.textContent = "Finalizar"; 

    let a3 = document.createElement("a");
      a3.classList.add("btn"); 
      a3.classList.add("btn-primary");
      a3.textContent = "Detalhes";

      body.appendChild(title);
      body.appendChild(p);
      body.appendChild(a1);
      body.appendChild(a2);
      body.appendChild(a3);

    return body;

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