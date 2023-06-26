// 웹 서비스 개발을 완료하면 배포를 해서 사용자에게 소프트웨어를 전달 해야한다
// 배포를 하기 위해선 제 3자가 접속할 수 있는 서버 컴퓨터가 필요하다. 365일 켜져 있어야 한다
// 서버 컴퓨터를 대여해주는 호스팅 업체를 통해 배포를 진행 하자.

// 호스팅은 서버 호스팅과 웹 호스팅으로 나뉜다.
// 서버 호스팅 : 물리 서버를 단독으로 임대 및 구매
// 웹 호스팅 : 서버의 일부 공간을 임대하는 개념(컴퓨터를 잘게 쪼갠거라고 보면 된다.)
//           서버나 인프라 구축이 필요 없고 비룔리 저렴하다는 것이 장점이다.
//           자원이 한정적이라는 것은 단점이다. 단독 서버에 비해 사용량이 제한적이라는 단점도 있다.

// 웹 호스팅 업체중 하나인 AWS(아마존웹서비스)를 통해서 서버를 배포 할 것이다.

// laaS : 컴퓨터 자원만 제공하는 형태 (AWS)
//        Infrastructure as a service (IaaS)
// PaaS : 헤로쿠, 넷플리파이 등등 기존 환경에서 서비스를 올려주는 형태.

// 인스턴스 만들기 전에 오른쪽 상단에 리전 확인, 서버컴퓨터가 가깝게 설정

// 인스턴스의 사용 운영체제 선택
// 우리가 사용한 os는 우분투 프리티어

// 키 페어는 잘 보관 해 놓아야 한다. 혹시나 전달 해야 할 경우에는 저장매체를 사용하자(USB등)

// ssh = TCP 프로토콜 포트 범위 22 기본으로 가지고 있는 디폴트 포트라고 생각하면 된다.
// 인스턴스에 접근하기 위해서

// 보안 그륩 설정 : HTTP, HTTPS, MYSQL

// 인스턴스 만들고 인스턴스에 mysql 설치

// 업데이트 sudo apt-get update
// sudo apt-get install mysql-server
// sudo mysql -u root -p

// 데이터베이스 세팅
// 우리가 사용할 데이터베이스 만들기
// create database 이름;

// 데이터베이스 목록 확인
// show databases;

// 사용할 유저 생성
// create user '이름'@'%' identified by '비밀번호';
// 예) create user 'cheol'@'%' identified by 'admin1234';

// 만든 유저에게 권한 설정
// grant all on 데이터베이스 이름.* to '유저이름'@'%';

// 권한이 주어졌는지 확인
// show grants for '유저 이름';

// mysql -u cheol -p
// 비밀번호는 입력 시 안보인다

// 위 과정이 끝나면 exit을 한다

// 보안그룹에 mysql을 허용
// mysql 외부 접근 허용
// sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf;
// 위처럼 한번에 입력하고나 아래처럼 확인하고 입력
// cd /etc/mysql/mysql.conf.d/ 입력해 경로를 변경하고 ls -a를 입력


// 파일을 열고 bind-address에 i 눌러서 수정모드 진입
// bind-address 0.0.0.0
// esc 눌러서 풀고
// :wq! : 저장후 종료
// :q! : 종료
// :w! : 강제 저장

// 외부에서 인스턴스의 mysql에 접속 하자
// sudo service mysql restart;

// node.js 설치

// 여기서부턴 ; 안붙여도 된다

// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh
// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
// source ~/.bashrc
// nvm install 16

// 프로젝트를 설치 받자
// git에 올린 프로젝트 설치

// cd/home/ubuntu/를 입력해서 경로를 변경하고 git init을 하자
// git remote add origin 업로드한 깃 주소
// git pull origin master

// npm i와 npm i pm2를 해서 설치할거 설치

// node app.js와 npm start로 실행


//http://ec2-13-125-251-155.ap-northeast-2.compute.amazonaws.com:8080/login

// 포트 포워딩을 해서 포트 80 http로 접속했을 때, 8080 포트로 재매핑 시킨다
// sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080;
// --dport 80 접속 했을 때 --to-port 8080 포트로 재매핑

// 포트 포워딩 확인 명령어
// sudo iptables -t nat -L --line-numbers

// 포트 포워딩 삭제 명령어
// sudo iptables -t nat -D PREROUTING 인덱스 번호

// http : 80번 포트
// https : 443 포트

// 서버대기가 종료되는데 백그라운드에서 서버를 대기시켜서 계속 동작하게 pm2 설치
// npm i pm2
// package.json에서 실행 명령어를 node app.js로 했는데 pm2 start app.js로 수정하면 된다
// 서버가 종료되어도 백그라운드에서 노드 서버 실행
// npx pm2 kill : 서버 종료
// npx pm2 list : 리스트(열려있는지 확인)

// vi package.json 서버에서 파일 수정

// 인스턴스에 V4 주소는 우리가 인스턴스를 실행하거나 다시 실행하면 동적으로 ip주소가 할당된다

