function get(option){
    
    var index = window.document.getElementById("content_id").value
        //fetch api


        //requisição que faz o get, ela pode ser melhorada para usar post e etc
        
        fetch('http://localhost:21262/view/'+option)
            //promisses
            //o response é um objeto que o fetch api trás sobre a requisição
            .then(function(response){
                //o que quero pegar são os dados do body, no caso queremos um json
                //console.log(response)
                return response.json();
    
            })
            //encadeando 
            .then(function(Customers){
                console.log(Customers[index].Name)
                out.textContent= Customers[index].Name +" " +Customers[index].Age
                return information.json();
            })
        
            
            
    
    }

    function post(option){
        //catar os valores dos campos em um array e transformar em json
        let inname = window.document.getElementById("name")
        let inage = window.document.getElementById("age")

        //valores
        let name = inname.value
        let age = inage.value

        var obj = {
            "Id": "1",
            "Name": "vim pelo dash",
            "Age": "21",
            "Address" : "88045680",
            "Type": "stage"
        }

        fetch('http://localhost:21262/add/'+option, {
        method: "POST",
        body: JSON.stringify({
            obj
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    });

    
}




var btn_view = window.document.getElementById("view")
var btn_post = window.document.getElementById("action")
var out = window.document.getElementById("display_txt")



//referencia aos formulários
var form_customer = window.document.getElementById("form_customer")
var form_store = window.document.getElementById("form_store")
var form_employer = window.document.getElementById("form_employer")
var form_prod = window.document.getElementById("form_prod")
//formulário que obtem id
var form_id = window.document.getElementById("content")

var icon_display = window.document.getElementById("display_icon")

var option = ''

var lat1 = window.document.getElementById("lat1")
var lat2 = window.document.getElementById("lat2")
var lat3 = window.document.getElementById("lat3")
var lat4 = window.document.getElementById("lat4")

var btn_get = window.document.getElementById("btn_get")


lat1.addEventListener("click", function icons() {
    icon_display.setAttribute('src', "icones/clientes.png");
    var option = "customer"

    //ocultando os outros forms
    form_employer.style.display="none"
    form_store.style.display="none"
    form_prod.style.display="none"

    btn_post.addEventListener("click", function(){
        form_customer.style.display='flex'
        form_id.style.display="none"
        post(option)
        
    },false)
    btn_view.addEventListener("click", function(){
        form_id.style.display="flex"
        form_customer.style.display="none"
        btn_get.addEventListener("click", function() {
            
            get(option);
            return;
        })
    }, false)
    
})
lat2.addEventListener("click", function icons() {
    icon_display.setAttribute("src", "icones/sale.png");
    var option = "sell"

    //ocultando os outros forms
    form_employer.style.display="none"
    form_store.style.display="none"
    form_customer.style.display="none"

    btn_view.addEventListener("click", function(){
        form_id.style.display="flex"
        btn_get.addEventListener("click", function() {
            get(option);
        })
    }, false)
})
lat3.addEventListener("click", function icons() {
    icon_display.setAttribute("src", "icones/empregados.png");
    var option = "employer"
    btn_view.addEventListener("click", function(){
        form_id.style.display="flex"
        btn_get.addEventListener("click", function() {
            get(option);
        })
    }, false)
})
lat4.addEventListener("click", function icons() {
    icon_display.setAttribute("src", "icones/caixa.png");
    var option = "store"
    btn_view.addEventListener("click", function(){
        form_id.style.display="flex"
        btn_get.addEventListener("click", function() {
            get(option);
        })
    }, false)
})
cust.addEventListener("click", post)
