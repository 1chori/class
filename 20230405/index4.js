// 이터러블과 이터레이터 -> ES6에 추가되었다
// 이터러블은 반복이 가능한 객체라는 뜻

// 이터러블을 반복하는 반복문
// forEach : 배열이나 NodeList를 순회하면서 아이템을 아이템의 갯수만큼 반복 실행
// for of : 이터러블의 아이템을 반복 실행한다

// Symbol : ES6에 추가된 원시타입
// 값이 겹치지 않고 선언되고 변경이 불가능
// 객체의 속성에 접근하기 위해 사용

// 반복자 Symbol.iterator : 이터러블 객체를 나타내는 메서드 이름으로 사용. 해당 객체가 이터러블이라는 뜻

// Symbol.iterator 메서드가 이터레이터 객체를 반환한다.
// 이터레이터 : 이터러블 객체의 각 아이템에 접근하기 위한 기능
// 이터레이터 객체의 next 메서드가 있다.
// next 메서드를 사용하면 {value, done} 객체를 반환한다.
// 반복중인 아이템을 value에 done은 끝났는지 알려준다
// 이터레이터는 이터러블(반복 가능한 객체)를 순차적으로 접근할 수 있는 기능

// 자바스크립트의 배열이나 문자열 등도 이터러블이다

// const Arr = [1, 2, 3];
// console.log(Arr);
// const objIter = {
//     index: 0,
//     next: function () {
//         if (this.index < Arr.length) {
//             // done은 마지막 요소가 맞는지
//             return { value: Arr[this.index++], done: false };
//         } else {
//             return { done: true };
//         }
//     }
// }

// let result = objIter.next();
// console.log(result.value, result.done);
// result = objIter.next();
// console.log(result.value, result.done);
// result = objIter.next();
// console.log(result.value, result.done);
// result = objIter.next();
// console.log(result.value, result.done);


// 이터러블 작성
const Arr2 = [1, 2, 3, 4, 5];
// Symbol.iterator은 객체의 속성에 접근하는데 사용
const iter2 = Arr2[Symbol.iterator](); // 이터레이터 객체를 반환해준다
let result2 = iter2.next();
console.log(result2);
result2 = iter2.next();
console.log(result2);
result2 = iter2.next();
console.log(result2);
result2 = iter2.next();
console.log(result2);
result2 = iter2.next();
console.log(result2);
result2 = iter2.next();
console.log(result2);
result2 = iter2.next();
console.log(result2);

// 이 개념은 값을 바꾸는데 편하고 적합한 함수
// reduce 함수 값을 바꾸는데 적합한 함수
// ex) 이터러블 이터레이터를 따르는 이터레이터 값이 value가 숫자라면
// 문자로 바꿀 수 있고 여러가지 방법으로 값을 바꿀 수 있다.
// 배열이나 객체와 같은 데이터도 줄일 수 있다

const Arr3 = [1, 2, 30, 4, 5, 15, 10];

// reduce 메서드
// 첫 번째 매개변수는 콜백 함수, 두 번째 매개변수에 초기값을 넣어준다
// 초기값을 안넣으면 배여르이 0번이 초기값으로 설정된다

// 두 값을 더하면서 반환시키는 기능
const temp3 = Arr3.reduce(function (acc, value) {
    // acc 이전 결과값 return됨
    console.log('acc :', acc);
    console.log('value :', value);
    console.log(acc + value);
    // return acc + value;
    if (acc === 33) {
        return 50
    } else {
        return acc + value;
    }
}, 0);

// 배열을 순회하면서 제일 큰 값을 반환시켜주는 기능
const max = Arr3.reduce(function (acc, value) {
    console.log('acc: ', acc);
    console.log('value : ', value);
    // 두 개를 비교해서 값이 큰지 확인하고 큰 값을 반환
    return acc > value ? acc : value;
})

console.log(max);

// 배열을 순회하면서 제일 작은 값을 반환시켜주는 기능
const min = Arr3.reduce(function (acc, value) {
    // 두 개를 비교해서 반환값보다 작은지 비교
    return acc < value ? acc : value;
})
console.log(min);
