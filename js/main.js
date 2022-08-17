
var contenido= document.querySelector('#contenido')
const URL= 'https://jsonplaceholder.typicode.com/comments';

function traer(){
fetch(URL)
    .then(res => res.json())
    .then(data => {
      tabla(data)
    })
}

function tabla(data){
    contenido.innerHTML=""
    for(let valor of data){ 
        contenido.innerHTML += `
        <tr>
        <th scope="row">${valor.id}</th>
        <td>${valor.name}</td>
        <td>${valor.email}</td>
        <td>${valor.body}</td>
      </tr>
        `
    }
}
 