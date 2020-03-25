const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const helpers = require('./hbs/helpers');
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
//Express hbs engine
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'vanina'
    });
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(port, () => {
    // Se activa cuando se levanta el server
    console.log(`Escuchando peticiones en el puerto ${{port}}`);
});