// 예외 처리문

// try-catch문 : 코드 실행 중 예외 상황이 발생해도 프로그램이 종료되지 않고 프로그램을 유지할 수 있도록 해준다.
// 프로그램의 안전성을 높일 수 있다

try {
    // 오류가 발생할 것같은 코드
} catch (error) {
    // 오류가 발생했을 때
}


try {
    if(5 == 6)throw 'Errdfdf'
    // throw : 에러 메시지를 던질 수 있다
} catch (error) {
    console.log(error);
}

function myStr() {
    let devValue = document.querySelector('.dev').value;
    try {
        if(devValue == '')throw "It's empty";
        devValue = parseInt(devValue);
        // Number : 숫자로 타입을 변경해주는 생성자 함수
        if(isNaN(devValue)) throw 'Enter the Number'
        // 문자열이 들어가면 문자가 숫자로 변환될 수 없어서 number가 아니다
    } catch (error) {
        // 코드를 실행하다 err가 발생하면 catch문을 실행하고
        // 오류의 내용은 error 매개변수에 들어온다
        console.log(typeof devValue);
        console.log(devValue);
        document.querySelector('.message').innerHTML = error;
    }
}
// 로그인이나 뭔가를 입력해야 하는 곳에서 입력하지 않으면 나타낼 때 좋을것 같다