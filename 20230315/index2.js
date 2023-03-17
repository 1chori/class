let str = '가나다라마바사'

// 문자열 함수를 알아보자
// 문자열은 배열이 아니다
// 하지만 인덱스로 값에 접근은 가능하다
console.log(str.indexOf('다')); // 2

// 문자열의 길이
console.log(str.length); // 7

// 문자열 함수 slice
// 문자열을 잘라주는 역할 한다
// 매개변수를 두 개를 전달해야 한다
// 시작점과 끝점
// 첫 매개변수가 시작 지점 인덱스
// 두 번째 매개변수가 끝나는 인덱스

console.log(str.slice(1,3)); // 나다
console.log(str.slice(3,6)); // 라마바

// 문자열 함수 split
// 매개변수로 전달한 값을 잘라내고 배열의 형태로 변경해준다
// 빈 문자열이 들어가면 한 자 한 자 다 잘라서 배열의 형태로 변경해준다

console.log(str.split('')); // ['가','나','다','라','마','바','사']
console.log(str.split('라')); // ['가나다', '마바사']

// 문자열 함수 중 대소문자 변경하는 함수들
let str2 = 'abcdefg';
let str3 = 'ABCDEFG';

// toUpperCase 대문자로 변경해주는 함수
console.log(str2.toUpperCase());

// toLowerCase 소문자로 변경해주는 함수
console.log(str3.toLowerCase());



let arr = [1,2,3,4];
arr.splice(1,2);