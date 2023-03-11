document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementsByName("telefone")[0].value;

    if (nome !="" && email != "" && telefone !=" "){
        alert("Prontinho, " + nome + "Você receberá as novidades no email!");
    }else{
        alert("Por favor, preencha os campos: Nome, Email e Telefone!")
    }
    }
