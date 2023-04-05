// 재귀함수
// 함수가 자기 자신을 호출하는 함수

// 쓸 일은 그렇게 많지 않지만, 알고리즘 문제 풀때 가끔 사용
// function add() {
//     add();
// }

// 임시로 데이터베이스에 추가할 때 사용한다

function add(n) {
    // 얼마나 반복 실행 시킬건지
    if (n < 5) {
        add(n + 1);
        console.log(n);
    }
}
add(0); // 4 3 2 1 0

// 값이 거꾸로 나온 이유
// 함수의 실행 컨텍스트
// add4 -> add3 -> add2 -> add 순으로 함수 실행

// 함수가 호출되면 실행 컨텍스트가 생성
// 함수 안의 함수를 호출하면서 실행 컨텍스트가 쌓이고 마지막부터 제거

// 피보나치 수열을 재귀로 사용
// 0,1,1,2,3,5
function fibonacci(n) {
    if (n < 2) return n;
    // 이전 두 항을 더해서 반환
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 5; i++) {
    console.log(fibonacci(i));
}

// |이 코드는 재귀 호출을 이용하여 함수를 반복적으로 호출하는 예제입니다.
// |
// |좋은 점:
// |- 재귀 호출을 이용하여 반복적인 작업을 수행할 수 있습니다.
// |- 종료 조건을 설정하여 무한 반복을 방지할 수 있습니다.
// |
// |나쁜 점:
// |- 재귀 호출을 남발하면 스택 오버플로우 등의 문제가 발생할 수 있습니다.
// |- 종료 조건을 설정하지 않으면 무한 반복에 빠질 수 있습니다.
function func(k) {
    if (k == 5) { // 재귀 호출 종료 조건
        return;
    }
    console.log('1');
    func(k + 1); // 재귀 호출
    console.log('2')
}
func(0);