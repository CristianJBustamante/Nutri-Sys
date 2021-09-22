module.exports = {
    isLogged: function(req, res, next){
        if(req.isAuthenticated()){
            next();
        }else{
            res.redirect('/usuarios/login')
        }
    },
    isLogged2: function(req, res, next){
        if(req.isAuthenticated()){
            res.redirect('/welcome')
        }else{
            next();
        }
    }
}