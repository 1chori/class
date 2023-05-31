// 웹 소켓 : 양방향 통신을 위해 사용한다
// 장점 : 헤더의 값이 같이 넘어가는데 한 번 연결할 때 헤더값을 전송하기 때문에 많은 데이터가 전송되지 않는다
// 실시간으로 채팅을 구현하는 등 실시간으로 해야하는 작업이 있을 경우 사용한다
// 가상화폐 거래소 같은 경우 데이터 전송이 자주 일어나기 때문에 웹소켓을 사용해서 구현하는게 좋다(효율적인 데이터 통신)
// socket.io라는 라이브러리를 사용
// 페이지에서 댓글을 달았을 때, 새로고침해야 글이 다시 보인다면 웹소켓으로 양방향 통신을 이용해서 실시간으로 글을 볼 수 있게 처리할 수 있다

// npm i express socket.io ejs

const express = require('express');
const path = require('path');
const socketIo = require('socket.io');

const app = express();

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');


// 유저가 접속을 하고 또 다른 유저가 접속을 해서 유저끼리 실시간 채팅을 보내볼 수 있게
app.get('/', (req, res) => {
    res.render('main');
})


const server = app.listen(8000, () => {
    console.log('24일 서버 열림');
})


// 대기시켜 놓은 서버를 매개변수로 받아야한다
const io = socketIo(server);

let userId = [];

// 소켓들에게 이벤트를 등록
io.sockets.on('connection', (socket) => {
    // connection : 접속시 실행되는 이벤트
    // 접속한 클라이언트의 socket이 매개변수로 들어온다
    // 유저 한명이 접속했다는 얘기
    console.log('유저 접속');
    console.log(socket.id);
    // 배열에 유저 아이디를 담는다
    userId.push(socket.id);
    console.log(userId);
    // 클라이언트 측에서 이벤트가 푸시되면 실행시킬 이벤트
    socket.on('hi', (data) => {
        // 자기 자신에게 이벤트 푸시
        console.log(data, '이벤트를 클라이언트에서 보냄');
        // 모든 대상에게 이벤트 푸시
        // io.sockets.emit('hi', '모두에게');
        // 본인 제외 모든 대상에게 이벤트 푸시
        // socket.broadcast.emit('hi', data.msg);
        // 비밀 대화

        // 대상에게 보낼 예정
        // 이벤트를 푸시할 유저의 아이디값을 to 메서드의 매개변수로 전달
        io.sockets.to(data.id).emit('hi', data.msg);
    })
    // 유저가 나갔을 때 실행되는 이벤트
    socket.on('disconnect', () => {
        console.log('유저 나감');
        userId = userId.filter((value) => value != socket.id);
        console.log(userId);
    })
})