function echo(){
    
    //fetch api

    fetch('http://localhost:21262/view/customer')
    
    //ele irá resultar uma promisse

    //que pode ter dois valores
    //sucesso -resolve 
        //vamos realizar algo caso a resposta seja 200 e uma caso seja outra coisa
        .then(response => {
        console.log("Response", response)
        return response.json()
        })

        .then(user => {
            console.log("User", user)
            return JSON.stringify(user[0])
        })
        

    //rejeitado somente quando cai internet
        .catch(error => console.log(error))
        

}

function echo_employer(){
    
    //fetch api

    fetch('http://localhost:21262/view/customer')
        //promisses
        //o response é um objeto que o fetch api trás sobre a requisição
        .then(function(response){
            //o que quero pegar são os dados do body, no caso queremos um json
            //console.log(response)
            return response.json();

        })
        //encadeando
        .then(function(information){
            console.log(information[1].Name);
        })
    
        

}



var btn = window.document.getElementById("btn")

var btn_employer = window.document.getElementById("btn_employer")

btn.addEventListener('click', echo)

btn_employer.addEventListener("click", echo_employer)
