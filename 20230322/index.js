// DOM 내용 추가
// 우리가 사용하는 div, p, h1 태그들


// DOM 트리
// DOM 트리의 기본 단위는 노드이다

// 문자를 태그 사이에 넣어서 태그를 추가하는 방법
// document.querySelector('.add_class').innerHTML = '<div>와우</div>'

// 노드에 추가하는 방법
// div 태그를 생성하는 방법
// createElement 태그 생성해주는 메서드
// createElement(태그명)
let _div = document.createElement('div');
// 여기까지는 생성해서 _div 변수에 담았고 생성된 태그는 메모리 공간에 있는 것
console.log(_div);

// 생성한 태그에 내용을 넣고
_div.innerHTML = '<div>여기</div><p>있다!!</p>';

// 생성한 태그에 클레스도 추가
_div.classList.add('new_tag');

// 태그를 추가하고 싶은 위치에 추가를 해줘야 트리에 추가되어 보인다

// 원하는 위치에 추가해주자
// append() 사용
document.body.append(_div);
setTimeout(() => {
    document.querySelector('.add_class').append(_div);
}, 2000);

// append 매서드는 원하는 위치에 태그를 추가할 수 있다.
// 태그명.append(생성한 태그) = 태그명 태그의 내용으로 생성한 태그가 추가된다

// innerHTML : 문자로 내용이 들어가서 보안이 취약하다
// append : DOM 트리의 노드이기 때문에 보안이 좋다. 태그 작업을 세분화 가능하다

// 태그의 내용 확인
console.log(_div.innerHTML);

// 태그의 내용에서 태그를 빼고 내용만 가져오고 싶다면 innerText를 사용하면 된다

console.log(_div.innerText);

// 버튼 태그 생성
let _button = document.createElement('button');

_button.innerHTML = '눌러';

// 태그를 만들고 우리가 사용했던 것처럼 그대로 사용하면 되고
// 내용을 추가해준 다음 원하는 위치에 태그를 넣어주면 된다

_button.onclick = function () {
    // 태그를 제거해보자
    //_div.remove();  // remove() 메서드가 _div 태그를 제거해준다
    // 원하는 태그를 제거할 수 있다
    // 태그의 자식 태그는 removeChild() 메서드로 제거할 수 있다
    //document.body.removeChild(_div); // body 태그 안의 _div 태그를 제거해준다
    console.log(_div);
}


document.body.append(_button);

// onclick 이렇게 이벤트명으로 직접 함수를 대입해서 추가하는 방법

// 이벤트를 구독시킨다
// onclick -> click 입력
// onscroll -> scroll 입력
// addEventListener 메서드의 매개변수로 '구독할 이벤트 이름'
// 두 번째 매개변수로 실행시킬 함수
_button.addEventListener('click', function () {
    console.log('클릭 구독중');
})  // 클릭했을 때 이 함수를 실행시켜라

_button.addEventListener('click', function () {
    console.log('나도 구독중');
})

// addEventListener 메서드는 이벤트를 누적시킬 수 있다. 추가가 가능하다는 얘기

// onclick은 이벤트를 덮어쓴다


_button.onclick = function () {
    console.log('나는 onclick 이벤트');
}
console.log(_button.onclick);

_button.onclick = function () {
    console.log('나는 onclick 이벤트2');
}
console.log(_button.onclick);

// 다른 이벤트들

// load - 페이지와 기타 요소들의 그릴 준비 로딩이 끝났을 때
// on 붙으면 어트리뷰트 방식
window.onload = function () {
    
}

// load 이벤트 구독
// addEventListener('이벤트의 타입', 함수의 내용)을 사용해서 이벤트를 구독해놓는다.
window.addEventListener('load', function () {
    // load 이벤트가 실행되면 내용 실행
})

// onresize : 브라우저의 창 크기가 바뀌면 실행되는 이벤트
window.onresize = function () {
    console.log('창 사이즈 변환');
}

window.addEventListener('resize',function () {
    
})

// scroll : 사용자가 태그나 페이지에서 스크롤 했을 때 발생하는 이벤트. 스크롤 없으면 동작하지 않는다

// 태그의 이벤트로 원하는 이벤트를 구독하면 그 태그에서 이벤트가 발생할 때 실행된다

// 우리가 생성한 태그에서 scroll 이벤트 구독
_div.onscroll = function () {
    // 스크롤 이벤트가 실행되면 우리가 추가할 기능
    console.log('나 스크롤 되니?');
}

