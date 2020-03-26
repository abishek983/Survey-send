//--signal SIGKILL
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true , useUnifiedTopology: true});

const app = express(); 

//tells app to use cookies
app.use(cookieSession({
    maxAge : 30 * 24 * 60 * 60 * 1000,
    keys : [keys.cookieKey]
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//tell passport to use cookies to
//handle authentication
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/surveyRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT , () =>{
    console.log(`server runing on PORT : ${PORT}`);
});