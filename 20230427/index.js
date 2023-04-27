// nodejs 설치버전 확인 node -v

// nodejs의 Repl
// REPL(Read-Eval-Print-Loop)
// 읽기-해석(실행)-출력-반복
// 코도를 입력하면 즉시 실행해서 결과를 반환해주는 인터페이스
// nodejs의 코드를 test하고 실행할 수 있도록 해주는 대화형 콘솔이다.

// 레포 모드 활성
// 터미날 창 열고 node써주면 된다

// 레포모드 종료
// Ctrl + C


// 레포 모드에서 test코드를 작성해보자
const str = 'hello nodejs';
console.log(str);
// 출력된 값은 'hello nodejs'가 나오고
// 함수의 반환값이 다음으로 출력되는데
// console.log(str) 함수의 반환값은 undefined

// js와 nodejs의 런타임 환경은 다르다
// js에서 this의 전역객체가 window, nodejs에서 this의 전역객체는 global

// node로 파일을 실행해서 응용프로그램으로 만들어보자