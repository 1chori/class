// 팝업 열어주는 함수
function openPopup() {
    let popup = document.querySelector('.popup_wrap');
    // 디버깅 습관 가지자(하나하나 확인하는 습관)
    //console.log(popup);


    console.log(popup.className);
    console.log(popup.classList);
    //popup.className
    // 이 놈은 문자열을 그대로 대입해 주면 된다

    //popup.classList
    // 이 놈은 메서드를 사용하면 된다
    //popup.className = popup.className + ' is_active';
    //popup.classList.add('is_active') : is_active 클래스가 있는지 확인

    // 메서드가 편하다

    // 조건문으로 클래스가 있는지 확인을 하고 있으면 붙이지말고 없으면 붙이자
    // pop
    // if (popup.classList.contains(' is_active')) {
        
    // } else {
    //     popup.className = popup.className + ' is_active'
    // }


// 문자열 버전
// let strArr = popup.className.split('');
// console.log(strArr.indexOf('is_active') != -1);
// if (strArr.indexOf('is_acitve') != -1) {
    
// } else {
//     popup.className = popup.className + ' is_active';
// }

// 메서드 사용해서 조건 추가
    if (popup.classList.contains('is_active')) {
        // is_active 있으면 제거할거임
        // remove 클래스 제거 메서드
        popup.classList.remove('is_active');
    } else {
        // is_active 없으면 추가할거다
        // add 클래스 추가 메서드
        popup.classList.add('is_active');
    }
}