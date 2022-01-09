module.exports = {
    isLogged: function(req, res, next){
        if(req.isAuthenticated()){
            next();
        }else{
            res.redirect('/login')
        }
    },
    isLogged2: function(req, res, next){
        if(req.isAuthenticated()){
            res.redirect('/home')
        }else{
            next();
        }
    }
}