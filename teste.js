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
                console.log(Customers[0].Name)
                out.textContent= Customers[0].Name +" " +Customers[0].Age
                return information.json();
            })
        
            
            
    
    }

    function customers(){
        icon_display.setAttribute('src', 'icones/clientes.png');
        //alert("ola")
    };

var icon_display = window.document.getElementById("display_icon")
var cust = window.document.getElementById("lat1")

var customer = window.document.getElementById("customer_icon")

var btn = window.document.getElementById("action")

var out = window.document.getElementById("display_txt")

btn.addEventListener("click", get)

cust.addEventListener("click", customers)