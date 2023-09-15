
const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser')
const {users,} = require('../model');
const { showProducts,showProductById,createProduct,updateProduct,deleteProduct} = require('./product');
const { getOrders,insertOrder, updateOrderById, deleteOrderById } = require('../model/orders')

routes.get('/Users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/User/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register', async (req, res)=> {
        try{
            const { username, password } = req.body;

            const hashedPassword = await bcrypt.hash(password,10);

            const User = newUser({
                username,
                password:hashedPassword,
            });

            await User.save();

        res.status(201).json({message: "user is registered"});
        } catch (error){
            res.status(500).json({error:"an error"});
        }
    })


routes.post('/login',
    bodyParser.json(), (req, res)=>{
        users.login(req, res)
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
routes.get('/User/:id/Orders', (req, res)=>{
    getOrders (req, res)
})
routes.post('/User/:id/Order', bodyParser.json(),
    (req, res)=>{
        insertOrder(req, res)
    })
routes.patch('/User/:id/Order/:id', bodyParser.json(),
    (req, res)=>{
        updateOrderById(req, res)
    })
// routes.delete('/User/:id/Order', (req, res)=>{
//     deleteOrderBy(req, res)
// })
routes.delete('/User/:id/Order/:id', (req, res)=>{
    deleteOrderById(req, res)
})

module.exports = {
    express, routes
}