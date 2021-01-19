const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bd = require('./bd');

app.use(bodyParser.urlencoded({extends: true}))

app.get('/produtos',(req, res)=>{
    res.send(bd.getProdutos())
})

app.get('/produtos/:id', (req, res)=>{
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res)=>{
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res)=>{
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos', (req, res)=>{
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto)
})
app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}.`);
})