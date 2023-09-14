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
        const {UserEmail, UserPassword} = req.body
        const query = `
        SELECT UserID, UserName,
        UserLastName,UserRole, UserAge, UserGender,
        UserEmail,UserProfiletxt, UserPassword
        FROM Users;
        WHERE UserEmail = ${UserEmail};
        `
        db.query(query, async (err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            }else {
                await compare(UserPassword,
                    result[0].UserPassword,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        const token =
                        createToken({
                            UserEmail,
                            UserPassword
                        })
                        
                        res.cookie("LegitUser",
                        token, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or you have not registered"
                            })
                        }
                    })
            }
        })
    }

    async register(req, res) {
        const data = req.body
        data.UserPassword = await hash(data.UserPassword,10)
        const user = {
            emailAdd: data.UserEmail,
            userPass: data.UserPassword
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