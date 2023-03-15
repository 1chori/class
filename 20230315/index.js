// 배열 심화
// 배울 [1,2,3,4,5,6] 레퍼런스 타입
// 리스트 형태
// 인덱스의 순서로 해당 값에 접근할 수 있다
// 우리는 1부터 숫자를 세는데, 배열은 0에서부터 숫자를 센다

// C, C++, C# 등은 배열이 list 타입이 있는데, 자바스크립트는 Arr타입
// 사용자가 편하게 접근하기 위해 조금 허술한 부분이 있다.
// 자바스크립트의 배열은 객체. 키값이 0 1 2 3
// 자바스크립트의 배열 안의 배열은 객체 배열이다.
// 다른 언어 배열의 예 : int a [0][1];
// 자바스크립트
let a = [[1,2,3],[4,5,6],[7,8,9]];  // 배열 안의 배열 : 이중배열
console.log(a[0]);  // [1,2,3]
console.log(a[0][0]);  // 1 -> 0번 째 배열의 0번 째 값
// 대부분 이중배열까지만 사용한다


// 반복문에 숫자를 바로 작성하게 되면 반복문의 반복 횟수를 동적으로 변경하기 힘들다
// 현재 반복문은 7번 돌아가기 때문에 배열의 길이에 변경이 있으면 변경된 값을 가져오기 힘들다
let b = [1,2,3,4,5,6,7];
b.push(8);
// push() : 함수. 배열 메소드. 배열 타입의 함수
// 함수도 값이다
for (let i = 0; i < b.length; i++) {
    console.log(b[i]); // 1 2 3 4 5 6 7
}

// 객체 다시 보자

// const는 한번 선언하면 값을 변경할 수 없다. 재선언 또한 안된다
// 상수의 값
// 객체는 키와 값이 있다

const obj = {
    a : '나는 객체야',
    // 아래 함수를 익명 함수라 한다
    push : function (num) {
        console.log('나는 obj 객체 안에 push라는 키값에 있는 함수');
        console.log(num + '를 매개변수로 받았어');
    }
}
console.log(obj.a);
obj.push(2);

let d = [1,2,3,4,5];

// 배열 메소드 indexOf
// 배열 인덱스에 따른 값을 구할 수 있는 함수
// 해당 값을 찾아서 배열의 인덱스를 반환한다.
let return2 = d.indexOf(3);
console.log(return2); // 2 -> 배열의 2번째에 위치

let arr = ['사과','딸기','수박'];
let return3 = arr.indexOf('딸기');
console.log(return3);
console.log(arr.length);

// 배열 메소드 find
// 검색할 때 사용할 함수
// 함수 반환값이 ture 나오는 함수를 넣어주고 

// find 함수는 매개변수로 함수를 전달 받는다
let return4 = arr.find(function(item){
    console.log(item);
    // return 값이 true 값이 반환되면 해당 아이템을 find 함수에서 반환해준다.
    return item === '사과';
});
// true가 나오면 첫번째 값을 반환한다.
// 값을 내보내면 함수가 종료된다
console.log(return4);  // 사과

// 배열 메소드 findIndex
let return5 =  arr.findIndex(function(fruit) {
    return fruit === '딸기';
})
// 해당 배열을 반복시키면서 값을 찾고 그 값의 인덱스를 반환해준다
console.log(return5);  // 1

let arr2 = ['도시','레도미','배'];
// 배열 메소드 filter
// 문자열 가나다
let str = '가나다';
console.log(str[1]);  // 나
// 문자열도 인덱스로 한자 한자 접근이 가능하다

let return6 = arr2.filter(function(item) {
    return item[0] === '도';
})
// filter는 검색창같은 알고리즘 구현할 때 사용할거같다

// 원하는 값을 모두 찾아서 반환해준다
console.log(return6); // ['도시']

// 함수 메소드 map
let return7 = arr2.map(function(item) {
    console.log(item);
    // return item;
    // 반환값들을 배열의 형태로 반환해준다
    return item;
    return item[0] === '도';
})
// 반환값 나오면 배열의 길이만큼 채워서 반환
console.log(return7);  // ['도시', '도레미', '배']

// 배열 메소드 forEach
// 해당 배열을 반복시켜서 작업해야할 경우 용이하게 사용된다
arr2.forEach(function(item) {
    console.log(item);
})
// 배열의 길이만큼 반복하면서 값을 뽑아준다
// 값을 바로 사용할 수 있다
// 아이템을 순차적으로 뽑아준다

for (let i = 0; i < arr2.length; i++) {
    // 증가하는 값을 배열의 인덱스로 줘서 값을 확인했는데
    console.log(arr2[i]);
}

// 배열의 메소드 join
// join 함수는 매개변수로 문자열을 전달해준다.
console.log(arr2.join(''));  // 도시도레미배
console.log(arr2.join(','));  // 도시,도레미,배
// 배열을 문자열로 변경시켜준다
// 배열에 들어있는 값들의 구분을 매개변수로 전달한 문자열로 해준다

// split 함수
// 문자열을 배열로 변경
// split 함수의 매개변수로 문자열 값을 자를 문자값을 넣어주면 된다
// ',' 값을 매개변수로 전달하면 문자열에서 ,의 문자를 잘라서 배열의 형태로 변경시켜준다.
let str3 = arr2.join(',');
console.log(str3.split(','));  // ['도시', '도레미', '배']

let fruit = ['사과','배','기러기','딸기','이기자'];

function filterfunc(ezi) {
    return fruit.filter(function(ff) {
        return ff.indexOf(ezi) > -1;
    })
}

console.log(filterfunc('기'));