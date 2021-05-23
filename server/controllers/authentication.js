const jwt = require('jwt-simple')
const keys = require('../config/keys')
const User = require('../models/user')


function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, user.id);
}
exports.signup = function(req,res,next) {
    const email = req.body.email;
    console.log(email)
    const password = req.body.password
    console.log(password)

    if(!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password'})
    }
    // see if user with given email exist
    User.findOne({email:email}, function(err, existingUser){
        if(err) { return next(err);}

        if(existingUser) {
            return res.status(422).send({error:'Email is in use'})
        }
        const user = new User ({
            email:email, 
            password:password
        })
        user.save(function(err){
            if(err) { return next(err);}

            res.json({token: tokenForUser(user)} );
            
        });
    })
}