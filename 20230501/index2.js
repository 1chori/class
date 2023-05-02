// fs(file system) 모듈 : 파일 시스템 파일 생성, 삭제, 읽기, 쓰기 등 작업을 할 수 있다.

const fs = require('fs');

// existsSync() : 폴더가 있는지 확인하는 메서드. 반환값은 true/false
// 동기적으로 작동한다. Sync구문이 있는 메서드는 동기적으로 작동한다.
// 매개변수에 폴더의 경로를 작성해준다.

let folder = fs.existsSync('./Test');
console.log(folder);

// mkdir() : 폴더를 생성하는 메서드
// 첫번째 매개변수 : 생설할 폴더의 경로, 두 번째 매개변수 : 폴더 생성시 호출할 콜백 함수

// 폴더가 없으면 만들어
if (!folder) {
    fs.mkdir('./Test', (err) => {  // 비동기적으로 실행하는 메서드
        if (err) {
            console.log(err);
            console.log('에러남');
        } else {
            console.log('폴더 잘 만들어짐');
        }
    })
    // fs.mkdirSync('./Test')  // 동기적으로 실행하는 메서드
    // console.log('폴더 만들었음');
}

// 폴더 안에 파일 추가
// 첫 번째 매개변수 : 파일의 이름 경로, 두 번째 매개변수 : 파일에 작성할 내용, 세 번째 매개변수 : 콜백 함수
// 콜백함수의 매개변수는 에러 내용의 객체를 전달 받는다.
// fs.writeFile('./Test/temp.txt', 'Hello nodejs', (err) => {
//     if (err) {
//         console.log('에러남');
//     } else {
//         console.log('파일 잘 만들어짐');
//     }
// })

// 동기적으로 실행되는 메서드
fs.writeFileSync('./Test/temp.txt', 'Hello nodejs');
console.log('폴더 잘 만들어짐');


// 파일 읽어오기
// 첫 번째 매개변수 : 파일의 경로, 두 번째 매개변수 : 인코딩의 내용, 세 번째 매개변수 : 콜백 함수
// 인코딩 내용을 작성 안하면 null. buffer 객체로 읽어온다.
// 콜백함수의 첫 번째 매개변수 : 에러 내용 객체, 두 번째 매개변수 : 읽어온 파일의 내용
// fs.readFile('./Test/temp.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// 동기적인 메서드
// 메서드의 반환값으로 파일을 읽어온 data가 나옴
let data = fs.readFileSync('./Test/temp.txt', 'utf-8');
console.log(data);


// 폴더 제거
// 첫 번째 매개변수 : 삭제할 폴더의 경로, 두 번째 : 옵션 객체 전달 {recursive : true}, 세 번째 매개변수 : 콜백함수
// 폴더 안의 내용까지 제거할 것인지 선택
// 콜백함수의 매개변수는 에러 내용의 객체를 전달 받는다.
fs.rm('./Test', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('폴더 잘 삭제됨');
    }
})