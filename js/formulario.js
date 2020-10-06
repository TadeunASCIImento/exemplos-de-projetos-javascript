// formulario.js

const formulario = document.querySelector(".form-agendamento");

// evento do botão de confirmação
const confirmar = document.querySelector("#confirmar");
confirmar.addEventListener('click',function(event){
    event.preventDefault();
    console.log('Evento click do botão capturado.');

    const propietario = obterProprietario(formulario);
    console.log(propietario);

    const veiculo = obterVeiculo(formulario);
    console.log(veiculo) 
});

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
        observacoes:formulario.observacoes.value,
     }
     return veiculo;
}