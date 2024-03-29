// 클로저
// 클로저는 내부 함수에서 외부 함수의 변수에 접근할 수 있다

// function fun() {
//     for (var i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//         // 블록 스코프와 함수 스코프
//         // var는 함수 스코프, let은 블록 스코프
//         // 자바스크립트 실행 컨텍스트 잘 짚고 가야한다
//         // var로 선언한 변수는 함수 스코프를 가지고 함수의 어느곳에서든 접근이 가능하다
//         // for문도 함수 내부에서 실행되고 for 문에 선언한 var 변수는 함수의 어디서든 접근이 가능하다
//         // for문 안에서 비동기 처리 함수가 호출되고 for문은 이미 다 종료되고 
//         // 함수가 실행되기 때문에 전부 증가한 5 전부 돌아가고 5로 증가가 이미 되었고 함수스코프로 접근이 가능하기때문에 5가 나온다

//         //vscode에서 debugger 키워드를 작성하면 브라우저에서 브레이크 포인트를 설정할 수 있다
//     }
// }
// fun();

// 함수스코프 : 변수가 선언된 함수에서 유효하다. 함수에서 선언된 변수는 함수가 호출되고 종료되면 해제된다
// 블록 스코프 : 변수가 선언된 블록에서 블록이 종료될 때 사라진다.

function fun2() {
    for (let i = 0; i < 5; i++) {
        // 여기가 블록 스코프
    }
    if (true) {
        // var는 함수 스코프
        // 함수 스코프에 선언된 것
        var a = 45;
        // 블록 스코프로 let을 선언
        let b = 50;
    }
    console.log(a);
    // 블록 스코프라서 호출 안됨
    //console.log(b);
}
fun2();

// 클로저라는 개념은 함수의 외부 변수와 변수 선언 기준으로
// 어디까지 변수를 활용할 수 있는지 잘 숙지 하면 된다

function fun3() {
    let value = '';
    // 내부함수에서 외부 함수의 변수를 사용
    function fun4() {
        if (value == '') {  // 외부함수에서 선언한 변수를 내부함수에 불러와
            value = '클로저';
            return value;
        }
    }
    return fun4;
}

let closure = fun3();
let a = closure();
console.log(a);


// 함수의 변수를 참조해주고 메모리상에 변수가 유지되도록 한다
// fun4 함수가 fun3 함수의 value 변수를 참조하고 fun4 함수가 실행되면 value를 선언
// -> fun4 함수는 fun3의 실행 컨텍스트에 생성된 value 값을 변경할 수 있다
// JS가 함수를 생성할 때, 함수나 변수 선언 위치를 기억해서 함수를 반환한 이후에도 참조 가능하다