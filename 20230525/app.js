// 채팅방 만들기
// 방을 따로 나눠서 유저간에 귓속말

// 모듈 express socket.io ejs

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

const server = app.listen(8000, () => {
    console.log('25일 서버 열림');
});

app.get('/', (req, res) => {
    res.render('main');
})

let userId = [];
let userList = [];


const io = socketIO(server);
io.on('connection', (socket) => {
    // 유저 접속 시
    console.log('유저 접속');
    // 유저 접속시 배열에 유저 아이디 추가
    userId.push(socket.id);
    // 현재 접속중인 유저 아이디
    console.log(userId);
    io.emit('userList', userId);

    socket.on('joinUser', (name) => {
        userList.push(name);
        console.log(userList);
        io.sockets.emit('joinUser', userList, userId);
    })

    socket.on('joinRoom', (room, name) => {
        // 방에 유저가 접속하면 join() 메서드로 방에 입장시킨다
        socket.join(room);
        userList.push(name);
        // 현재 방에 있는 클라이언트에게 이벤트 푸시
        io.to(room).emit('joinRoom', room, name, userList);

    })

    socket.on('leaveRoom', (room, name) => {
        // 유저가 방에서 나가면 제외해준다
        socket.leave(room);
        userList = userList.filter((value) => value != name);
        // 어느 방에서 누가 나갔는지 해당 방에 있는 유저들에게 푸시
        io.to(room).emit('leaveRoom', room, name);
    })


    socket.on('disconnect', () => {
        console.log('유저 나감');
        userId = userId.filter((value) => value != socket.id);
        userList.splice(index, 1);
        io.emit('userList', userList);
        // 현재 접속중인 유저 아이디
        console.log(userId);

    })

    socket.on('chat', (room, name, msg) => {
        io.to(room).emit('chat', name, msg);
    })

    socket.on('chat2', (id, name, msg) => {
        io.to(id).emit('chat', name, '귓속말 :' + msg);
        // io.to(socket.id).emit('chat', name, '귓속말 :' + msg);
    })
})