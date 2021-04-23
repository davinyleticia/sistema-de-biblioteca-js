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
        <li>
            <strong>Autor:</strong> ${setAutor}, <strong>Título:</strong> ${setTitulo},
            <strong>ISBN:</strong> ${setISBN}, <strong>Publicaçao:</strong> ${setPublicacao},
            <strong>Data de Inserção:</strong> ${setDate}, ${setSchedule}, <br><br>
            <a href="#" class="delete" id="delete">Deletar</a> 
            <br><br>
        </li>
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
        event.target.parantElement.remove();
    }
})