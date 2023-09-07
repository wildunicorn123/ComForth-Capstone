
const {getProducts,getProductById,insertProduct,updateProductById,deleteProductById} = require('../model/prodmodel.js');

const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err){
            res.send(err);
        }else{
            console.log("Display products");
            res.json({
                status: 200,
                results
            })
        } 
    });
}
const showProductById = (req, res) => {
    getProductById(req.params.id, (err, result) => {
        if (err){
            res.send(err);
        }else{
            console.log("singular product");
            res.json({
                status: 200,
                result
            })
        }
    });
}
const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });


}
const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
module.exports = {
    showProducts,
    showProductById,
    createProduct,
    updateProduct,
    deleteProduct
}