// TCP server, Client 둘 다 만들어보자

const net = require('net');
const PORT = 8080;

// 클라이언트와 서버가 요청,응답으로 주고 받는 메시지는 헤더랑 바디로 나눠지고
// 헤더의 내용은 전달하는 메시지의 정보를 전달하고 바디에는 전달하는 데이터의 내용이 들어있다.

// HTTP1.1 기본 버전 프로토콜
// GET /URL HTTP1.1
// host : 127.0.0.1:8080
// ....
// Content-type : text/html


// 요청 메서드
// GET : 데이터의 요청을 의미(필요한 데이터를 응답 받는것)
// POST : 데이터의 입력을 의미(데이터의 추가를 위해)
// PUT : 데이터의 수정을 의미
// DELETE : 데이터를 삭제하기 위해 사용
// OPTIONS : 웹서버가 지원하는 메서드의 종류를 요청할 때

// HTTP 버전은 1.0, 1.1, 2.0이 있는데, 우리가 배우는 것은 1.1이다.
// 1.1이 www(world wide web)에서 사용되는 기본 프로토콜이다.

// body의 내용
// Buffer.from 메서드를 사용해서 문자열을 바이트 데이터로 변환해준다.
// 변환하는 이유는 HTTP 응답은 바이트 데이터로 전송되기 때문이다.
// body 문자열을 그대로 작성해버리면 인코딩에 문제가 생길 수 있다.
const body = Buffer.from('<div><p>Hello nodejs</p></div>');


// Header, body로 구분해서 읽는다.
// response header + body = request message
const response = `HTTP/1.1 200 OK
Connection : keep-alive
Keep-Alive : timeout=4
Content-type : text/html
Content-length : ${body.length}

${body.toString()}
`

// 상태코드
// 요청에 대한 응답의 결과를 나타낸 숫자 코드
// 100번대 거의 없다.
// 200번대는 성공
// 300번대는 리다이렉트. 거의 없다
// 400번대는 페이지 없다(404)
// 500번대는 서버 터짐

// 가장 많이 사용하는 상태코드는 200과 404
// Connection : 클라이언트와 서버의 연결 상태 keep-alive 속성은 클라이언트가 다음 요청을 보낼때까지 연결 유지

// Keep-Alive : 연결을 유지하는 시간을 지정. timeout=4 == 연결을 4초동안 유지하고 종료

// Content-type : 전송되는 데이터의 타입. text/html == HTML 타입의 데이터 전송이라는 의미

// Content-length : 전송되는 데이터의 길이. 데이터의 끝을 알려주는 역할을 한다.

// 서버 객체 생성
const server = net.createServer((client) => {
    // 클라이언트가 접속시 실행
    // 인코딩 설정
    // setEncoding 메서드로 인코딩 방식을 설정할 수 있다.
    client.setEncoding('utf8');

    // 클라이언트가 데이터를 보내서 데이터를 받으면 실행되는 콜백 함수
    client.on('data', (data) => {
        console.log(data); // 데이터의 타입 buffer

        // write 메서드로 클라이언트에 응답을 보냄
        client.write(response);
    })

    // 클라이언트와 연결이 종료되면 실행되는 이벤트
    client.on('close', () => {
        console.log('접속이 종료됨');
    })
})

server.on('connection', () => {
    console.log('client가 접속했다');
})

server.listen(PORT, () => {
    console.log('server 잘 열림. 포트는 :' + PORT);
})