const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
var flash = require('connect-flash')
const morgan = require('morgan')
require('./passport/passport')(passport);

//Initializions
const app = express();
require('./database/index');

//Settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));

//Middlewares
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.engine ('html', require ('ejs'). renderFile);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//app.use(morgan('dev'));

//Global Variables

//Routes
app.use(require('./routes/consultas.routes'));
app.use(require('./routes/paciente.routes'));
app.use(require('./routes/usuario.routes'));
app.use(require('./routes/turnos.routes'));
app.use(require('./routes/planes.routes'));
app.use(require('./routes/sms.routes'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));
app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
});

//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Servidor en Puerto', app.get('port'))
});




