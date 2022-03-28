/*const url = 'https://pokeapi.co/api/v2/pokemon/1/';
fetch(url)
.then(response =>response.json())
.then(data => {
  let element = document.getElementById('elemen')
  element.innerHTML = `<p>${data.name}</p>
  <img src=${data.imagen}}></img>`
  console.log(data);
})
.catch(err=>console.log(err));*/

axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(function (response) {
    // función que se ejecutará al recibir una respuesta
    console.log(response);
  })
  .catch(function (error) {
    // función para capturar el error
    console.log(error);
  })
  .then(function () {
    // función que siempre se ejecuta
  });