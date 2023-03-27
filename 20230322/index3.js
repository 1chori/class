// 쿠키랑 세션, 로컬 스토리지

// 쿠키는 해당 pc에 남아있다
// 쿠키 : 웹사이트를 방문하고 사용자의 pc에 기록할 간단한 데이터
// pc에 저장해 뒀다가 값을 호출해서 사용할 수 있다. 브라우저가 종료되어도 남아있다

// 세션 : 브라우저가 동작되는 동안에 남아있는 데이터
// 상태같은 내용을 다룰때 사용 예) 로그인 되어있는 상태
// 브라우저가 종료시점까지 유지된다.

console.log(document.cookie);

// 쿠키 구조
// 키와 값이 있다. 문자열로 저장하면 된다

// name : 쿠키의 이름(키)
// value : 값
// time : 유효시간
function createCookie(name, value, time) {
    // 처음 필요한 것. 쿠키의 지속 시간
    // 시간, 날짜, 연도 정보를 제공해주는 객체를 만들 수 있다.
    // 생성자로 구현이 가능하다.
    
    let date = new Date();
    console.log(date);

    // 1시간 이후에 제거하고싶다
    let _time = 1;

    // getTime : 현재 시간
    console.log(date.getTime() + _time *24 * 60 * 60 * 1000);
    // 지금 시간에서 + 얼마나 쿠키를 유지할지 추가
    // 쿠키가 제거될 시간을 구해서 값을 만들어 놓는다(만료시간)

    // set get
    // set : 변경할 때 네이밍으로 많이 사용한다
    // get : 정보를 호출할 때
    // 객체 만들어서 정보를 가져오는 경우 메서드는 get을 쓰고
    // set

    let day = 1;

    date.setTime(date.getTime() + day + 5000);

    // 쿠키를 추가하는 방법
    // 쿠키명 = 값;expires + 만료일 +';path=/'
    // path=/ 페이지의 경로에 대한 설정 쿠키를 다루는 경로
    // toUTCString 메서드는 날짜,시간 표시 방법을 변경해준다.
    console.log(date.toUTCString());
    document.cookie = name+'='+value+';expires='+date.toUTCString()+';path=/20230322';
}

createCookie("이벤트 팝업", "true","");
console.log(document.cookie);

// 야매로 작성한 것
function getCookie() {
    let value = document.cookie.slice('=');
    // '=' 제거하고 배열로 변경
    console.log(value);
    return value[1];
}

// 쿠키함수를 작성해보자
// 정규식이 포함되는데 지금은 무시
// 다들 정규식은 간단한 것만 사용하고 필요한 내용이 생기면 찾는다
// 편해서 찾아서 작성하는 경우가 많다
function getCookie2(name) {
    // match 메서드
    // 매개변수로 정규식 전달
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    console.log(value);
    return value ? value[2] : null;
}

// 쿠키를 제거하는 함수. 제일 쉽다
// 쿠키를 상하게만 하면 된다. 날짜를 지나게 만들면 된다
function deleteCookie(name) {
    document.cookie = name + '=; expires=Tue, 22 Mar 2023 00:00:02 GMT';
}
//deleteCookie('이벤트 팝업');
console.log(getCookie2('이벤트 팝업'));

// 로컬 스토리지 : 브라우저에 데이터를 저장하는 방법들 중 하나
// pc에 데이터에 저장. 쿠키와 세션과 다른점은 만료일이 없다
// 로컬 스토리지는 쉽다
// 브라우저 기능을 사용해야하니까 window 객체 안에 있는 메서드를 사용
// getItem 메서드가 값을 호출할 때 사용
// getItem() 메서드는 매개변수로 '키값'
//window.localStorage.getItem();

// setItem 메서드는 값을 키와 함께 저장시켜준다(쿠키과 비슷하다)

//window.localStorage.setItem('user_id','joo');
// let a = window.localStorage.getItem('user_id');
// console.log(a);

// 쿠키, 로컬스토리지 등의 저장소에 민감한 값 저장하면 안된다
// 보안 이슈가 있다