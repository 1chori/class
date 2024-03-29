// mysql 설치

// mysql 접속
// mysql -u root -p 입력하면 비밀번호 입력하라고 뜸

// bin까지 가야하는 이유는 .exe 파일이 여기 있기 때문이다.

// 쿼리문은 데이터베이스에 추가,수정,삭제를 할수 있는 명령어
// 쿼리문을 사용하면 데이터베이스에서 원하는 데이터를 가져오기 위해서 사용하는 명령어다.

// 현재 있는 데이터베이스들을 확인하는 쿼리문
// -------------------------------------------------------
// show databases;
// -------------------------------------------------------

// 데이터베이스를 추가하는 쿼리문
//-------------------------------
// create database (데이터베이스 이름) character set utf8;
//----------------------------------

// 사용할 데이터베이스 선택하는 쿼리문
//---------------------------------
// use (데이터베이스 이름)
//--------------------------------

// 테이블이라는 곳에 저장한다
// 유저의 테이블도 있을 것이고, 게시판에 대한 테이블도 있을 것이다.
// 유저의 내용만 담을 객체다.

// 테이블 추가
//-------------------------------------------
// create table(데이터베이스 이름).(테이블 이름)(
//     id int not null auto_increment primary key,
//     content varchar(255) not null
// );
//-------------------------------------------


// 테이블 리스트 확인
//--------------------------------------------------
// show tables;
//-------------------------------------

// 테이블 확인 쿼리문
//---------------------------------------
// select * from (테이블 이름);
//---------------------------------------


// 테이블에 내용을 추가해보자
// insert into (데이터베이스 이름).(테이블 이름) ('id', 'content) VALUES ('1', '안녕');