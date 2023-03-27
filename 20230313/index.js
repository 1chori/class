for(let i = 0; i < 10; i++){
    console.log('주말 잘 보냇니??');
}

// 컴파일 언어와 인터프리터 언어

/*
컴파일러 : 프로그램 코드를 컴파일해서 컴퓨터가 알아들을 수 있는 기계어로 번역해준다.
소스코드 전체를 한번에 번역하고 실행파일을 만들어서 실행해준다.
장점 : 파일의 크기가 큰데 실행 속도가 빠르다
      실행하기 전에 전체코드를 번역해서 오류를 미리 알 수 있다.
      대신 번역 과정 시간이 좀 걸린다
      종류 : C, C++, Java, Python 등등
*/

/*
인터프리터 언어 : 프로그램 코드를 한 줄씩 읽으면서 번역과 실행을 한다.
장점 : 프로그램 실행 도중 동적으로 소스코드를 수정이 가능하다
      실행하는 크기가 작고 소스 코드의 수정이 용이하다.
      디버깅하기 편하다.
      소스코드가 실행될 때마다 번역과 실행을 반복해서 속도는 좀 느리다.
      오류를 실행 중에 발견할 수 있다
      종류 : JavaScript 등
*/

// 논리 연산자 ||, &&
/*
    || 논리합(OR)
    a || b --> a나 b 둘 중에 하나라도 참이면 참
    0    0 --> false
    1    0 --> true
    0    1 --> true
    1    1 --> true
*/

let a = false;
let b = true;
console.log(a||b);
console.log(false||false); // false
console.log(true||false); // true
console.log(false||true); // true
console.log(true||true); // true

/*
    && 논리곱(AND)

    a && b --> 둘 다 참이어야 참
    0    0 --> false
    1    0 --> false
    0    1 --> false
    1    1 --> true
*/

let c = true;
let d = false;
console.log(c&&d);

let text = '집에 가고싶다';
let time = 20;
if(text === '집에 가고싶다' && time >= 18){
    console.log('아싸 집에 가자!!');
}

// 삼항연산자
// 한 줄로 코드들을 표현할 수 있다. 잘 쓰면 편한데 가독성이 많이 떨어져서 본인도 읽기 힘들 수 있다.
// 조건 ? (앞의 조건이 참일 때) : (앞의 조건이 거짓일 때)

console.log(1 > 2 ? '이건 참이야' : '이건 거짓이야');
console.log(1 > 2 ? 3 < 4 ? '이건 두번째 참이야' : '이건 두번째 거짓이야' : '이건 거짓이야');
// 2번까지만 사용하자

// switch 조건문
// switch ('조건') {
//     case 1:  // if 부분
        
//         break;
//     case 2:  // else if 부분
        
//         break;
//     case 3:  // else if 부분
        
//         break;
//     case 4:  // else if 부분
        
//         break;

//     default:  // else
//         break;
// }

let month = 10;
let monthName = '';
switch (month) {
    case 1:
        
        break;
    case 2:
        
        break;
    case 3:
        
        break;
    case 4:
        
        break;
    case 5:
        
        break;
    case 6:
        
        break;
    case 7:
        
        break;
    case 8:
        
        break;
    case 9:
        
        break;
    case 10:
        // 여기가 동작되는 이유는 case 10부터 실행 시키는데
        // break문이 있기 때문에 여기만 실행한거다
        // break문이 없으면 case 10에 들어와서 다음 break문까지 실행한다
        break;
    case 11:
        monthName = 'November';
        break;
    case 12:
        
        break;

    default:
        break;
}

console.log(monthName);

switch (1) {
    case 1:
        console.log('첫번째 case문');
        //break;
    case 2:
        console.log('두번째 case문');
        //break;
    case 3:
        console.log('세번째 case문');
        //break;

    default:
        console.log('여기까지');
        break;
}

// while 반복문 : 무한히 돌아간다
// while('값이 true이면 무한히 돌아간다. false 값을 변경해주어야 반복문이 멈춘다')
// break문으로 반복을 종료시켜줄 수 있다

let num = 1;
while(num !== 5){
    console.log(num);
    num++;
}
// 값이 하나씩 출력 // 1 // 2 // 3 // 4 

let num2 = 1;
while(true){
    console.log(num2);
    num2++;
    if(num2 === 5){
        break;
    }
}

// 사용자가 브라우저에 값을 입력 받을 수 있는 상태창을 띄어준다.
// prompt 간단한 입력값을 받아올 수 있다
// let value = prompt('입력해 보세요')
// alert(value);

// let inputNum = prompt('첫번째 숫자 입력');
// let inputNum2 = prompt('두번째 숫자 입력');

// 여기에 입력받은건 문자열이다
// 숫자를 넣고싶으면 숫자 형태로 변환시켜주는 함수를 사용해야 한다
// 이걸 형변환이라 한다
// parseInt('정수로 변경할 변수나 값')
// Number('parseInt와 같다')
// 다른 형태의 type을 number type으로 형변환 시켜준다
//let result = parseInt(inputNum) + Number(inputNum2);

// console.log('결과는 과연... : ', result);


 let value = prompt('1~5 사이를 입력해');
 let play = true
 while(play){
     switch (value) {
         case '1':
             console.log('1번 눌렀네 집에가');
             play = false;
             break;
         case '2':
             console.log('2번 눌렀네 밥먹어');
             play = false;
             break;
         case '3':
             console.log('3번 눌렀네 정신차려');
             play = false;
             break;
         case '4':
             console.log('4번 눌렀네 놀러가');
             play = false;
             break;
         case '5':
             console.log('5번 눌렀네 죽어');
             play = false;
             break;          
         default:
             console.log('1~5 눌러');2
             value = prompt('1~5 사이를 입력해');
             break;
     }
 }


// 컴퓨터랑 가위바위보
// 사람은 3개 중에 선택할 수 있는데, 컴퓨터는 자동으로 어떻게 선택하지?
// 자바스크립트에서 랜덤값을 구할 수 있는 친구
Math.random(); // 0~1까지의 랜덤 수
// parseInt()를 사용해서 정수로 변환을 하고 값이 너무 작으니까 곱해줘야 한다.
console.log(Math.random()*3);
console.log(parseInt(Math.random()*3));


// let value = prompt('가위바위보를 할까요? 어떤걸 낼건가요?')


// switch (value) {
//     case '가위':
//         switch (key) {
//             case value:
                
//                 break;
        
//             default:
//                 break;
//         }
//         mySelect = 0;
//         break;
//     case '바위':
//         mySelect = 1;
//         break;
//     case '보':
//         mySelect = 2;
//         break;
//     default:
//         alert('제대로 선택하라고!')
//         break;
// }