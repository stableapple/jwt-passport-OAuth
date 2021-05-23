const passport = require('passport')
const User = require('../models/user');
const keys = require('../config/keys');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

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
