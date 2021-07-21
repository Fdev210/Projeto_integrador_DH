async function onClick(event) {
    event.preventDefault()
    const id = document.getElementById('inputId').value
    const preferencias = document.getElementsByName("preferencias")

    function leiaPreferencias(p) {
        let prefs = []
        for (i in p) {
            if (p[i].checked) {
                prefs.push(p[i].id)
            }
        }
        return prefs
        }

    const preferenciasComic = leiaPreferencias(preferencias)

    let formData = new FormData();

    for (let i = 0; i < preferenciasComic.length; i++) {
        formData.append("preferenciasComic", preferenciasComic[i])
    }

   await fetch(`http://localhost:3000/comicpage/${id}`, {
        method: "DELETE",
        body: formData,
    })


    window.alert('Comic deletada com sucesso !')
    window.location="http://localhost:3000/comicpage/comiclist"

}


window.onload = () => {
    const btnDelete = document.getElementById("btnDelete")
    btnDelete.addEventListener("click", onClick)
}