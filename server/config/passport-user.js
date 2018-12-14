const user = require('../data/user');


var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;


passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    user.getUser(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    function (email, password, done) {
        user.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username/email.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));
