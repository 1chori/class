-- 데이터 베이스는 단순하게 데이터를 저장하는 공간으로 보면 된다

-- sql 명령어를 사용해서 구현된 기능을 실행시키기 위해 사용하는 특정한 언어이다

-- 데이터를 보관, 저장, 삭제 또는 수정을 할 수 있다

-- 관계형 데이터 베이스 : mysql, oracle, mariaDB

-- 비관계형 데이터 베이스 : MongoDB

-- CLI로 mysql에 접속하는 방법

-- mysql -u root -p하고 비밀번호 입력

-- 스키마 전부 확인 : show databases;

-- sql문은

-- 데이터 정의어(DDL) : create, show, drop, alter

-- 데이터 조작어(DML)

-- 데이터 제어어(DCL)

-- 데이터베이스 추가

CREATE DATABASE testmysql;

-- 데이터베이스 모두 조회

show DATABASES;

drop DATABASE testmysql;

-- 사용할 데이터베이스 지정

USE testmysql;

-- 데이터베이스 안에 있는 테이블 확인

SHOW TABLES;

DROP TABLE user;

-- 테이블 생성

-- 테이블에 PRIMARY KEY : 고유키는 한개만 들어갈 수 있고 중복이 안된다

CREATE Table
    store(
        id INT AUTO_INCREMENT PRIMARY KEY,
        tel VARCHAR(20)
    );

CREATE Table
    store2(
        id INT AUTO_INCREMENT PRIMARY KEY,
        tel VARCHAR(20)
    );

-- 테이블의 옵션 및 설정 조회

DESC store;

-- 데이터 타입 : 숫자형, 문자형, 날짜형, 이진데이터 타입

-- 숫자형(INT) : 4byte, 범위는 21억~

-- 문자형

-- VARCHAR : 255byte, 가변 데이터(우리가 선언한 범위보다 작으면 자기가 알아서 맞춰준다

-- CHAR : 255byte, 고정 데이터

-- TEXT : 65535byte

-- 날짜형

-- DATE : 년/월/일

-- TIME : 시간

-- DATETIME : 년/월/일/시간(YYYY-MM-DD-HH:MM:SS)

-- TIMESTAMP : 년/월/일/시간(INTEGER) 4byte

-- 이진데이터 타입

-- BLOB : 이미지

-- KEY

-- PRIMARY KEY : 중복 입력 안된다. 테이블에 하나만 넣을 수 있다. null도 안된다

-- UNIQUE : 중복 입력 불가인데 키를 여러개 줄 수 있다. null도 된다

CREATE Table
    user(
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id VARCHAR(20) NOT NULL,
        content VARCHAR(200) NOT NULL,
        user_name VARCHAR(20) NOT NULL,
        -- DEFAULT 따로 추가한 값이 없으면 기본 값을 지정해준다
        -- gender CHAR(10) DEFAULT '남자',
        date DATETIME DEFAULT now()
    );

-- 데이터 조작어 : SELECT, INSERT, UPDATE, delete

-- 테이블에 값을 추가

INSERT INTO user(name) VALUES ('Tom'), ('May'), ('Jason');

DESC user;

SELECT * FROM `user`;

SELECT * FROM `post`;

-- user_id가 Not null이기 때문에 user_id 값을 넣어야 한다

-- INSERT INTO user(user_pw, user_name) VALUES('123','Sam');

-- 테이블 검색

-- WHERE문으로 테이블을 조회해서 해당 필드가 검색한 user_id 값을 찾아서 조회

SELECT * FROM user WHERE user_id='Tom123';

SELECT * FROM user WHERE gender='female';

-- 테이블 수정

-- set : 해당 값을 수정할 때 사용. UPDATE문과 짝으로 사용

UPDATE user SET gender='female' WHERE user_id='Tom123';

UPDATE user set user_pw='0000' where user_id='Tom123';

-- 테이블 열 삭제

DELETE FROM user WHERE user_id = 'Tom123';

-- 게시판 테이블 만들기

-- 칼럼은 id, content, writher, date, likes

-- id = INT 11자, 자동으로 증가, 고유키

-- content : TEXT type, null이어도 추가 가능하게

-- writer VARCHAR 40자 null이 안되게

-- likes int 11자 기본값 0

-- row 6개 추가

CREATE Table
    post (
        id INT AUTO_INCREMENT PRIMARY KEY,
        content VARCHAR(200),
        writer VARCHAR(40) NOT NULL,
        date DATETIME DEFAULT now(),
        likes INT DEFAULT '0'
    );

INSERT INTO post (content, writer) VALUES ('Fuck you!', 'Kate');

SELECT *FROM post;

DESC post;

-- use [데이터베이스 이름] : 사용할 데이터 베이스 선택

SELECT id,likes FROM post;

DELETE FROM post WHERE id='11';

-- writer 중 AB로 시작하는 데이터 가져오기

SELECT * FROM post WHERE writer LIKE '%AB';

-- writer 중 AB로 끝나는 데이터 조회

SELECT * FROM post WHERE writer LIKE '%AB';

-- posts 테이블을 post로 이름 변경

ALTER Table user RENAME post;

ALTER Table user RENAME user2;

-- ALTER TABLE [테이블 이름] CHANGE [기존 컴럼 이름][새 컬럼 이름] TYPE : 컬럼 이름 바꾸기

ALTER Table post CHANGE content contents VARCHAR(200);

-- ALTER TABLE [테이블 이름] MODIFY [컬럼 이름] TYPE : 컬럼 타입 변경

-- DELETE FROM [테이블 이름] WHERE [필드 값] = '값' : 조건에 맞는 모든 값 삭제

DELETE FROM post WHERE writer = 'Kate';

-- ALTER TABLE [테이블 이름] DROP [필드 이름] : 해당 필드를 테이블에서 제거

-- ALTER TABLE [테이블 이름] AUTO_INCREMENT = 0,1 : 해당 테이블의 AUTO_INCREMENT를 초기화 시켜준다

-- ALTER TABLE [테이블 이름] ADD [필드 이름] TYPE : 해당 테이블 맨뒤에 필드를 추가한다

-- ALTER TABLE [테이블 이름] ADD [필드 이름] TYPE FIRST : 해당 테이블 맨 앞에 필드를 추가한다

CREATE Table
    user(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20)
    );

