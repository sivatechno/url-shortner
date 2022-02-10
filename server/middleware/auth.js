const Users =  require('../models/usersModels');
const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    const { token } = req.headers

    if(!token)
    {
        res.json("you must logged in")
    }
    else{
        const accessToken = token.replace('Bearer ',"")
        jwt.verify(accessToken,"jsonwebtoken encryptiopn code",(err,payload) =>{
            if(err)
            {
                res.json("you must logged in")
            }
            else{
                const {_id} = payload
                // res.json("you are authorized")
                next()
                // Users.findOne(_id).then(userData =>{
                //     req.user = userData
                //     next();
                // })
            }
        })
    }
}