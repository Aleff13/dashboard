// cria o objeto XMLHttpRequest
const xhttp = new XMLHttpRequest(); 

// chama a função quando a requisição estiver pronta
xhttp.onload = function() { 
    document.getElementById("lat1").innerHTML = this.responseText;
 }

 // faz a requisição AJAX - método GET ou POST
xhttp.open("POST", "index.php");
xhttp.send(); 