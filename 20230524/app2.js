const express = require('express');
const socketIo = require('socket.io');
const path = require('path');
const app = express();
const server = app.listen(8000, () => {
    console.log('app2 서버 열림');
});

const io = socketIo(server);

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('main2');
})

io.sockets.on('connection', (socket) => {
    // 클라이언트 접속했을 때
    socket.on('message', (data) => {
        // 모든 클라이언트에게 이벤트 푸시
        io.sockets.emit('message', data);
    })
})