async function onClickSubmit(event) {
    event.preventDefault()
    const titulo = document.getElementById("titulo").value
    const autor = document.getElementById("autor").value
    const ano = document.getElementById("ano").value
    const sinopse = document.getElementById("sinopse").value
    const pdf = document.getElementById("pdf")
    const capa = document.getElementById("capa")
    const antevisao = document.getElementById("antevisão")
    const tituloError = document.getElementById("tituloError")
    const autorError = document.getElementById("autorError")
    const anoError = document.getElementById("anoError")
    const sinopseError = document.getElementById("sinopseError")

    tituloError.classList.remove("show")
    autorError.classList.remove("show")
    anoError.classList.remove("show")
    sinopseError.classList.remove("show")
  
    const errors = []

    if (!titulo) {
        errors.push({
            element: tituloError,
            message: "Titulo precisa ser informado"
        })
    }

    if (!autor) {
        errors.push({
            element: autorError,
            message: "Autor precisa ser informado"
        })
    }
    
    if (!ano) {
        errors.push({
            element: anoError,
            message: "Ano precisa ser informado"
        })
    }

    if (!sinopse) {
        errors.push({
            element: sinopseError,
            message: "Sinopse precisa ser informada"
        })
    }

    if (errors.length > 0) {
        errors.forEach(erro => {
            erro.element.innerText = erro.message
            erro.element.classList.add("show")
        })
        return
    }
    
    var formdata = new FormData();
    formdata.append("titulo", titulo);
    formdata.append("autor", autor);
    formdata.append("ano", ano);
    formdata.append("sinopse", sinopse);
    formdata.append("pdf", pdf.files[0]);
    formdata.append("capa", capa.files[0]);
    formdata.append("antevisao", antevisao.files[0]);
    formdata.append("antevisao", antevisao.files[1]);
    formdata.append("antevisao", antevisao.files[2]);
    
    const requestOptions = {
        method: 'POST',
        body: formdata,
      };


    const response = await fetch("http://localhost:3000/files", requestOptions)

    const data = await response.text()
    
    if (!data.errors) {
        document.getElementById("titulo").value = ""
        document.getElementById("autor").value = ""
        document.getElementById("ano").value = ""
        document.getElementById("sinopse").value = ""
        window.alert("Usuário cadastrado com sucesso!")
    } else {
        window.alert(data.errors[0].msg)
    }
    
}


window.onload = () => {
    const form = document.getElementById("formulario")
    form.addEventListener("submit", onClickSubmit)
}