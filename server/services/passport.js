const passport = require('passport')
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

//setup option for jwt strategy
const jwtOptions = {}


//strategy
const jwtLogin = new JwtStrategy(jwtOptions,function (payload, done){
    User.findById(payload.subdomains, function(err, user){
        // error when search failed to occur
        if(err) { return done(err, false) }

        if(user){
            done(null, user)
        }
        else{
            done(null, false)
        }
    })
})
