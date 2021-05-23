const passport = require('passport')
const User = require('../models/user');
const keys = require('../config/keys');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')


const localOptions = { usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions , function(email,password,done){
    User.findOne({email:email}, function(err,user){
        if(err) { return done(err);}
        if(!user) { return done(null,false)}
        user.comparePassword(password, function(err,isMatch){
            if(err) { return done(err)}
            if(!isMatch) { return done(null,false)}

            return done(null, user)
        })
    })

})

//setup option for jwt strategy
    jwtOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: keys.secretOrKey
    }

//strategy
const jwtLogin = new JwtStrategy(jwtOptions,function (jwt_payload, done){
    User.findById(jwt_ayload.sub, function(err, user){
        // error when search failed to occur
        if(err) return done(err, false) 

        if(user){
            done(null, user)
        }
        else{
            done(null, false)
        }
    })
})
passport.use(jwtLogin)
passport.use(localLogin)
