// MVC(model-view-controller) 패턴으로 게시판 만들기
// 많이 사용하고 표준 디자인 패턴
// 유지보수와 확장성을 고려해서 개발할 수 있다
// 협업간의 코드의 표준화도 용이하다

// model : 데이터를 다루는 로직
// 글 선택, 작성 등의 어플리케이션 동작을 관리하는 폴더

// view : 사용자가 볼 수 있는 화면의 데이터를 표시해주는 역할

// controller : model과 view 사이에서 동작을 제어해주는 역할
// model의 상태를 가지고 view에 반영시켜주는 것

// 이런 패턴으로 작업을 하면 유지보수와 코드의 표준화를 유지할 수 있다

const express = require('express');
const postRoute = require('./routes/posts');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

// 정적인 파일을 사용하기 위해 미들웨어 추가
// 앞에 매개변수로 경로를 지정하지 않았을 경우 기본적으로 / 루트 경로로 지정한다
app.use(express.static(path.join(__dirname, 'public')));
// app.use("/1asf", express.static(path.join(__dirname, 'image')));


// 매개변수로 경로의 네이밍이며, 임의로 작성해도 된다.
// app.use('/css',express.static(path.join(__dirname, 'public')));


// postRoute 객체에 get 메서드로 / 루트경로 지정했을 때, '/posts' 경로도 추가되어서 라우팅된다
app.use('/posts', postRoute);
// app.use('/users', userRoute); // user 데이터를 작성할때 user 라우터로 관리한다

app.listen(8080, () => {
    console.log('서버 열림 굿')
})