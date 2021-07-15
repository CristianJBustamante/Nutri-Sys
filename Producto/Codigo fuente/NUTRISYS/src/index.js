import app from './app'


app.listen(app.get('port'))

console.log("SERVIDOR EN PUERTO ",app.get('port'));