// body에서 이벤트를 발생시키고 싶을 때
document.body.onscroll = function () {
    
}

// 키보드 이벤트

// onkeydown : 사용자가 키보드를 누르자마자 발생
window.onkeydown = function () {
    console.log('다운키 눌렀다');
}

// onkeyup : 사용자가 키보드를 누르고 땠을 때 발생
window.onkeyup = function () {
    console.log('온키 했어');
}

// onkeypress : 키보드를 누르고 있는 동안 실행.(방향키 누르면 실행 안됨)
window.onkeypress = function () {
    console.log('계속 누른다~~~~~~');
}


// 마우스 이벤트
// click : 사용자가 해당 태그를 클릭했을 때 발생하는 이벤트
window.onclick = function () {
    console.log('클릭');
}

// 더블클릭 : 더블 클릭 했을 때 발생하는 이벤트
window.ondblclick = function () {
    console.log('더블클릭 했어!');
}

// mousedown : 마우스를 누르자마자 실행되는 이벤트
window.onmousedown = function () {
    console.log('마우스 누름');
}
// mouseup : 마우스를 누르다가 땠을 때 실행되는 이벤트
window.onmouseup = function () {
    console.log('마우스온')
}
// mouseup과 mousedown은 마우스 키를 누르고 이동한 뒤 키를 땠을 때, 
// 좌표로 계산해서 동작해야하는 기능을 만들 때 사용
// mousemove : 마우스가 해당 태그 위에서 움직이면 발생하는 이벤트
window.onmousemove = function () {
    console.log('이동중..');
}
_div.onmousemove = function () {
    console.log('이동중..');
}

let _box = document.querySelector('.box');

// mouseenter : 마우스를 태그 위로 올려졌을 때 실행되는 이벤트. hover랑 비슷하네
document.querySelector('.box').onmouseenter = function () {
    console.log('박스에서 이동');
}
// mouseleave : 마우스가 태그 위에서 나갔을 때 발생하는 이벤트. 이것도 hover랑 비슷하다
_box.onmouseleave = function () {
    console.log('마우스 나갔어')
}

// css에서는 hover를, js에의 기능쪽에서는 mouse~를 사용하면 되겠다

// 모바일 환경에서 실행되는 이벤트
// touchstart : 화면을 터치한 순간
window.ontouchstart = function () {
    console.log('모바일 터치했어');
}

// touchend : 화면을 터치하다가 땠을 때
window.ontouchend = function () {
    console.log('터치하다 땟어');
}


// touchmove : 화면을 터치하고 이동할 때
window.ontouchmove = function () {
    console.log('터치하고 이동중');
}

// 드래그 이벤트

// 이벤트 실행될 때 매개변수로 해당 이벤트의 내용이 전달된다
window.onclick = function (drag) {
    // 이벤트의 내용들 이벤트가 실행되면 이벤트의 내용이 값으로 넘어온다
    console.log(drag);
    // 해당 이벤트가 일어난 타겟
    // 지금은 window에 click 이벤트가 일어나면 실행되는 기능을 실행시켰고
    // event.target 클릭된 태그를 가져온다
    console.log(drag.target);
}

_box.onclick = function (drag) {
    // 이벤트의 내용들 이벤트가 실행되면 이벤트의 내용이 값으로 넘어온다
    console.log(drag);
    // 해당 이벤트가 일어난 타겟
    // 지금은 window에 click 이벤트가 일어나면 실행되는 기능을 실행시켰고
    // event.target 클릭된 태그를 가져온다
    console.log(drag.target);
}

// 마우스의 위치를 가져오자
window.onmousemove = function (a) {
    // 타입 확인
    console.log(a.type);
    // 해당 이벤트 일어나면 마우스의 x좌표 값
    // 좌표값은 픽셀 단위이다
    // 0 ~ 브라우저 너비크기
    console.log(a.pageX);
    // 이벤트 발생 시 마우스가 위치한 y좌표값 발생
    console.log(a.pageY);
}


// 키보드 입력
window.onkeydown = function (k) {
    console.log(k.keyCode);
    // ascii 코드 : 숫자로 표현된다
    // A를 입력하면
    if (k.keyC == 65) {
         console.log('A키를 입력받았다');
    }
}

// 기본 동작을 취소하는 방법
let _button2 = document.querySelector('.btn');
_button2.onclick = function (e) {
    // 기본 동작이 제거된다
    e.preventDefault();
}
