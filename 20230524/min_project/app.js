// 3개의 비행기를 만들고 좌석 예약 기능 만들기

// 사용할 모듈 socket.io express ejs

const exp = require('constants');
const express = require('express');
const path = require('path');
const socketIo = require('socket.io');

const app = express();

// 선택된 자리들을 보여줄 배열
let seats = [];

let temp = [
    [1, 1, 0, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];

let temp2 = [
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];

let temp3 = [
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];

let seatsArr = [temp, temp2, temp3];

// 선택한 비행기의 인덱스
let index = 0;

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.render('main');
})

app.get('/seats/:id', (req, res) => {
    index = req.params.id;
    seats = seatsArr[index];
    // 요청에 대한 응답으로 seatsArr 배열에서 id로 전달한 인덱스로 호출한 배열을 응답해준다
    res.send(seats);
})
const server = app.listen(8000, () => {
    console.log('min서버 열림');
})

const io = socketIo(server);

io.sockets.on('connection', (socket) => {
    socket.on('reserve', (data) => {
        console.log('예약');
        console.log(data)
        let seatTemp = seatsArr[data.selectCount];
        seatTemp[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    })
})