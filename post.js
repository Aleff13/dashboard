

function post(){ 

    var obj = {
        "Id": "1",
        "Name": "deu certo!",
        "Age": "21",
        "Address" : "88045680",
        "Type": "stage"
    }

    fetch('http://localhost:21262/add/customer', {
        method: "POST",
        body: JSON.stringify({
            obj
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    });
}
var btn = window.document.getElementById("btn")

btn.addEventListener("click", post)