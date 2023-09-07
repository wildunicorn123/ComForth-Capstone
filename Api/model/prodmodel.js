
const db = require('../config/db.js');
const
getProducts = (result) => {
        db.query("SELECT * FROM Products", (err, results) => {
            if(err){
                console.log(err);
                result (err, null);
            } else {
                result(null, results);
            }
        });
    }
    const
    getProductById = (id, result) => {
        db.query("SELECT * FROM Products WHERE ProductID = ?", [id], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        });
    }
    const
    insertProduct = (data, result) => {
        db.query("INSERT INTO Products SET ?", [data], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
    const
        updateProductById = (data, id, result) => {
        db.query("UPDATE Products SET ProductName = ?, amount= ? WHERE ProductID= ?", [data.ProductName, data.Price, data.ProductID, data.ProductImage, data.ProductDesc], (err, results) => {             
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
    const
    deleteProductById = (id, result) => {
        db.query("DELETE FROM Products WHERE ProductID = ?", [id], (err, results) => {
            if(err) {
                console.log(err);
                result (err, null);
            } else {
                result(null, results);
            }
        });
    }

    module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProductById,
    deleteProductById
}