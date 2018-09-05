const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000; //configuracion para heroku


app.use(express.static(__dirname + '/public'));

//Express hbs engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');





app.get('/', function(req, res) {

    /*let salida = {
        nombre: 'fernando',
        edad: 30,
        url: req.url
    }
    res.send(salida);*/
    res.render('home', {
        nombre: 'ferNando',
        anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})