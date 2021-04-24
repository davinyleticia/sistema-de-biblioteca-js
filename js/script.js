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
            <ul>
                <li><strong>Autor:</strong> ${setAutor} </li>
                <li><strong>Título:</strong> ${setTitulo}</li>
                <li><strong>ISBN:</strong> ${setISBN}</li>
                <li><strong>Publicaçao:</strong> ${setPublicacao}</li>
                <li><strong>Data de Inserção:</strong> ${setDate}, ${setSchedule}</li>
                <br>
                    <a href="#" class="delete">🗑 Deletar</a>
            </ul>
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