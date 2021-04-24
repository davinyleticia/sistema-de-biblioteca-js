function showData(event) {
    event.preventDefault();

    let setAutor = document.getElementById('autor').value;
    let setTitulo = document.getElementById('Titulo').value;
    let setISBN = document.getElementById('ISBN').value;
    let setPublicacao = document.getElementById('Publicacao').value;
    let setDate = new Date().toLocaleDateString('pt-br');
    let setSchedule = new Date().toLocaleTimeString('pt-br');

    if (setAutor  === "" || setTitulo === "" || setISBN === "" || setPublicacao === ""  ){
        alert ("Preencha todos os campos")
    } else {
    document.getElementById('resposta').innerHTML += `
    <main>
        <div class="img-book">
            <img src="data:image/png;base64,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">
        </div>
        <div class="book">
            <ul>
                <li><strong>Autor:</strong> ${setAutor} </li>
                <li><strong>Título:</strong> ${setTitulo}</li>
                <li><strong>ISBN:</strong> ${setISBN}</li>
                <li><strong>Publicaçao:</strong> ${setPublicacao}</li>
                <li><strong>Data de Inserção:</strong> ${setDate}, ${setSchedule}</li>
                <br>
                <div class="botao">
                    <a href="#" class="delete">🗑 Deletar</a>
                </div>
            </ul>
        </div>
    </main>
    <hr>
    `
    clearDate()
    }
}

function clearDate(){

    let setAutor = document.getElementById('autor').value = "";
    let setTitulo = document.getElementById('Titulo').value = "";
    let setISBN = document.getElementById('ISBN').value = "";
    let setPublicacao = document.getElementById('Publicacao').value = "";
}

document.getElementById('resposta').addEventListener('click', function(event){

    if(event.target.className === "delete"){
        event.target.parentElement.remove();
    }
})