const passport = require('passport')
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

//setup option for jwt strategy
    const opts = {}
    opts.jwtFromRequest= ExtractJwt.fromHeader('authorization'),
    opts.secretOrKey= config.secretOrKey


//strategy
const jwtLogin = new JwtStrategy(opts,function (payload, done){
    User.findById(payload.sub, function(err, user){
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
passport.use(jwtLogin)
