const db = require('../config/db.js')
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middelware/AuthenUser')
class Users{
    fetchUsers(req, res) {
        const query = `
        SELECT UserID, UserName,
        UserLastName,UserRole, UserAge, UserGender,
        UserEmail,UserProfiletxt, UserPassword
        FROM Users;
        `
        db.query(query,
            (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
            })
    }
    fetchUser(req, res) {
        const query = `
        SELECT UserID, UserName,
        UserLastName,UserRole, UserAge, UserGender,
        UserEmail,UserProfiletxt, UserPassword
        FROM Users;
        WHERE userID = ${req.params.id};
        `
        db.query(query,
            (err, result)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    result
                })
            })
    }
    login(req, res) {
    }
    async register(req, res) {
        const data = req.body
        data.userPass = await hash(data.userPass,15)
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        const query = `
        INSERT INTO Users
        SET ?;
        `
        db.query(query,
            [data],
            (err)=>{
            if(err) throw err
            let token = createToken(user)
            res.cookie("User", token,
            {
                maxAge: 3600000,
                httpOnly: true
            })
            res.json({
                status: res.statusCode,
                msg: "You are registered."
            })
        })
    }
    updateUser(req, res) {
        const query = `
        UPDATE Users
        SET ?
        WHERE UserID = ?
        `
        db.query(query,
            [req.body, req.params.id],
            (err)=> {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "The users updated."
                })
            } )
    }
    deleteUser(req, res) {
        const query = `
        DELETE FROM users
        WHERE UserID = ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "A user deleted."
            })
        })
    }
}
module.exports = Users