const http = require("http");


http.createServer((req, res) =>{
    console.log(req.url);
    if(req.url === '/about'){
        res.write('acerca de')
        return res.end();
    }
    res.write("Hello world");
    res.end();
}).listen(3001);

console.log('Servidor escuchando en el puerto 3000')