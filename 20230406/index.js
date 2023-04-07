// Set, Map
// Set : 배열에 중복되지 않는 값을 저장할 수 있다.(중복되지 않는 유일한 값들)
// 배열에는 중복값이 저장될 수 있는데, set은 중복이 안되는 값을 저장할 수 있다.

// 배열은 요소에 순서가 의미가 있는데 set은 없다
// 배열은 인덱스로 접근을 하는데 set은 메서드를 이용해서 접근한다

// Set : ES6 값으로만 이루어져있고, 중복값 허용 X

const s = new Set();
console.log(s);

// add 메서드를 이용해서 요소를 추가하는 방법
s.add('one');
s.add('one');  // 중복 허용 X
s.add('two');
s.add('three');
console.log(s);

const arr = [1, 2, 3, 4, 5];
// 생성단계에서 생성자 함수에 배열을 전달
const ss = new Set(arr);
console.log(ss);

// 값을 가지고 있는지 확인하는 메서드 : has()
console.log(ss.has(2)); // true

// 어떠한 값을 제거하는 메서드 : delete()
ss.delete(2);
console.log(ss);  // Set(4) {1,3,4,5}

// 모든 값을 제거하는 메서드 : clear()
// ss.clear();
// console.log(ss);

// forEach도 이터러블 반복자
ss.forEach((i) => {
    console.log(i);  // 1,3,4,5
})

// SetIterator 객체로 반환 : entries()
const temp = ss.entries();
console.log(temp.next().value);

// Map : 키와 벨류를 저장하는데 키 값을 객체로도 할 수 있다.
//      ES6부터 추가됬고 키와 벨류를 한쌍으로 저장하고 중복된 키 값을 허용하지 않는다
//      iterator를 통해 Map 객체 내부를 순회할 수 있다.

const map = new Map();

// 값 추가
// Map은 값을 추가할 때, 키와 같이 한쌍으로 추가해줘야 한다.
// set 메서드를 통해 키와 값 저장
map.set('one', 1);
map.set('two', 2);
map.set('two', 2);  // 중복 허용 X
console.log(map);

// 키로 저장된 값을 호출하기 위해 키를 저장한다.
// map은 get이라는 메서드로 값을 호출할 수 있다

console.log(map.get('one'));
console.log(map.get('two'));

// 값을 저장하면 삭제도 해야지
// delete 메서드는 삭제할 해당 키값을 매개변수로 전달
// map.delete('one');
// console.log(map);

// map에 저장된 요소가 몇개인지 사이즈 확인
console.log(map.size);  // 1

const keys = map.keys();  // key만 호출
console.log(keys);  // two

const values = map.values();  // value만 호출
console.log(values);  // 2

// entries() : [키, 값] 형태의 정보들을 모아서 MapIterator 객체로 변환되서 반환
const iter = map.entries();
console.log(iter);

console.log(iter.next().value);

// 키 정보만 출력시키게 for..of문으로 작성

for (const iterator of keys) {
    // 이터레이터 요소가 끝날때까지 반복하면서 요소를 보여준다
    console.log(iterator);
}

// 값만 보여주자
for (const iterator of values) {
    console.log(iterator);
}

// 키와 값 출력
// 구조 분해 할당
for (const [key, value] of iter) {
    console.log(`키는 ${key}, 값은 ${value}`);
}

// forEach문으로 키와 값 호출
map.forEach((value, key) => {
    console.log(`키는 ${key}, 값은 ${value}`);
})