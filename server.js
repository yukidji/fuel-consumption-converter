const http = require('http');
//const url = require("url");
//const path = require("path");
const fs = require('fs');

var index = fs.readFileSync('index.html', "utf8");
var css = fs.readFileSync('style.css');
var js = fs.readFileSync('second-lab/script.js', "utf8");
var lab2 = fs.readFileSync('second-lab/lab2.html', "utf8");

const server = http.createServer((req, res) =>{
    console.log(req.url);
    switch (req.url){
        case '/':
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.end(index);
        case '/style.css':
            res.writeHead(200, {'Content-Type':'text/css; charset=utf-8'});
            res.end(css);
        case '/second-lab/lab2.html':
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.end(lab2);
        case '/second-lab/script.js':
            res.writeHead(200, {'Content-Type':'text/javascript; charset=utf-8'});
            res.end(js);
        case '/index.html':
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.end(index);
    }
    });

server.listen(3000, '127.0.0.1');/*порт и адрес 127.0.0.1 (localhost)*/
console.log('сервер работает');