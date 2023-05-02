const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('Content-type', 'application/json', 'charset=utf-8');
    const URL = req.url;
    // 요청한 url이 파비콘이면
    if (URL === '/favicon.ico') {
        res.end();
        return;
    }

    // 요청한 url의 내용에 따라서 응답
    switch (URL) {
        case '/':
            fs.readFile('./views/main.html', (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.end('파일 없어')

                } else {
                    res.statusCode = 200;
                    // 헤더의 내용을 바꾸자
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data)
                }
            })
            break;
        case '/list':
            fs.readFile('./views/list.html', (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.end('파일 없어')

                } else {
                    res.statusCode = 200;
                    // 헤더의 내용을 바꾸자
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data)
                }
            })
            break;
        case '/add':
            fs.readFile('./views/add.html', (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.end('파일 없어')

                } else {
                    res.statusCode = 200;
                    // 헤더의 내용을 바꾸자
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data)
                }
            })
            break;

        default:
            break;
    }
})

server.listen(4000, () => {
    console.log('잘 열렸음');
})