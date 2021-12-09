
//variaveis
var customer = window.document.getElementById("lat1");
var sell = window.document.getElementById("lat2");
var employer = window.document.getElementById("lat3");
var store = window.document.getElementById("lat4")
var action = window.document.getElementById("action");
var view = window.document.getElementById("view");
var display = window.document.getElementById("display_txt");
var icon_display = window.document.getElementById("display_icon");

//array
var customers=[]
var products=[]
var employers=[]
var saless=[]


/*
var number = prompt("digite seu CEP");
var requestURL = 'https://viacep.com.br/ws/'+number+'/json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function(){
    var new_dados = request.response;
    var logradouro =jsonObj['logradouro'];
    alert (logradouro);
}

function showsdados(jsonObj){
    var logradouro =jsonObj['logradouro'];
    alert (logradouro);
}
*/

function customerss(){
    icon_display.setAttribute('src', 'icones/clientes.png');
};

    // function lat1_click(){
        
    //     var name = prompt("digite seu nome");
    //     var number = prompt("digite seu cep");
    //     var age = prompt("digite sua idade")
    //     //let age=prompt("digite sua idade");

    //     //o number é usado na requisição abaixo

    //     /*
    //     Criamos o objeto xmlhttp a partir da classe XLMHttpRequest. Este objeto é responsável pela troca de dados entre páginas armazenadas em um servidor web.
    //     Isto é muito útil, pois podemos obter conteúdo de várias páginas em tempo real e atualizar partes de uma página web sem precisar carregar a página inteira.
    //     */
    //     let xhr = new XMLHttpRequest();


    //     xhr.open('GET', 'https://viacep.com.br/ws/'+number+'/json');

    //     /*
    //     Usando readyState é igual a 4 e  status é igual a 200, a condição somente será verdadeira se
    //     a comunicação foi concluída e está pronta para a transferência de dados.
    //     */

    //     xhr.onreadystatechange = () => {
    //         if(xhr.readyState == 4) {
    //             if(xhr.status == 200) {
    //                 //alert(xhr.responseText);
    //                 /*
    //                 para converter o conteúdo JSON em string usamos o método JSON.parse()
    //                 */
    //                 var endereço = JSON.parse(xhr.responseText);
                
    //                 //Para se obter um valor em um objeto JavaScript, utilizamos o formato objeto.chave
    //                 //nesse caso endereço.lodradouro

    //                 alert("Olá "+name+" seu endereço é: "+endereço.logradouro+" estou indo te matar");
    //                 //window.document.getElementById("display_txt").innerHTML="Olá "+name+" seu endereço é: "+endereço.logradouro+" estou indo te matar"
                    
    //             }
    //         }
    //     };
    //     //envia a requisição
    //     xhr.send();

    //     //salva as informações em um array e depois envia para o array customers global
    //     var CUSTOMER={
    //         name: name,
    //         age: age,
    //         adress: endereço.logradouro,
    //         espaço: '</br>'
    //     }
    //     //enviar os dados CUSTOMER.object em uma requisição para o php
    //     customers.push(CUSTOMER.name, CUSTOMER.age, CUSTOMER.adress, CUSTOMER.espaço);
        
    // };


function lat2_click(){
    sell.style.backgroundColor='red'
    icon_display.setAttribute('src', 'icones/sale.png');
};

function lat3_click(){
    employer.style.backgroundColor='red'
    icon_display.setAttribute('src', 'icones/empregados.png');
    icon_display.style.width="10%"
};

function lat4_click(){
    store.style.backgroundColor='red'
};

function vcliccust(){
    display.innerHTML = customers
    //display.style.height="200px"
    
}

/* função que envia usa método GET 
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://viacep.com.br/ws/'+ +'/json');

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            alert(xhr.responseText);
        }
    }
};

xhr.send();

*/ 

function get(){
    
    
    //fetch api


    //requisição que faz o get, ela pode ser melhorada para usar post e etc
    
    fetch('http://localhost:21262/view/customer')
        //promisses
        //o response é um objeto que o fetch api trás sobre a requisição
        .then(function(response){
            //o que quero pegar são os dados do body, no caso queremos um json
            //console.log(response)
            return response.json();

        })
        //encadeando 
        .then(function(Customers){
            console.log(Customers)
            display.textContent= Customers[0].Name + Customers[0].Age
            return information.json();
        })
    
        
        

}





action.addEventListener("click", get)