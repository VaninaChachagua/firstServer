const http = require('http');

// crear Servidor
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'vanina',
            edad: 23,
            url: req.url

        };
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080); //puerto que va a escuchar esto

console.log('Escuchando el puerto 8080');