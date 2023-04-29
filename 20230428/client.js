const net = require('net');

// 포트의 내용을 설정해줄 객체를 담아놓는다
const config = { port: 8080 };

// TCP 소켓을 만들고 지정할 포트로 연결을 시도한다.
// connect 메서드를 사용해서 
const socket = net.connect(config);

socket.on('connect', () => {
    // 연결되면 connect 이벤트를 실행
    console.log('연결이 잘 됬다');

    socket.write('데이터 전송');
})

socket.on('data', (data) => {
    // TCP 소켓에서 데이터를 받으면 콜백 함수 실행
    console.log('받은 데이터 : ', data);
    // end 메서드.TCP 연결을 종료
    socket.end();
})

// HTTP 기본적으로 TCP 통신을 하고 TCP 통신은 쌍방향 통신이 가능하다
