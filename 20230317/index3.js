// 생성자 함수를 만든다
let objArr = [];

function create(name, age, content) {
    this.name = name;
    this.age = age;
    this.content = content;
}

// 객체를 만들 수 있다

function divBtn() {
    // 버튼 누르면 실행시킬 기능
    console.log('눌리나?');
    addArr();
    // 화면 업데이트 하기 위해 만든 함수
    render();
}

function addArr() {
    // new 키워드로 빈객체 만들고 함수에서 this로 그 객체를 참조해서 
    // name 키에는 값을 매개변수로 '이름'
    // age 키에는 값을 매개변수로 10
    // content 키에는 값을 매개변수로 '컨텐츠'
    // 매개변수로 전달해서 빈 객체에 키값을 추가해준다
    // obj라는 변수에 만들어진 객체를 넣어준다

    // input 태그명으로 querSelcetorAll 메서드 매개변수로 전달해서
    // input 태그들을 배열로 가져와서 inputs 변수에 담아놓는다
    let inputs = document.querySelectorAll('input');
    console.log(inputs)
    // input 태그는 value라는 키값이 있다
    // input에 입력한 값이 value 키에 값으로 담긴다
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);

    let obj = new create(inputs[0].value,inputs[1].value,inputs[2].vlaue);
    objArr.push(obj);
    console.log(objArr);
    // 객체와 배열은 레퍼런스 타입이기 때문에 값이 아니라 주소를 들고있다
    // 저렇게 보이는 현상은 일반 변수는 값을 가리키는 주소
    // 주소를 들고 있다는 개념...많이 공부하자
    // 주소를 console에 찍기 때문에 주소를 바라보면 마지막으로 변한 값을 확인할 수 있다

}

// 무언가를 그려주는 함수
function render() {
    // 랜더링 하기 전에 문자열 초기화
    let text = '';
    // += 원래 있는 값에 추가를 시켜준다(값을 덧붙인다)
    objArr.forEach(function (i) {
        text += `<li> 이름 : ${i.name} 나이 : ${i.age} 내용 : ${i.content}</li>`
    })
    console.log(text);
    // 여기서 사용하고 끝. text는 지역변수
    document.querySelector('#tables').innerHTML = text;
}