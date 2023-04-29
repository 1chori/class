// nodejs로 TCP server 만들어보자

// 내장 모듈로 사용할건 net
// net은 TCP 연결을 맺어주는 프로토콜이다.
// net 모듈을 사용하면 TCP 소켓을 만들어서 사용할 수 있다.
// TCP 소켓을 생성하고 서버와 클라이언트간의 응답 요청을 맺을 수 있다.

// 내장 모듈 net 가져오기
const net = require('net');
const PORT = 8080;

// 서버 객체 생성
// createServer 메서드로 콜백 함수를 전달
const server = net.createServer((client) => {
    // 클라이언트가 접속시 콜백함수 실행

    // 클라이언트가 보낸 데이터를 받으면 어떻게하지?
    client.on('data', (data) => {
        // 클라이언트가 보낸 데이터

        // 네트워크를 통해 전송되는 데이터는 바이너리 형식으로 전송된다.
        // 즉, 클라이언트가 보낸 데이터는 Buffer 형태로 전송되며, 서버는 해석해서 문자열로 변환해주면 된다.
        // console.log(JSON.stringify(data));
        console.log(data.toString());
    })
})

server.listen(PORT, () => {
    console.log('서버 잘 열렸음');
})