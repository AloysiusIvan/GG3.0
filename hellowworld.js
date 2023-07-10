const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if(req.url === '/'){
        res.statusCode = 200;
        res.end('This is the index page');
    }else if(req.url === '/about'){
        res.statusCode = 200;
        res.end('This is the about page');
    }else{
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(port, () => {
    console.log(`Berhasil cuy di ${port}`);
});