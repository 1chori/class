// 배열 메서드 

// 배열 메서드 제일 많이 사용된다

// Array.of() : 전달된 인자를 요소로 가지는 배열을 만들어준다
const arr = Array.of(1, 2);
console.log(arr); // [1,2]

// 배열의 원본 배열을 수정하는 메서드
// 결과 값으로 새로운 배열을 반환시켜주는 것이 아니고 원본을 수정하는 메서드
arr.push(2)
console.log(arr); // [1,2,2]

// 원본 배열 수정이 아니고 새로운 배열이 생기고 반환된다
const result = arr.concat(5);
console.log(result); // [1,2,2,5]

// 레퍼런스 타입
console.log(arr == result); // false


// 참조 타입은 값을 비교하는게 아니고 주소를 비교한다
let a = [1, 2, 3];
let b = [...a];
b.push(2);
console.log(a == b); // true

const foods = ['apple', 'orange'];

// foods 배열에서 banana가 있는지 확인
if (foods.indexOf('banana') === -1) {
    // 없으면 원본에 추가
    foods.push('banana')
}
console.log(foods);

// includes : ES7에 도입
console.log(foods.includes('banana')) // 있으면 true, 없으면 false

// 있는지 없는지 확인할때 사용하면 좋다
if (!foods.includes('banana')) {
    foods.push('banana');
}

// 배열에 추가할 때 push() 메서드를 사용하는데 JS에서는 정해진 사이즈가 없어서
// index 에러가 따로 뜨지 않기 때문이다
const arr2 = [1, 2, 3];
// 배열의 인덱스는 갯수 - 1
arr2[arr2.length + 1] = 3;
// 배열의 끝에 추가하지 않고 더 이후의 인덱스에 값을 추가하면 중간 값들은 비어있다
console.log(arr2);

// 배열의 마지막 요소를 제거하는 메서드
// 원본이 수정되는 메서드
const arr3 = [1, 2, 3, 4, 5]
arr3.pop();
console.log(arr3);

// shift() : 첫 번째 요소를 제거한다. 원본이 수정되는 메서드
arr3.shift();
console.log(arr3);


// concat() : 배열 이어붙일 때 ex) 상품 list가 여러개 있고 원본 유지한 상태에 합칠 때 좋다
const arr1 = [1, 2];
const arr5 = [3, 4];
const arr4 = arr1.concat(arr5);
console.log(arr4);

// splice() : 원본 배열의 중간 값을 제거/추가 하는 경우

const arr6 = [1, 2, 3, 4];
const result2 = arr6.splice(1, 2, 20, 30); // 1,2번째 값을 제거하고 20,30 값을 추가
console.log(arr6);
// 함수의 반환은 제거한 요소들이 반환된다
console.log(result2); // [2,3]

const arr7 = [1, 2, 3, 4];
const result3 = arr7.splice(1, 2);
console.log(arr7); // [1,4]
console.log(result3); // [2,3]

// 배열에서 특정 요소 제거한 후 수정된 배열을 반환하는 함수
const arr8 = [1, 2, 3, 1, 50, 6];
function remove(arr, item) {  // 배열(arr) 및 배열에서 제거할 항목(item)의 두 인수를 사용하는 함수 remove 정의
    // 제거할 item 인덱스 먼저 찾자
    const index = arr.indexOf(item); // arr.indexOf(item)은 arr에서 item이 처음 나타나는 인덱스를 찾는 데 사용.
    if (index !== -1) {              // 찾을 수 없으면 indexOf는 -1 반환
        arr.splice(index, 1); // 배열에서 항목이 발견되면 해당 인덱스에서 하나 제거
    }
    return arr;
}
console.log(remove(arr8, 20));  // arr8 배열에 20 항목이 없기 때문에 원래 배열을 반환

// slice() : 매개변수로 전달받은 범위의 아이템을 복사해서 배열을 반환해주는 함수
// 원본 배열은 변환 X
const arr9 = [1, 2, 3];
arr9.slice(0, 1);
console.log(arr9);
console.log(arr9.slice(0, 1));
console.log(arr9.slice(0, 2));

// join() : 원본 배열의 모든 요소를 문자열로 변환
const arr10 = [1, 2, 3, 4];
console.log(arr10.join());  // 1,2,3,4

// reverse() : 배열을 뒤집어 주는 메서드
console.log(arr10.reverse());  // [4,3,2,1]


// fill() : ES6 인자로 전달받은 값을 배열의 처음부터 끝가지 채워준다
// 배열의 갯수를 유지하되 값을 초기화 해야할 때 사용
const arr11 = [1, 2, 3, 4, 5];
arr11.fill(1);
console.log(arr11);

// flat() : 배열의 뎁스를 1차 배열로 맞춰준다.
const arr12 = [1, [2, 3, 4], [3, 4]].flat();
console.log(arr12);  // [1,2,3,4,3,4]

const arr13 = [1, [2, [3]], [2, [5]]].flat(2);  // 매개변수로 뎁스의 갯수를 넣어주자
console.log(arr13); // [1,2,3,2,5]

const arr14 = [[[[[1]]]]].flat(Infinity); // 뎁스가 몇개는 꺼내준다
console.log(arr14);