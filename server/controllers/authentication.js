const User = require('../models/user')
exports.signup = function(req,res,next) {
    const email = req.body.email;
    console.log(email)
    const password = req.body.password
    console.log(password)
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
            if(err) { return next(err)}

            res.json(user);
        });
    })
}