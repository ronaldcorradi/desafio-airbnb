let hoje = retornarData();
let urlHoje = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='" + hoje + "'&$top=100&$format=json&$select=cotacaoCompra";
let requisicao = new XMLHttpRequest();
let valorDolarCompra = document.getElementById("cotacaoDolar");
requisicao.open("GET", urlHoje);
requisicao.addEventListener("load", function () {
    let dados = requisicao.responseText;
    let cotacao = JSON.parse(dados);
    valorDolarCompra.innerHTML = cotacao.value[0].cotacaoCompra;
})
requisicao.send();


function retornarData() {
    var data = new Date();
    return data.getMonth() + 1 + "-" + data.getDate() + "-" + data.getFullYear();
}


