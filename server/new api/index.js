const express = require("express")
const morgan = require("morgan")
const cors = require ("cors")
const bodyParser = require("body-parser")

const routes = require('./routes')

//estamos atribuindo as funcionalidades dos pacotes nas nossas variaveis

const app = express()

//agora iremos adicionar funcionalidades no nosso app

//para catar os logs
app.use(morgan("dev"))


//função do urlencoded : Ele analisa as solicitações de entrada com cargas úteis codificadas por url e é baseado no analisador de corpo. Sintaxe: express.urlencoded ([options]) Parâmetro: O parâmetro options contém várias propriedades como extendido, inflate, limit, verify etc.
app.use(bodyParser.urlencoded({extended: false}))

//será usado para definir o tipo de dado, nesse caso json
app.use(express.json())

app.use(cors())

app.use(routes)
//pronto, servidor configurado!
app.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`)
})