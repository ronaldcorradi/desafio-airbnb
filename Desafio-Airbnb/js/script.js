const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
let comboPesquisa = document.getElementById("selectTipoPropriedade");
let botao = document.getElementById("btnFiltro");
let resultado = [];
let idsName = [];
let idsPhoto = [];
var idName=0;
var idPrice=0;
var idPhoto=0;
var idPropType=0;

async function getDados(url) {
  const response = await fetch(url);
  return await response.json();
}

function criarCard(elemento) {
  document.getElementById('colunasCards').innerHTML += `
      <div class="col-auto mb-3 justify-content-center">
        <div class="card cartao" style="width:21rem;">
          <img class="card-img-top imagem-imovel" src="${elemento.photo}" id="idPhoto-${idPhoto++}">
          <div class="card-body">      
            <h6 class="textoElemento nomeObjeto" name="nome" id="idName-${(idName++)}">${elemento.name}</h6>
            <p class="textoElemento" id="${idPropType++}">${elemento.property_type}</p>
            <p class="card-text textoElemento" id="${idPrice++}">${elemento.price}</p>            
        </div>   
      </div>`;
    idsPhoto.push(idPhoto);
    idsName.push(idName);    
}

let idname1 = document.getElementById("colunasCards").innerHTML;
function popular(dados) {
  dados.forEach(elemento => {
    criarCard(elemento);    
  })
}

window.onload = async () => {
  const dados = await getDados(url);
  popular(dados);
}

function filtrar(event) {
  event.preventDefault();
  document.getElementById('colunasCards').innerHTML = '';
  let tipoImovel = comboPesquisa.value;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", function () {
    let dados = xhr.responseText;
    let elementos = JSON.parse(dados);

    if (tipoImovel != "") {
      resultado = [];
      for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].property_type == tipoImovel) {
          resultado.push(elementos[i]);
        }
      }
      popular(resultado);
    } else {
      popular(elementos);
    }
  });
  xhr.send();
}

function teste(){
  let nome = document.getElementsByName("nome");
  alert(nome);
}



{/* <a href="#" class="btn btn-outline-danger textoElemento botao" 
  data-toggle="modal" data-target="#janelaModal">Simular hospedagem
</a> */}




