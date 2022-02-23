module.exports = {
    isLogged: function(req, res, next){
        if(req.isAuthenticated()){
            next();
        }else{
            res.redirect('/')
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