CREATE Table
    posts(
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(20)
    );

show TABLES;

ALTER Table posts add COLUMN userID INT;

DESC posts;

DESC user;

-- constraint : 제약 조건 명령어. 오류가 나면 확인하기 위해. 임의로 지정 가능

-- FOREIGN KEY : 참조키를 지정 - userID

-- 참조할 테이블 지정 user로

ALTER Table posts
ADD
    CONSTRAINT fk_user FOREIGN KEY (userID) REFERENCES user (id);

INSERT INTO user (name) VALUES('ddeec');

INSERT INTO posts (title, userID) VALUES('123',2);

-- INNER JOIN 테이블을 조회하는데 참조키를 가지고 관계가 맺어져있는 테이블 조회

SELECT *
FROM user
    INNER JOIN post ON user.name = post.user_name
WHERE user.name = 'Tom';

SELECT user.id, posts.title
FROM user
    INNER JOIN posts ON user.id = posts.userID
WHERE user.id = 2;

SELECT*FROM user;

SELECT*FROM posts;

-- 유저가 글을 등록하고 해당 유저가 작성한 글을 볼 수 있는 페이지

-- SELECT * FROM [테이블 이름] order by [필드 이름] desc | asc : order by 기준으로 desc는 내림차순, asc는 오름차순으로 정렬

-------------------------------------------------------------------------------------------------------------------

CREATE DATABASE practice;

USE practice;

show TABLES;

INSERT INTO
    post(user_id, content, user_name)
VALUES (
        'Tom1313',
        'I wanna go to USA',
        'Tom'
    ), ('Tom1313', 'MAIAMI!!!', 'Tom'), (
        'May434',
        'beautiful Island',
        'May'
    ), (
        'Jason192',
        'Hot Mexico',
        'Jason'
    );

SELECT*FROM `user`;

SELECT*FROM `post`;

ALTER Table post
ADD
    CONSTRAINT fk_user3 FOREIGN KEY (user_name) REFERENCES user (name);

SELECT *
FROM user
    INNER JOIN post ON user.name = post.user_name
WHERE user.name = 'Tom';

SELECT user.name, post.content
FROM user
    INNER JOIN post ON user.name = post.user_name
WHERE user.name = 'Tom';