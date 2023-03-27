
let popupBtn = document.querySelector('.popup-btn');
let popupEvent = document.querySelector('.event-btn');
let popupCookie = getCookie('event-popup');

function popupOpen() {
    let popup = document.querySelector('.popup-wrap');
    if (popup.classList.contains('is-on')) {
        popup.classList.remove('is-on');  
    } else{
        popup.classList.add('is-on');
    }
}

popupBtn.addEventListener("click", popupOpen);


popupBtn.addEventListener('click', function () {
    console.log('event')  // 클릭을 할때마다 콘솔값이 나오는지 확인하기 위함
    // 쿠키 추가

    // 하루동안 유지되는 쿠키 생성
    setCookie('event-popup',true,10) 
});

// 문자로 저장. 쿠키, 로컬스토리지 모두
// 코딩을 하면서 데이터를 저장할 때 문자열로 저장한다
console.log(typeof getCookie('event-popup'));

// 하루동안 팝업 안보기

// 쿠키값이 없으면 팝업이 작동하게 
if(popupCookie == undefined){
    popupOpen();
}

function getCookie(c_name)
{
   var i,x,y,ARRcookies=document.cookie.split(";");
   for (i=0;i<ARRcookies.length;i++)
   {
     x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
     y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
     x=x.replace(/^\s+|\s+$/g,"");
     if (x==c_name)
     {
       return unescape(y);
     }
   }
}

function setCookie(c_name,value,time) {
    let date = new Date();
    date.setTime(date.getTime() + time * 1000);

    let str = c_name+'='+value+';expires='+date.toUTCString()+';path=/'; // 쿠키 문자열을 만든다. 쿠키 설정에 사용
    let str2 = getCookieTime(str);
    // 문자열로 데이터를 저장하는데, 값이 여러개일 경우 배열이나 객체를 사용
    // 여러가지의 값을 사용해야하기 때문에 객체의 모양으로 문자열을 전달하고 문자열을 받아서 객체로 변환하여 사용하자
    
    console.log(getCookieTime(c_name+"="+value+";expires="+date.toUTCString()+";path=/")); // getCookieTime 함수를 이용해 쿠키의 만료시간을 문자열로 변환
    document.cookie = c_name+'='+`{"value" : "${value}", "time" : "${str2}"}`+';expires='+date.toUTCString()+';path=/'; // 쿠키를 설정한다
    let value2 = getCookie('event-popup'); //getCookie 함수를 이용해 쿠키를 가져온다
    console.log(JSON.parse(value2));  // 객체로 변환
}


// 아래 함수는 쿠키 만료 시간을 추출하는데 사용
function getCookieTime(cookie) {  // cookie 파라미터는 쿠키 문자열을 받는다. 이 파라미터를 이용해 쿠키 문자열에서 만료 시간을 추출한다
    console.log(cookie);    
    // 쿠키 문자열을 받아서 배열로 변환
    let str = cookie.split(';'); // 쿠키 문자열을 ';' 기준으로 분할한 결과이다. 이 변수에는 분할된 문자열이 배열 형태로 저장된다
    let str2 = str.find(function (i) {
        let temp = i.trim();
        return temp.startsWith('expires=');
    })
    console.log(str2);
    if(str2){
        let str3 = str2.trim();  // 한국 표준시간
        console.log(str3);
        // 쿠키의 시간을 받아서 시간의 정보들을 다루는 Date 객체를 만들어줬다
        return new Date(str3);
    } else{
        return null;
    }
}



// trim 메서드 : 양 끝에 있는 공백을 제거해준다
let a = '    a      ';
console.log(a.trim())

// startsWith 메서드 : 해당 문자로 시작하는지 여부
// 매개변수로 시작하는 문자열 전달해주면 된다

let b = 'abck';
console.log(b.startsWith('d'));


// 시간의 차이를 구해서 값을 받아보자
// 밀리초를 받아서 시간이 얼마나 남았는지 확인하는 함수
// 시간 계산을 할 때 시간이 언제 만료되는지 알고 있으면 된다
// 현재 시간의 정보를 가지고 있는 Date 객체를 만들어서 미래 시간의 밀리초와
// 지금 만든 Date 객체의 밀리초를 빼면 나오는 차이값(밀리초)을 가지고
// 시간과 분, 초로 나타내주면 된다
function times(time) {
    let _time = time;
    // time은 밀리초
    let day = Math.floor(time / (24 * 60 * 60 * 1000));
    console.log(time);

    // 값을 바로 대입해서 사용하자. += -=
    time %= (24*60*60*1000);
    console.log(time);


    let hour = Math.floor(time / (60 * 60 * 1000));
    time %= (60*60*1000);

    let min = Math.floor(time / (60 * 1000));
    time %= (60*1000);

    let sec = Math.floor(time / (1000));
    console.log('날짜 : ' + day);
    console.log('시간 : ' + hour);
    console.log('분 : ' + min);
    console.log('초 : ' + sec);
    return day + '일' + hour + '시간' + min + '분' + sec + '초';
}

let dateTemp = 10000;
times(dateTemp);

// setTimeout은 비동기 함수. 매개변수로 전달한 시간 이후에 실행되는 함수
setTimeout(() => {
    // 1초 뒤에 실행
}, 1000);

// 매초마다 동작하는 비동기 함수
// 매개변수로 전달한 시간마다 동작한다
// let date1 = new Date();  // 현재 시간 받아온다
// date1.setTime(date1.getTime() + 10000000);

let setTime = setInterval(() => {
    let date2 = new Date();
    // // 객체가 아니고 값이 들어온 것이다
    // let time = date1.getTime() - date2.getTime();
    // // 1초마다 실행
    // times(time);
    let timeTag = document.querySelector('.popup-time');
    if(popupCookie != undefined){
        let time = JSON.parse(popupCookie).time;
        let date = new Date(time);
        console.log(date);
        console.log(date2);
        console.log(popupTime(date,date2));
        timeTag.innerHTML = times(popupTime(date,date2));
        
    } else{
        timeTag.innerHTML = 'time over';
    }
    
}, 1000);

function popupTime(date1, date2) {
    return date1.getTime() - date2.getTime();
}



function times(time) {
    // let sec = Math.floor(time / (24 * 60 * 60 * 1000));
    // let min = Math.floor(time / (60 * 60 * 1000));
    //console.log(min);
    let day = Math.floor(time / (24*60*60*1000));
    // 받아온 시간에서 날짜가 하루 단위로 있으면 나눠서 값을 넣어준다
    // 일단위 빼고
    time %= (24*60*60*1000);
    let hour = Math.floor(time/(60*60*1000));
    time %= (60*60*1000);
    let min = Math.floor(time/(60*1000));
    time %= (60*1000);
    let sec = Math.floor(time/(1000));
    console.log(day);
    console.log(hour);
    console.log(min);
    console.log(sec);
    if(time < 0){
        // 지울 interval 함수를 매개변수로 전달하면 된다
        clearInterval(setTime);
        let timeTag = document.querySelector('.popup-time');
        timeTag.innerHTML = '';
    }
    return `${day}일 ${hour}시 ${min}분 ${sec}초`
}
