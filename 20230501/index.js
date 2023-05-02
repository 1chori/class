// HTTP 포로토콜
// 우리가 브라우저에서 URL을 입력하고 엔터를 누르면 HTTP 요청을 보내게 되는데 TCP 3-way handshaking 과정을 거친다.

// 3 way-handshake : 클라이언트와 서버가 데이터 통신을 하기 전에 통신 준비가 되었다는 것을 확인하는 것

// 클라이언트가 서버에 연결 요청을 하고 서버는 연결 요청을 받아서 클라이언트에게 연결 요청 수락을 응답한다.
// 클라이언트는 서버로부터 수락 확인을 보내면 연결이 된다.
// SYN(synchronize sequence number), ACK(Acknowledgement)

// 클라이언트가 SYN을 서버에 요청하고
// 서버는 SYN + ACK를 클라이언트에게 연결 요청 수락을 응답한다.
// 클라이언트가 서버로 ACK를 보내면 연결이 된다.

// 4-way handshake : TCP 연결을 종료하기 위해 수행하는 것
// 연결을 종료하기 위해 클라이언트와 서버의 상태를 서로 확인한다.
// 서버가 FIN 메시지를 받고 클라이언트는 데이터가 없다는 것을 의미
// 메시지인 ACK를 보내고 서버는 데이터가 더 없으면 자신이 보내지지 않은 데이터를 확인하고 전송한 후 
// 클라이언트에게 FIN 메시지 전송 클라이언트는 서버가 더이상 전송할 데이터가 없는 것을 확인하는 ACK 메시지를 보낸다.
// 클라이언트와 서버의 연결이 종료되는 것

// 요청과 응답을 처리하는 기능을 제공하는 모듈
// http 내장 모듈
const http = require('http');

const server = http.createServer((req, res) => {
    // createServer 메서드로 서버 객체를 만들어준다.
    // req : http 요청의 정보 url, 메서드(GET, POST 등) 요청 헤더 정보, 바디의 내용이 있다.
    // res : http 응답의 정보를 가지고 있는 객체. 상태코드는 statusCode 응답 헤더, 바디의 내용이 있다.

    res.statusCode = 200;

    // res.setHeader 응답은 헤더의 내용을 설정할 수 있다.
    res.setHeader('Content-type', 'application/json', 'charset=utf-8');
    // Content-type : 응답의 내용
    // application/json : 응답의 내용을 JSON 형식의 데이터로 전송
    // charset=utf-8 : 응답의 문자를 인코딩 utf-8로 설정

    const URL = req.url;


    // res.end는 내용을 응답하고 종료하는 메서드
    // 응답하는 내용은 매개변수로 전달하면 된다.
    //res.end('응답했음');

    // 브라우저의 요청을 보내면 자동으로 웹사이트의 아이콘인 파비콘 URL이 자동으로 요청된다.
    // 무시 처리를 해주자
    if (URL === '/favicon.ico') {
        res.end();
        return;
    }

    console.log(URL);

    switch (URL) {
        case '/':
            res.end('main page');
            break;
        case '/list':
            res.end('list page');
            break;
        case '/add':
            res.end('add page');
            break;

        default:
            break;
    }
})

// listen 메서드로 PORT 서버를 대기상태로 만들어놓자.
server.listen(4000, () => {
    console.log('서버 잘 열렸음');
})