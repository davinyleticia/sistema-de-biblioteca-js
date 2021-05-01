let books = [{
    isbn: "9781593275846",
    title: "Eloquent JavaScript, Second Edition",
    author: "Marijn Haverbeke",
    published: "2014-12-14T00:00:00.000Z",
},
{
    isbn: "9781449331818",
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    published: "2012-07-01T00:00:00.000Z",
},
{
    isbn: "9781449365035",
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    published: "2014-02-01T00:00:00.000Z",
},
{
    isbn: "9781491950296",
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    published: "2014-07-01T00:00:00.000Z",
},
{
    isbn: "9781593277574",
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    published: "2016-09-03T00:00:00.000Z",
},
{
    isbn: "9781491904244",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    published: "2015-12-27T00:00:00.000Z",
},
{
    isbn: "9781449325862",
    title: "Git Pocket Guide",
    author: "Richard E. Silverman",
    published: "2013-08-02T00:00:00.000Z",
},
{
    isbn: "9781449337711",
    title: "Designing Evolvable Web APIs with ASP.NET",
    author: "Glenn Block, et al.",
    published: "2014-04-07T00:00:00.000Z",
}
]


function addBooks() {
 
    books.map((book) => {
        const parseSubtitle = !book.subtitle ? "-" : book.subtitle;
        const parseData = new Date(book.published);
        const data = parseData.setDate(parseData.getDate() + 1);
        const dataFormatada = parseData.toLocaleDateString('pt-br');
 
        document.getElementById('resposta').innerHTML +=
            `
            <ul>
                <li><strong>Autor:</strong> ${book.author} </li>
                <li><strong>Título:</strong> ${book.title}</li>
                <li><strong>ISBN:</strong> ${book.isbn}</li>
                <li><strong>Data de Inserção:</strong> ${dataFormatada}</li>
                    <a href="#" class="delete">🗑 Deletar</a>
            </ul>
            <br>
    
        `
    })
}

addBooks();

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
                    <a href="#" class="delete">🗑 Deletar</a>
            </ul>
            <br>
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