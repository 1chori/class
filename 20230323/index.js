// 쿠키 생성 함수

function createCookie(name, value) {
    // 현재 날짜와 시간 정보를 가지고 있는 개체를 만들기
    let date = new Date();
    date.setTime(date.getTime() + 10000);
    document.cookie = name+'='+value+';expires='+date.toUTCString()+';path=/';
}

createCookie('팝업', true);

// 세션
// 사용자가 브라우저를 이용하는데 하나의 상태를 관리할 때 사용
// 로그인 서버쪽에서 세션 ID를 생성하고 프론트에서 세션의 ID를 서버에서 받아서 사용
// 토큰은 로그인 유지를 시키기 위해 세션 ID를 사용해서 로그인이 유효한지 상태를 유지시키는 개념
// 로그인 상태가 맞는지 확인
// 브라우저가 종료될때까지 유지가 된다

// 프론트에서 만들어보자
// setItem 메서드 : 첫 매개변수는 키, 두 번째 매개변수는 값
sessionStorage.setItem('Token', '데이터내용');

// 세션의 저장된 데이터를 호출
// getItem : 세션에 저장된 데이터를 호출. 매개변수로는 키값을 전달
console.log(sessionStorage.getItem('Token'));

// 문서에 내용을 쓰기 추가할 수 있다
document.write(sessionStorage.getItem('Token'));

// 세션의 길이 구하는법
document.write(sessionStorage.length);

// 세션의 값을 인덱스로 호출
// key 메서드 활용
document.write(sessionStorage.key(1));

// 세션 삭제
// clear : 전체 삭제
//sessionStorage.clear();

// 로컬스토리지에 추가
window.localStorage.setItem('key', 'value');

// 로컬스토리지 값을 호출
window.localStorage.getItem('key');

//로컬스토리지 전체 값을 제거
//window.localStorage.clear();

// 로컬스토리지 길이
window.localStorage.length;

// 로컬스토리지 키값 호출
window.localStorage.key(0);
