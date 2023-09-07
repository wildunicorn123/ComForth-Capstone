
const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser')
const {users,} = require('../model');
const { showProducts,showProductById,createProduct,updateProduct,deleteProduct} = require('./product');


routes.get('/Users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/User/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(),
    (req, res)=> {
        users.register(req, res)
    })

routes.patch('/User/:id', bodyParser.json(),
    (req, res)=>{
        users.updateUser(req, res)
    })
routes.delete('/User/:id', (req, res)=>{
    users.deleteUser(req, res)
})
routes.get('/Products', (req, res)=>{
    showProducts(req, res)
})
routes.get('/Products/:id', (req, res)=>{
    showProductById (req, res)
})
routes.post('/Products', bodyParser.json(),
    (req, res)=>{
        createProduct(req, res)
    })
routes.patch('/Products/:id', bodyParser.json(),
    (req, res)=>{
        updateProduct(req, res)
    })
routes.delete('/Products/:id', (req, res)=>{
    deleteProduct(req, res)
})

module.exports = {
    express, routes
}