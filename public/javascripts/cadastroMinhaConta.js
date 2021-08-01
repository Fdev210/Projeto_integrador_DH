async function onClickAlterar(event) {
    event.preventDefault()
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const senha = document.getElementById("senha").value
    const nascimento = document.getElementById("nascimento").value
    const nomeError = document.getElementById("nomeError")
    const emailError = document.getElementById("emailError")
    const telefoneError = document.getElementById("telefoneError")
    const senhaError = document.getElementById("senhaError")
    const nascimentoError = document.getElementById("nascimentoError")
    const preferenciaError = document.getElementById("preferenciaError")
    const preferencias = document.getElementsByName("preferencias")
    const id = document.getElementById("id").content

    nomeError.classList.remove("show")
    emailError.classList.remove("show")
    telefoneError.classList.remove("show")
    senhaError.classList.remove("show")
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

    const response = await fetch(`http://localhost:3000/cadastro/${id}`, {
        method: 'PUT',
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
        window.alert("Usuário alterado com sucesso!")
    } else {
        window.alert(data.errors[0].msg)
    }
    
}

async function onClickExcluir(event) {
    event.preventDefault()
    if (window.confirm("Confirma a exclusão?")) {
        const id = document.getElementById("id").content
        const response = await fetch(`http://localhost:3000/cadastro/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        window.alert("Usuário excluido com sucesso!")
    }
}


window.onload = () => {
    const alterar = document.getElementById("alterar")
    const excluir = document.getElementById("excluir")
    alterar.addEventListener("click", onClickAlterar)
    excluir.addEventListener("click", onClickExcluir)
}