//const { body } = require("express-validator") 

async function onClickSubmit(event) {
    event.preventDefault()
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const senha = document.getElementById("senha").value
    const confirmaSenha = document.getElementById("confirmaSenha").value
    const nascimento = document.getElementById("nascimento").value
    const nomeError = document.getElementById("nomeError")
    const emailError = document.getElementById("emailError")
    const telefoneError = document.getElementById("telefoneError")
    const senhaError = document.getElementById("senhaError")
    const confirmaSenhaError = document.getElementById("confirmaSenhaError")
    const nascimentoError = document.getElementById("nascimentoError")
    const preferenciaError = document.getElementById("preferenciaError")
    const preferencias = document.getElementsByName("preferencias")

    nomeError.classList.remove("show")
    emailError.classList.remove("show")
    telefoneError.classList.remove("show")
    senhaError.classList.remove("show")
    confirmaSenhaError.classList.remove("show")
    nascimentoError.classList.remove("show")
    preferenciaError.classList.remove("show")

    function criaPreferencias(p) {
        let prefs = []
        for (i in p) {
            if (p[i].checked) {
                prefs.push(p[i].id)
            }
        }
        return prefs
        }

    const preferenciasCliente = criaPreferencias(preferencias)

    const errors = []

    if (!nome) {
        errors.push({
            element: nomeError,
            message: "Nome precisa ser informado"
        })
    }

    if (!email) {
        errors.push({
            element: emailError,
            message: "Email precisa ser informado"
        })
    }
    
    if (!telefone) {
        errors.push({
            element: telefoneError,
            message: "Telefone precisa ser informado"
        })
    }

    if (!senha) {
        errors.push({
            element: senhaError,
            message: "Senha precisa ser informada"
        })
    }

    if (confirmaSenha != senha) {
        errors.push({
            element: confirmaSenhaError,
            message: "Senhas não conferem"
        })
    }

    if (!nascimento) {
        errors.push({
            element: nascimentoError,
            message: "Data de nascimento precisa ser informada"
        })
    }

    if(preferenciasCliente.length === 0) {
        errors.push({
            element: preferenciaError,
            message: "Selecione pelo menos uma preferência"
        })
    }


    if (errors.length > 0) {
        errors.forEach(erro => {
            erro.element.innerText = erro.message
            erro.element.classList.add("show")
        })
        return
    }

    const response = await fetch("http://localhost:3000/cadastro", {
        method: 'POST',
        body: JSON.stringify({
            nome,
            email,
            telefone,
            senha,
            data_nascimento: nascimento,
            preferenciasCliente              
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    
    if (!data.errors) {
        document.getElementById("nome").value = ""
        document.getElementById("email").value = ""
        document.getElementById("telefone").value = ""
        document.getElementById("senha").value = ""
        document.getElementById("confirmaSenha").value = ""
        document.getElementById("nascimento").value = ""
        preferencias.forEach((preferencia) => {
            preferencia.checked = false
        })
        window.alert("Usuário cadastrado com sucesso!")
    } else {
        window.alert(data.errors[0].msg)
    }
    
}


window.onload = () => {
    const form = document.getElementById("formulario")
    form.addEventListener("submit", onClickSubmit)
}