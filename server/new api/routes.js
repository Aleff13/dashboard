//aqui iremos colocar nossas rotas
const bodyParser = require("body-parser")
const { json } = require("body-parser")
const express = require("express")
const routes = express.Router()
const fs = require("fs")


//variavel db para ser como se fosse o banco de dados

let customer_db = require("./customer_db.json")
let employer_db = require("./employer_db.json")
let store_db = require("./store_db.json")

//aqui iremos criar a funcionalidade get -> qual url vou atribuir a essa requisição
routes.get('/view/customer', (req, res) => {
    fs.readFile("customer_db.json", "UTF-8" , (err, data) =>{
        return res.json(JSON.parse(data))
    })
    
})
//rota de cliente
routes.post("/add/customer", (req, res) => {
    //quando vc faz post, voce deve enviar alguma informação
    const body = req.body

    //o body vai conter todos os dados

    //fazer uma tratativa caso o body não exista
    if(!body)
        return res.status(400).end()

    //adicionando coisas ao db
    customer_db.push(body)
    fs.writeFile("customer_db.json", JSON.stringify(customer_db), err => console.error(err))
    return res.json(body).status(201)
})

//get de empregados
routes.get('/view/employer', (req, res) => {
    fs.readFile("employer_db.json", 'UTF-8', (err, data) => {
        return res.json(JSON.parse(data))
    })
}) 

//cadastrar empregados
routes.post("/add/employer", (req, res, res2) =>{

    const body = req.body

    if(!body)
        return res.status(400).end()

    if(bodyParser)

    employer_db.push(body)
    fs.writeFile("employer_db.json", JSON.stringify(employer_db), err => console.error(err))

    return res.status(201).json(body)
})

routes.get("/view/store", (req, res) =>{
    fs.readFile("store_db.json", "utf-8", (err, data) =>{
        return res.json(JSON.parse(data))
    })
})

routes.post("/add/store", (req, res) => {

    const body = req.body

    const id = req.params.id
    let newDB = store_db.filter(item => {
        if(item[id])
            return item
    })

    if(!body)
        return res.status(400).end

    store_db.push(body)
    fs.writeFile("store_db.json", JSON.stringify(store_db), err => console.log(err))

    return res.status(201).json(body).send(newDB)

})

//refatorar 

// routes.delete('/:id', (req, res) => {
//     const id = req.params.id

//     let newDB = db.filter(item => {
//         if(item[id])
//             return item
//     })

//     db = newDB

//     return res.send(newDB)
// })

module.exports = routes 