const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//serialze user is used to set cookies
passport.serializeUser((user,done)=>{
    // console.log(user);
    done(null,user);
});

passport.deserializeUser((id,done) => {
    User.findOne({ _id: id }).then(user => {
        done(null,user);
    });
});


passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
    }, async (accessToken,refreshToken,profile,done) =>{
        const existingUser = await User.findOne({googleId : profile.id})
        if(existingUser)
            return done(null,existingUser.id);
        else{
            const newUser = await new User({googleId : profile.id}).save()
            done(null,newUser.id);
        }        
    })
);