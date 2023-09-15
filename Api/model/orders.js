const db = require('../config/db.js');
const
getOrders = (result) => {
        db.query("SELECT * FROM Orders", (err, results) => {
            if(err){
                console.log(err);
                result (err, null);
            } else {
                result(null, results);
            }
        });
    }
    const
    insertOrder = (data, result) => {
        db.query("INSERT INTO Orders SET ?", [data], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
    const
        updateOrderById = (data, id, result) => {
        db.query("UPDATE Orders SET OrderID = ?, User= ? WHERE ProdID= ?", [data.OrderID, data.UserID, data.ProdID], (err, results) => {             
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
    const
    deleteOrderById = (id, result) => {
        db.query("DELETE FROM Orders WHERE OrderID = ?", [id], (err, results) => {
            if(err) {
                console.log(err);
                result (err, null);
            } else {
                result(null, results);
            }
        });
    }

    module.exports = {
    getOrders,
    insertOrder,
    updateOrderById,
    deleteOrderById
}