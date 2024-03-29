// 콜백 함수

// 함수의 매개변수로 함수를 전달해서 내가 함수에 코드 작성하다가 필요한 순간에 매개변수로 받은 함수를 실행시킨다

function test(callBack) {
    console.log('1번 작업끝');
    console.log('2번 작업끝');
    if (true) {
        callBack();
    }
}

function test2() {
    console.log('나는 콜백함수야');
}

test(test2);

// 배열 메서드
let arr = [1,2,3,4];
arr.map(function(i,v) {
    console.log(i);
    console.log(v);
})

// 배열 메서드 map을 흉내내자
//우리가 만든 객체
let arr2 = {
    map : function(callBack) {
        // 함수의 매개변수 갯수를 알 수 있다
        // 매개변수 안받는 함수인데 매개변수 전달하면 터진다
        if (callBack.length == 1) {
            let a = 2;
            console.log('나는 map 함수야. 매개변수가 1개라고 알고 있어' + a + '결과야');
            callBack(a);
        } else if(callBack.length == 2){
            let a = 2;
            let b = 3;
            console.log('나는 map함수야. 내가 받은 콜백함수에는 매개변수 2개를 넣는다고 전달 받았어')
            callBack(a,b);
        } else {

        }
    }
}
arr2.map(function(a,b) {
    console.log('나는 콜백 함수야. 전달받은 매개변수는' , a + b, '이거야');
})
// console에서 ,a+b,는 5로 출력. + a + b +는 23으로 출력
function temp(callBack) {
    if (callBack.length === 0) {
        callBack();
    } else if(callBack.length === 1){
        let temp = '사과';
        callBack(temp);
        
    } else if(callBack.length === 2){
        let temp = '딸기';
        let temp2 = '포도';
        callBack(temp,temp2);

    } else{
        console.log('너 매개변수 초과야. 난 두개만 받을 수 있어.');
    }
}

function temp2(v,b) {
    console.log('난 콜백 함수야', v + b + '를 받았어');
}
temp(temp2);
// 매개변수가 없을 때 -> 난 콜백 함수야
// 매개변수 1개일 때 -> 난 콜백 함수야 사과를 받았어
// 매개변수 2개일 때 -> 난 콜백 함수야 딸기포도를 받았어


// 콜백 함수 만들어보자
// function 함수명 : 일반함수
// 메소드 : 객체 안에 있는 함수
// 객체 안에 함수를 만들고 콜백 함수를 만들면 된다
// 매개변수 3개까지 받을 수 있는 함수를 만드는데
// 전달받은 콜백함수는 구구단을 보여주는 함수
// 매개변수 1개를 받으면 2단, 2개 받으면 2,3단, 3개 받으면 2,3,4단

// 좋은 부분:
// 1. 함수 googoodan은 콜백 함수를 매개변수로 받아서 실행하는데, 이는 함수의 재사용성을 높이고 유연성을 높여준다.
// 2. 콜백 함수 googoodan2는 구구단을 출력하는 기능을 수행하는데, 이는 재사용성이 높고 간단하다.

// 나쁜 부분:
// 1. 함수 googoodan은 매개변수의 길이에 따라 분기 처리를 하고 있다. 이는 코드의 가독성을 떨어뜨리고 유지보수를 어렵게 만든다.
// 2. 함수 googoodan은 매개변수의 길이가 4 이상인 경우 아무런 처리를 하지 않는데, 이는 예외 처리가 미흡하다고 볼 수 있다.
function googoodan(callBack) {
    if (callBack.length === 1) {
        let dan = 2;
        callBack(dan);
    } else if(callBack.length === 2){
        let dan = 2;
        let dan2 = 3;
        callBack(dan,dan2);
    } else if(callBack.length === 3){
        let dan = 2;
        let dan2 = 3;
        let dan3 = 4
        callBack(dan,dan2,dan3);

    } else{
        console.log('그만해');
    }
}

function googoodan2(a,b,c) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${a} x ${i} = ${a * i}`);
    }

}

googoodan(googoodan2);

// 2단 구구단 코드

console.log('-------교수님 작업-------------')

// 객체 선언
let obj2 = {
    gugu : function (callBack) {
        switch (callBack.length) {
            case 1:
                callBack(2);
                break;
            case 2:
                callBack(2);
                callBack(3);
                break;
            case 3:
                callBack(2);
                callBack(3);
                callBack(4);

                break;
        
            default:
                console.log('그만해');
                break;
        }
    }
}

// 어떻게 만들어도 상관 없지만, 기능 단위로 함수를 만드는 습관은 가지는게 좋다
function temp3(f,g) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${f} x ${i} = ${f * i}`);
    }
}

obj2.gugu(temp3);

// 콜백 중요하니까 정리 잘해놓자
// 함수가 실행되면 스택이 쌓이는데
// 스택 : 후입선출
// 큐 : 선입선출

// 콜 스택 개념
// 스택은 데이터를 사용하기 위해 잠시 저장해 놓는 것
// 데이터들을 쌓아놓는다 생각하면 된다
// 후입선출이므로 마지막에 추가된 데이터부터 제거
// 함수 실행 컨텍스트. 함수를 실행하게 되면 스택에 추가가 되고 반환될 때 스택에서 제거된다
// 함수 실행 컨텍스트 : 함수가 실행될 때마다 생성된다. 함수의 실행 정보를 가지고 있다
// 콜 스택은 함수가 실행되면 실행 컨텍스트 저장하는 스택의 구조
// 콜 스택은 컴퓨터의 메모리 크기나 운영체제에 따라 크기가 다르다
// 콜 스택이 쌓이게 되서 크기가 초과하면 스택 오버플로우 에러 발생!(더 이상 실행 할 수 없다)
// 예) 함수를 무한으로 실행할 때 나올 수 있다

