const express = require('express')
const app = express()

app.get('/cadastro/:nome/:sobrenome/:idade', (req, res) => {
    res.send(`Nome: ${req.params.nome} |
        Sobrenome: ${req.params.sobrenome} |
        Idade: ${req.params.idade}`)
})

app.listen(8081, () => {
    console.log('Iniciando servidor na porta 8081');
})