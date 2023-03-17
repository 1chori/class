// 생성자 함수
// 객체를 함수로 만들때 많이 사용한다
// 객체를 생성할 때 사용하는 함수

// creatObj가 생성자 함수
function createObj(_name, _atk, _def, _speed) {
    this.name = _name;
    this.atk = _atk;
    this.def = _def;
    this.speed = _speed;
}

// 이런 모양으로 생성자 함수를 만든다
// 이 함수로 객체를 생성하는 방법 -> new라는 키워드를 사용한다
// (동적할당)메모리 공간을 동적으로 사용할 수 있게 해준다(할당)
// 새로운 객체를 생성하기 위한 메모리 공간을 
// new 키워드를 사용하면 빈 객체를 만들어주고 생성자 함수를 실행시켜서 빈객체 this 객체를 참조한다
// 키값을 추가해주고 객체를 만들어준다
// 객체를 본인이나 옆에 있는 친구라고 보면 된다
// 하나의 객체를 사람이라 표현했을 때 사람에 대한 정보를 객체로 만들어놓고 사람을 생성
// 물건을 생성할 때도 객체에 그 물건의 정보를 키와 값으로 만들어서 하나의 오브젝트화 시킨다

let obj = new createObj('고블린',100,100,100);
console.log(obj);

let obj2 = new createObj('트롤',200,200,50);
console.log(obj2);

// 전역변수만으로 프로그램을 관리하기 힘드니까 오브젝트화 객체화 시킨다
// 개발자는 객체를 잘 다뤄야한다
let obj1_name = '고블린';
let obj_atk = 100;

let obj2_name = '고블린';
let ob2_atk = 100;

// 두가지의 명령어로 객체의 값에 접근할 수 있다
console.log(obj.name);
console.log(obj['atk']);

let arr = [1,2,3,4];
arr.forEach((i) => {
    console.log(i);
});
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for in
// 자동 완성 했을 때, object라고 적혀있는 변수에 우리가 보고싶은 객체를 넣어준다
for (const key in obj) {
    console.log(key);  // name,atk,def,spped 키값이 순서대로 나온다
    console.log(obj);
    console.log(obj[key]);

    // 아래 코드처럼 쓰면 안된다
    // 객체 아네 있는 key값을 찾는 식이다
    console.log(obj.key); 
}


// 페이지에 자바스크립트를 이용해서 동적인 기능을 넣어보자

// BOM 브라우저 객체
// 브라우저의 기능들을 객체로 사용할 수 있게 해준 것
alert('dfdf');
console.log(window);

// onload 메서드는 브라우저의 랜딩이 끝나고 보여줄 준비가 되었을 때 실행되는 함수
// window onload라는 키값에 함수 값을 전달
window.onload = function () {
    console.log('나 다 그렸어');
}

// DOM(문서 객체 모델) : 문서를 객체의 모양으로 만든 것.
// 문서의 접근을 가능하게 해준다
// DOM은 페이지에 있는 태그들을 객체로 표현한 것

// document 객체에서 태그를 선택하는 방법
// 객체를 이용해서 찾고싶은 태그를 자바스크립트로 가져와서 사용할 수 있다
console.log(document);

console.log('------------------------------ID------------------------------');

// getElementById 메서드로 태그의 아이디를 찾아서 태그를 가져올 수 있다
let div2 = document.getElementById('div1');

// 아이디 값이 있는 태그는 그냥 변수처럼 사용해도 된다
// 아이디는 중복되지 않게 만들어라
let div3 = div1;

// querySelector 이 친구는 만능! 이 친구만 사용해도 된다
let div4 = document.querySelector('#div1');

console.log(div2);
console.log(div3);
console.log(div4);

// class는 이렇게 사용할 수 없다
// 이유는 클래스는 중복될 수 있게 만들었으니까
// console.log(class_div2);
let div5 = document.querySelector('.class_div2');

// querySelector는 문서를 읽다가 첫번째로 발견된 태그 하나를 가져온다
console.log(div5);

let divArr = document.querySelectorAll('.class_div2');
console.log(divArr[3]); // 배열의 형태로 가져온다, 3번째 태그를 가져오고 싶을 때

// 태그 이름 선택자
// querySelector 변수의 내용은 CSS 선택을 문자열로 넣어준다
let div6 = document.querySelector('div');

// 텍스트를 태그에 넣어주고 싶을 때
// div1
div1.innerHTML = 'gg'; // gg
div1.innerHTML = '<div>나 태그</div>'; 
div1.innerHTML = '<ul><li>태그<li><ul>'; 
// div1 태그의 내용을 추가할 수 있다
console.log(div1.innerHTML);

let div7 = document.querySelector('.class_div2');
div7.innerHTML = '나 class_div2 태그 중 첫번재야'

let div8 = document.querySelector('.class_div2');
//div8[3].innerHTML = '난 4번째 태그야';

// 버튼 기능
// 버튼을 누르면 함수를 실행시켜보자
function btnFN() {
    // class_div2 클래스를 가지고 있는 태그들을 class_div 변수에 배열로 담고
    let class_div = document.querySelector('.class_div2');
    // 그 배열을 forEach 순회하면서 아이템을 매개변수로 받았다
    class_div.forEach(function (i) {  // for문보다 forEach가 편하다
        i.innerHTML = '이 문자로 통일';
    })
}
