let selectPesquisa = document.getElementById("selectTipoPropriedade");
let tipos = [];
let urlDados = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

let req = new XMLHttpRequest();
req.open("GET", urlDados);
req.addEventListener("load", function () {
    let dados = req.responseText;
    let imoveis = JSON.parse(dados);
    for (let index = 0; index < imoveis.length; index++) {
        if (!tipos.includes(imoveis[index].property_type)) {
            tipos.push(imoveis[index].property_type);
        }
    }  
    for (let index = 0; index < tipos.length; index++) {
        let opt = document.createElement("option");
        opt.text = tipos[index];
        opt.value = tipos[index];
        selectPesquisa.appendChild(opt);       
    }     
})

function preencherSelect(){
    
}


req.send();




