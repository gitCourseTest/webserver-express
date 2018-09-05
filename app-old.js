//Usar HTTP para montar un web server

const http = require('http');

//para escuchar peticiones http. recbibe un callback
http.createServer((req, res) => {
        //res.write('Hola mundo');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'fernando',
            edad: 30,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080); //puerto en el que estará escuchando

console.log('Escuchando el puerto 8080');