// 도메인 연결을 이 v4로 연결 해놨는데 주소가 바뀌면 연결이 끊긴다
// 그러면 안되니까 탄력적 ip 설정을 하면 고정 ip를 할당 받을 수 있다

// Nginx 사용해서 프록시 설정
// 프록시는 대신이라는 의미
// 통신을 할 때, 중간에서 대신 통신을 해주는 역할을 해준다
// 클라이언트는 프록시 서버를 서버로 알고 있고, 서버는 클라이언트로 알고 있다

// 프록시는 서버의 위치에 따라 포워드 프록시와 리버스 프록시로 구분된다

// 우리가 사용할 것은 리버스 프록시
// 리버스 프록시는 프록시 서버가 서버의 앞에 위치하고 클라이언트가 서버에 요청을 하면 리버스 프록시가 호출되고
// 리버스 프록시는 서버에게 요청해서 응답을 받고 클라이언트에게 전송
// 클라이언트가 서버에 직접 요청하는게 아니고 프록시 서버가 요청을 받고 서버로 요청해서 서버의 응답을 받게 된다(서버를 감춰줘서 보안이 좋다)
// Nginx로 리버스 프록시를 만들자

// 클라이언트 -> 인터넷 -> 프록시 서버-> 서버
// 서버 -> 프록시 서버 -> 인터넷 -> 클라이언트

// aws 인스턴스 접속하고 nginx 설치
// sudo apt install nginx

// nginx 시작
// sudo service nginx start

// nginx 상태 확인
// sudo service nginx status

// nginx 종료
// sudo service nginx stop

// 웹사이트 호스팅을 할 때, 설정에 대한 값이 있는 파일이 있다. default 파일이 생성된다
// cd /etc/nginx/sites-enabled
// sudo vi default 에서 server_name에서 도메인을 써줄 공간
// location에서 작성할 곳 위에 try_files에 #을 붙여서 주석처리 해준다
    // proxy_set_header HOST $host;
    // proxy_pass http://127.0.0.1:8080;
    // proxy_redirect off;
// esc하고 :wq! 종료

// proxy_set_header : 요청이 들어온 브라우저의 host 내용을 넘겨준다는 뜻
// proxy_pass 80으로 포트를 듣고 들어온 요청을 8080포트로 전달하겠다는 뜻
// proxy_redirect off : SPA일 경우 redirect 없애겠다는 의미. SPA가 아니면 굳이 써줄 필요 없다
// SPA(Single Page Application) : react, vue 등

// 설정파일을 수정했으면 설정파일이 정상적인지 먼저 확인
// 문법에 오류가 있는지 체크
// sudo nginx -t

// cd /home/ubuntu/ 경로로 다시 가자

// nginx 재실행
// sudo service nginx restart

// 탄력적 ip 주소를 도메인으로 교체
// 가비아에서 도메인을 구매

// 구입한 도메인을 사용해서 탄력적 ip로 요청이 갈 수 있게
// aws Route 53 사용
// 호스팅 영역 탭으로 이동 -> 호스팅 영역 생성

// DNS 레코드는 도메인의 이름과 관련된 정보를 나타내는 데이터
// NS 네임서버는 인터넷에서 도메인을 ip 주소로 변환하는 역할을 담당
// 도메인을 입력하면 네임서버에게 도메인 ip 주소를 요청한다
// 그래서 웹사이트에 접근을 할 수 있게 해준다

// 레코드 추가
// A 레코드 : 도메인 이름을 v4 주소로 매핑
// A 레코드에 탄력적 ip를 값으로 작성

// CNAME 레코드 : 서브도메인으로 설정
// www.~~.co.kr로 접속했을 때 ~.co.kr로 이동하게끔 해주는 개념
// 레코드 이름을 www 값에 구매한 도메인을 입력한다.

// 가비아에서 서비스 관리에 들어가 도메인 관리에 들어간다
// 네임서버 설정에 들어가서 AWS의 NS 코드 트래픽을 모두 추가한다
// 그리고 도메인을 주소창에 입력한다.

// https로 보안이슈 해결
// https 요청할 때 인증서를 발급 받아서 인증을 요청
// 배포한 서버에 https를 설정해서 보안 이슈 해결
// 모질라 3개월마다 인증서 무료로 발급
// certbot을 사용해서 https를 간편하게 설정
// certbot 장점 : 3개월마다 알아서 재발급 해준다. 직접 할 필요 없다. nginx와도 호환이 좋다
// Nginx on Ubuntu 20

// sudo snap install core

// certbot 실행파일에 링크 설정
// sudo snap install --classic certbot

// 설치가 끝나면 nginx에 default 파일 수정
// cd /etc/nginx/sites-enabled/에 접근
// server_name 도메인; 으로 수정
// 저장 후 종료
// cd /home/ubuntu/ 경로로 다시 이동
// sudo nginx -t로 문법 오류 확인

// nginx 재시작
// sudo service nginx restart

// 3개월마다 재발급 해주게 명령어를 넣어준다
// sudo certbot renew

// 인증서 재발급 체크
// 인증서를 갱신하지 않고 시뮬레이션으로 체크
// 발급할 때 사전에 문제가 생길지 여부 체크
// sudo certbot renew --dry-run