// 함수를 만들어보자
function fun1() {
    fun2();
}

function fun2() {
    fun3();
}

function fun3() {
    console.log('난 3번');
}

fun1();

// 자바스크립트 코드 전체를 실행하고 전역 실행 컨텍스트가 실행되고
// fun1 함수 실행 구문에서 함수의 실행 컨텍스트가 생성 
// -> fun2 함수 실행 컨텍스트 생성 -> fun3 실행 컨텍스트 생성
// 이렇게 스택이 쌓이고 마지막에 추가된 fun3 함수의 실행 컨텍스트 제거
// -> fun2 함수 실행 컨텍스트 제거 -> fun1 함수 실행 컨텍스트 제거

// 콜 스택 확인하는 방법
// 개발자 모드에서 디버깅 모드 활성화(Ctrl + F8)
// 함수나 코드 줄 번호에 클릭하면 브레이크 포인트가 찍힌다
// 코드가 실행되다가 그 포인트에 도달하면 잠시 실행을 멈춘다
// 재생버튼 누르면 다음 포인트가 있는 곳까지 실행하다 다시 멈춘다
// 작업의 디버깅도 용이하다

// 화살표 함수
// ES6에 새로 나온 함수의 방식
let temp4 = () => {
    console.log('나는 화살표 함수')
}

temp4();

// 화살표 함수와 일반 함수에는 차이가 있다
// 함수에서 값을 반환할 때 return식을 사용해서 반환했는데
// return 없이 반환할 수 있다
// 함수와 똑같이 매개변수는 괄호에 넣으면 된다
let temp5 = () => {
    return 5;
}
//let temp5 = () => 5; // 5가 출력된다


let ab = temp5();
console.log(ab);

// 이 둘의 가장 중요하고 큰 차이점
// this 키워드 : 자바스크립트 객체를 참조하는 특별한 구문
// 일반 함수와 화살표 함수의 큰 차이는 'this'
// this가 가리키는 대상이 다르다
// 일반 함수 this : 함수가 실행될 때 위치(스코프)에서 this를 가져온다.(다이나믹 스코프)
// 화살표 함수의 this : 화살표 함수 내부의 this는 화살표 함수를 선언한 위치에서 this를 가져온다.(렉시컬 스코프)

let obj = {
    a : function () {
        b();
        console.log(this);  // 있고 없고 결과 차이가 있다
        let c = () => {
            console.log(this);
        }
        c();
    }
}

function b() {
    console.log(this);
}

obj.a();
let d = () => {
    console.log(this);
}
d();

// 전역 공간에서 this를 쓰면
// window 객체
// BOM(Browser Object Model) : 브라우저를 객체 모델로 표현한 것
// BOM은 브라우저 기능을 접근할 수 있는 객체
console.log(this);

// 동기 : 순차적으로 실행된다. 이전 작업이 끝나고 다음 작업 진행
// 비동기 : 다른 코드들과 함께 동기적으로 실행되지 않는다
//          순차적으로 실행되지 않고 작업을 하는 도중에도 다른 작업이 가능하다
// 비동기 사용 예) 서버에서 값을 가져오는 동안 페이지가 멈춰있지 않고 
// 다른 작업들은 정상적으로 돌아간다. (서버에서 값을 가져오는 작업이 비동기, 페이지가 돌아가는게 동기)


// 비동기 함수
// setTimeout은 비동기 함수이고 매개변수를 2개 받는다
// 첫 번째 매개변수는 함수, 두 번째 매개변수는 시간 값을 숫자타입으로 넣어주면 된다
// 1000 == 1초, 2000 == 2초
setTimeout(function() {
    console.log('나는 1초 뒤 실행되고 비동기 함수에서 실행됬어');
}, 2000);

console.log('나는 동기');

// let,var,const 꼭 써야한다고 했었다
// 쓰지 않으면 어디서든 접근할 수 있는 전역 변수가 된다

let a = '';
function temp6() {
    let b = '';
    c = 'aa';
}
temp6();

// window 객체의 키값으로 추가되 모든 곳에서 접근이 가능하다

console.log(b);
console.log(window.c);

let arr3 = [1,2,3,4,5];

let arr5 = arr3.map(function(i,v,c,d){
     console.log("반복됨?",i ,v)
     console.log(c);
     console.log();
     return v;
})

console.log(arr5)

let arr4 ={
    value : [1,2,3,4,5],
    length : 5,
    map : function(arrfn){
        let tempArr = [];
        for (let i = 0; i < this.length; i++) {
            if(arrfn.length == 1)
            {
               let temp =  arrfn(this.value[i]);
               tempArr.push(temp);
            }else if(arrfn.length == 2){
                let temp = arrfn(this.value[i], i);
                tempArr.push(temp);
            }else if(arrfn.length == 0){
                let temp = arrfn();
                tempArr.push(temp);
            }else{
                console.log("에러임 ㅎㅎ");
            }
        }
        return tempArr;
    }
}

let arr6 = arr4.map(function(i,v){
    console.log("난 우리가 만든 함수인데 보임?", i, v)
    return i;
});
console.log(arr6)

let number = [1,4,6];
let double = number.map(function(num) {
    return num * 2;
})
console.log(double);

let rootObj = {
    func : function() {
        console.log(this);

        function inner() {
            console.log(this);
        }
        inner();
    },
    obj6: {
        func: function () {
            console.log(this);
        },
    },
};

rootObj.func();
rootObj.obj6.func();