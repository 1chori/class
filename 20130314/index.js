// 함수
// 함수는 실행할 코드들의 이름을 지어준다.(반복 사용하는 기능들을 묶어서 관리한다)
// function name (){실행시킬 코드}

function whiskey() {
    console.log('good');
}

// whiskey라는 함수를 선언했다
// 함수 실행

whiskey(); // 함수를 실행시키는 명령어. 중괄호 같이 사용해야 함수가 실행된다.
// 함수를 실행시키면 스택이라는 곳에 함수 실행이 쌓이고 순서대로 실행이 된다.
// 실행컨텍스트 들어가면

// 변수들 원시타입
// 객체 배열 함수 레퍼런스 타입
// 함수도 값이다 

// 변수에는 스코프라는 개념이 있다
// 전역 스코프와 지역 스코프가 있다
// 전역 스코프는 모든 곳에서 접근이 가능한 범위
// 지역 스코프는 특정 영역에서만 접근이 가능한 범위
// 전역 스코프에 너무 많은 변수를 선언하면 관리하기 힘들어진다
// 접근 안된다고 너무 남발하면 안좋다

let temp = '나는 전역변수'; // 전역 변수
function sleep () {
    let temp = '나는 지역변수';
    // 함수의 실행이 끝나면 해제된다
}

let temp2 = '나 접근되?';
function arm() {
    console.log(temp2);
}
arm();

function go() {
    let temp3 = '접근하고 싶어';
    console.log(temp3);
}
go();

// 호이스팅 : 변수가 되기도 전에 호출했을 때
function my() {
    let x = 5;
    //var x = 5; // 결과가 undefined로 추출된다. 호이스팅이 일어나도 오류 안뱉음
    console.log(x);
    // 지역 변수 선언
    // 호이스팅이 발생하기때문에 예상치 못한 문제가 일어날 수도 있다.
    // 변수는 코드를 작성할 때 최상단에 작성한다
}
my();

// 매개변수
function fun(v) {
    // 전달받은 매개변수를 사용
    console.log(v);
}
// 전달받은 매개변수에 따라서 작업을 다르게 하고싶을 때

function furn2(num) {
    console.log(`전달받은 매개변수는 ${num}`)
}

let a = 1;
let b = 2;

furn2(a);
furn2(b);

// 함수 cup을 만들고 매개변수로 drink 음료수를 따라줘보자

function cup(drink) {
    console.log(`컵에 ${drink}를 따랐음`);
    console.log(`${drink}를 이 컵에 따라서 마시니까 좋다`);
}

cup('콜라');
cup('사이다');
let c = '포도주스';
cup(c);

// 전달되는 매개변수에 따라 다른 결과물을 보여줄 수 있다

// 거스름돈 자판기 기능
// 자주 사용할 것 같은 기능들을 함수로 작성해놓고 재사용


// 매개변수는 여러개 설정 가능
function vending(money, unit) {
    // 거스름돈 자판기
    console.log(`${unit}원짜리 ${money/unit}개`);
}

// 지폐 1000원짜리를 500원짜리로 거슬러줘
vending(1000,500);
// 지폐 1000원짜리를 100원짜리로 거슬러줘
vending(1000,100);

let e  = vending;
console.log(e);
// e라는 변수에 vending함수라는 값이 들어있기 때문에 함수 실행식처럼 사용이 가능하다
e(1000,100); // 100원짜리 10개
let f = vending(); // ()함수의 실행식인데..함수가 실행시키는건데..이게 담길까?
console.log(f);  // undefined

// 변수에 함수를 대입할 때는 함수의 이름을 전달해야한다.

// 우리가 함수를 사용할 때 함수 안에서 필요한 값을 내보낼 수 있게 도와주는 식이 있다
// => return

function as() {
    // 함수 실행 도중 return식에 도달하면
    // return 뒤에 작성한 값을 반환하고 함수는 종료된다.
    return "나는 반환값"
    console.log('위에 있는 return식 때문에 함수가 종료되어 이 값은 실행 안된다');
}

let g = as();
console.log(g);

// 함수 심화

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(1,2));

function gg(num) {
    for(let i = 1; i < 10; i++){
        console.log(`${num}단 ${num} X ${i} = ${num*i}`)
    }
}
gg(3);
// 코드의 재사용성을 높이자

// 성격 유형 검사지 함수 간단버전
function type(value) {
    switch (value) {
        case 1:
            
            return '분노조절 잘해'  // break문이 있으면 undefined로 추출

        case 2:
            
            return '과묵하지만 상냥해'
        

        case 3:
            
            return '조용하지만 각오해'
    
        default:
            break;
    }
}

console.log(type(1));