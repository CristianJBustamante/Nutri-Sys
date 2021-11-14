const axios = require('axios')

var bcrypt = require("bcrypt")
var LocalStrategy = require('passport-local').Strategy;



module.exports = function (passport) {
    passport.serializeUser(function(user, done){
        done(null, user)
    });

    passport.deserializeUser(function(obj, done){
        done(null, obj);
    });

    passport.use(new LocalStrategy({
        passReqToCallback : true
    }, function(req, usu_usuario, usu_clave, done){
        const getusuario = async () => {
            try {
              return await axios.get("http://localhost:3000/datosusuario/"+usu_usuario)
            } catch (error) {
              console.error(error)
            }
          }          
          getusuario(usu_usuario)
          .then(response => validar(response.data))
        function validar(data) {
            if (data.length > 0) {
                var user = data[0];
                if (usu_clave== user.usu_clave) {
                    return done(null, user)
                }
            }
            return done(null,false, req.flash('authmessage','Usuario o Contraseña Incorrectos'))
        }
    }
    ));
}; 
