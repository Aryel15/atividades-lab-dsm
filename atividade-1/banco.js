const Sequelize = require('sequelize')
const sequelize = new Sequelize('db_atividade1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!');
}).catch((error) => {
    console.error(error);
})

const Cliente = sequelize.define('cliente', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    celular: {
        type: Sequelize.INTEGER
    },
})

// Cliente.sync({force: true})

Cliente.create({
    nome: 'Aryel Anne',
    endereco: 'Rua Html, 5',
    bairro: 'Bairro Javascript',
    cep: '1234567',
    telefone: 12345677,
    celular: 999456778,
})

Cliente.create({
    nome: 'Julia Santos',
    endereco: 'Rua CSS, 3',
    bairro: 'Bairro NodeJS',
    cep: '8901234',
    telefone: 40028922,
    celular: 999428922,
})

Cliente.create({
    nome: 'Roberto Lima',
    endereco: 'Rua Ruby, 123',
    bairro: 'Bairro React',
    cep: '5678901',
    telefone: 80803306,
    celular: 999803306,
})